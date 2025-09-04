"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Hero } from '@/components/site/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const [msg, setMsg] = useState<string|undefined>();
  const router = useRouter();

  useEffect(() => {
    // Injeta comentário HTML (renderiza no source do navegador)
    const marker = document.createComment(" user: attacker | password: dragonball ");
    document.body.appendChild(marker);
    return () => { /* no-op */ };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(undefined);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      router.push("/lab/race");
    } else {
      const j = await res.json().catch(() => ({}));
      setMsg(j.error || "Falha no login");
    }
  }

  return (
    <main>
      <Hero />
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="max-w-md mx-auto bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bangers text-dragon-orange">Acesse sua conta</CardTitle>
                <CardDescription className="text-pure-white">Entre no banco que financia as aventuras do mundo Dragon!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Usuário</Label>
                    <Input id="username" placeholder="ex: goku" className="bg-panel-gray-3 text-pure-white" value={username} onChange={e => setU(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="ex: K@m3h@m3h@" className="bg-panel-gray-3 text-pure-white" value={password} onChange={e => setP(e.target.value)} />
                  </div>
                  <Button type="submit" className="w-full bg-dragon-orange text-pure-white hover:bg-star-yellow">Entrar no Banco</Button>
                </form>
                {msg && <p className="text-red-500 mt-4">{msg}</p>}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


