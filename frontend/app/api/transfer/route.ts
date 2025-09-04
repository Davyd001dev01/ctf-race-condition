export async function POST(req: Request) {
  const BACKEND = process.env.BACKEND_URL!;
  const body = await req.text();
  const r = await fetch(`${BACKEND}/transfer`, {
    method: "POST",
    headers: {
      "content-type": req.headers.get("content-type") || "application/json",
      cookie: req.headers.get("cookie") || ""
    },
    body
  });
  return new Response(await r.text(), { status: r.status });
}
