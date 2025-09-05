import json, os, random, time, uuid
from flask import Flask, request, jsonify, session

app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET", "dev-key")

BASE_DIR   = os.path.dirname(__file__)
DATA_PATH  = os.path.join(BASE_DIR, "storage", "balances.json")
CREDITS_DIR = os.path.join(BASE_DIR, "storage", "credits")

FLAG = os.getenv("FLAG", "CTF{default_flag}")
FLAG_THRESHOLD = int(os.getenv("FLAG_THRESHOLD", "8000"))

USERS = {"attacker": "dragonball", "GrandKai": "zeni"}


# ---------------- E/S resiliente (sem lock) ----------------

def ensure_dirs():
    os.makedirs(os.path.dirname(DATA_PATH), exist_ok=True)
    os.makedirs(CREDITS_DIR, exist_ok=True)

def load_balances():
    ensure_dirs()
    for _ in range(6):
        try:
            with open(DATA_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except (json.JSONDecodeError, FileNotFoundError):
            time.sleep(0.05)
    return {"GrandKai": 1000, "attacker": 0}

def save_balances(bal):
    ensure_dirs()
    tmp_path = DATA_PATH + f".{uuid.uuid4().hex}.tmp"
    with open(tmp_path, "w", encoding="utf-8") as f:
        json.dump(bal, f, ensure_ascii=False, indent=2)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp_path, DATA_PATH)

def append_credit(user: str, amount: int):
    ensure_dirs()
    path = os.path.join(CREDITS_DIR, f"{user}.{uuid.uuid4().hex}.cred")
    with open(path, "w", encoding="utf-8") as f:
        f.write(str(int(amount)))
        f.flush()
        os.fsync(f.fileno())

def sum_credits(user: str) -> int:
    total = 0
    try:
        for name in os.listdir(CREDITS_DIR):
            if not (name.startswith(user + ".") and name.endswith(".cred")):
                continue
            p = os.path.join(CREDITS_DIR, name)
            try:
                with open(p, "r", encoding="utf-8") as f:
                    v = f.read().strip()
                if v:
                    total += int(v)
            except Exception:
                pass
    except FileNotFoundError:
        pass
    return total

def effective_balance(user: str) -> int:
    base = int(load_balances().get(user, 0))
    return base + sum_credits(user)


# ------------------- Auth & helpers -------------------

@app.post("/login")
def login():
    data = request.get_json(silent=True) or {}
    user = data.get("username")
    pwd  = data.get("password")
    if USERS.get(user) == pwd:
        session["user"] = user
        return jsonify({"ok": True, "user": user})
    return jsonify({"ok": False, "error": "invalid creds"}), 401

def require_login():
    user = session.get("user")
    if not user:
        return None, (jsonify({"ok": False, "error": "unauthorized"}), 401)
    return user, None


# ------------------- Endpoints do CTF -------------------

@app.get("/balance")
def balance():
    user, err = require_login()
    if err: return err
    return jsonify({"ok": True, "user": user, "balance": effective_balance(user)})

# --------- VULN: TOCTOU em 2 fases -----------
@app.post("/transfer")
def transfer():
    user, err = require_login()
    if err: return err

    data = request.get_json(silent=True) or {}
    from_user = data.get("fromUser", "GrandKai")
    to_user   = data.get("toUser", user)
    amount    = int(data.get("amount", 1))  
    if amount <= 0:
        return jsonify({"ok": False, "error": "invalid amount"}), 400

    # T1: snapshot + checagem
    bal = load_balances()
    src_balance = int(bal.get(from_user, 0))
    if src_balance < amount:
        return jsonify({"ok": False, "error": "insufficient funds"}), 400

    # Janela 1: entre validar e debitar (onde o atacante ganha a corrida)
    time.sleep(random.uniform(0.30, 0.70))

    # T2: débito com base no snapshot (lost update aqui é desejado p/ demo)
    bal[from_user] = src_balance - amount
    save_balances(bal)

    # Janela 2: entre débito e crédito
    time.sleep(random.uniform(0.10, 0.30))

    # T3: CRÉDITO ACUMULATIVO (ledger) — cada 200 OK soma de verdade
    append_credit(to_user, amount)

    return jsonify({"ok": True, "from": from_user, "to": to_user, "amount": amount})
# ---------------------------------------------

@app.get("/ZmxhZ0RyYWdvblRvcEZsYWdUT3A")
def secret_flag():
    user, err = require_login()
    if err: return err
    if effective_balance("attacker") >= FLAG_THRESHOLD:
        return jsonify({"ok": True, "flag": FLAG})
    return jsonify({"ok": False, "error": "balance too low"}), 403

@app.post("/reset")
def reset_bals():
    save_balances({"GrandKai": 1000, "attacker": 0})
    try:
        for name in os.listdir(CREDITS_DIR):
            try:
                os.remove(os.path.join(CREDITS_DIR, name))
            except Exception:
                pass
    except FileNotFoundError:
        pass
    return jsonify({"ok": True})
