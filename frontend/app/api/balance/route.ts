export async function GET(req: Request) {
  const BACKEND = process.env.BACKEND_URL!;
  const r = await fetch(`${BACKEND}/balance`, {
    headers: { cookie: req.headers.get("cookie") || "" },
    cache: "no-store"
  });
  return new Response(await r.text(), { status: r.status });
}
