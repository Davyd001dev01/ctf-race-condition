"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { RefreshCw, Flag } from "lucide-react";

type BalanceResp = { ok: boolean; user: string; balance: number };

export default function RaceLab() {
  const [balance, setBalance] = useState<number | null>(null);
  const [fromUser, setFrom] = useState("GrandKai");
  const [toUser, setTo] = useState("attacker");
  const [amount, setAmount] = useState(10);
  const [out, setOut] = useState<string>("");

  async function refreshBalance() {
    const res = await fetch("/api/balance", { cache: "no-store" });
    if (!res.ok) { setOut("Não logado? Vá à /"); return; }
    const j: BalanceResp = await res.json();
    setBalance(j.balance);
  }

  async function sendOnce() {
    const res = await fetch("/api/transfer", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fromUser, toUser, amount })
    });
    const j = await res.json();
    setOut(JSON.stringify(j));
    await refreshBalance();
  }

  async function tryFlag() {
    const res = await fetch("/api/flag", { cache: "no-store" });
    const j = await res.json();
    setOut(JSON.stringify(j));
  }

  useEffect(() => { refreshBalance(); }, []);

  return (
    <main className="min-h-screen bg-charcoal-black text-pure-white py-12 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bangers text-dragon-orange text-center mb-8"
        >
          Laboratório de Corrida Temporal
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Saldo e Transferência */}
          <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bangers text-star-yellow">Saldo Zeni</CardTitle>
              <CardDescription className="text-pure-white">Seu saldo atual de Zeni.</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.p
                className="text-5xl font-bold mb-4"
                key={balance}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {balance !== null ? balance.toLocaleString("pt-BR") : "Carregando..."} Zeni
              </motion.p>
              <Button onClick={refreshBalance} className="w-full bg-capsule-blue text-pure-white hover:bg-deep-cyan flex items-center justify-center">
                <RefreshCw className="mr-2 h-4 w-4" /> Atualizar Saldo
              </Button>

              <div className="mt-8">
                <h3 className="text-2xl font-bangers text-star-yellow mb-4">Transferir Zeni</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="fromUser">De (Origem)</Label>
                    <Input id="fromUser" value={fromUser} onChange={e => setFrom(e.target.value)} placeholder="Usuário de Origem" className="bg-panel-gray-3 text-pure-white" />
                  </div>
                  <div>
                    <Label htmlFor="toUser">Para (Destino)</Label>
                    <Input id="toUser" value={toUser} onChange={e => setTo(e.target.value)} placeholder="Usuário de Destino" className="bg-panel-gray-3 text-pure-white" />
                  </div>
                  <div>
                    <Label htmlFor="amount">Quantidade</Label>
                    <Input id="amount" type="number" value={amount} onChange={e => setAmount(parseInt(e.target.value || "0", 10))} placeholder="Quantidade de Zeni" className="bg-panel-gray-3 text-pure-white" />
                  </div>
                  <Button onClick={sendOnce} className="w-full bg-dragon-orange text-pure-white hover:bg-star-yellow">
                    Transferir (1x)
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Painel de Logs e Flag */}
          <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bangers text-star-yellow">Painel de Telemetria Ki</CardTitle>
              <CardDescription className="text-pure-white">Logs de transações e eventos do sistema.</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-charcoal-black text-green-400 p-4 rounded-lg overflow-auto h-64 font-mono text-sm">
                {out || "Aguardando telemetria..."}
              </pre>
              <div className="mt-4 flex flex-col space-y-4">
                <Button onClick={tryFlag} className="w-full bg-capsule-blue text-pure-white hover:bg-deep-cyan flex items-center justify-center">
                  <Flag className="mr-2 h-4 w-4" /> Analisar
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className="bg-panel-gray-2 text-pure-white cursor-help">
                        Dica do Mestre Kame
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent className="bg-panel-gray-3 text-pure-white border-panel-gray-2">
                      <p>A concorrência é uma força poderosa. Observe os fluxos de energia!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}


