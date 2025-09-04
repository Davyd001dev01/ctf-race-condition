import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const BACKEND = process.env.BACKEND_URL!;
  const body = await req.text();

  const r = await fetch(`${BACKEND}/login`, {
    method: "POST",
    headers: { "content-type": req.headers.get("content-type") || "application/json" },
    body
  });

  const text = await r.text();
  const resp = new NextResponse(text, { status: r.status });

  const setCookie = r.headers.get("set-cookie");
  if (setCookie) resp.headers.set("set-cookie", setCookie); // repassa cookie do Flask
  return resp;
}
