"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Lightbulb, Rocket, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-charcoal-black text-pure-white py-12 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bangers text-dragon-orange text-center mb-8"
        >
          Sobre o Capsule Corporation Bank
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bangers text-star-yellow mb-4">Nossa História</h2>
          <p className="text-lg leading-relaxed">
            A Capsule Corporation Bank nasceu do gênio de Bulma: um banco digital que guarda Zeni em cápsulas seguras de última geração. Boatos dizem que uma falha de concorrência abre brechas entre a verificação e a execução das transações — mas isso é, claro, só boato… Para clientes comuns, a experiência é premium: painéis reativos, transferências rápidas e uma pitada de magia Shenlong nos detalhes visuais. Prepare-se para entrar no banco que financia as aventuras do mundo Dragon!
          </p>
        </motion.section>

        <Separator className="my-12 bg-panel-gray-3" />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bangers text-star-yellow mb-4">Como funciona o banco</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-deep-cyan mb-2" />
                <CardTitle>Cápsulas de Zeni</CardTitle>
              </CardHeader>
              <CardContent>
                Seu dinheiro é armazenado em cápsulas digitais, protegidas por tecnologia de ponta da Capsule Corp.
              </CardContent>
            </Card>
            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow">
              <CardHeader>
                <Rocket className="h-8 w-8 text-deep-cyan mb-2" />
                <CardTitle>Transferências Instantâneas</CardTitle>
              </CardHeader>
              <CardContent>
                Envie Zeni para qualquer lugar do universo em um piscar de olhos, sem burocracia.
              </CardContent>
            </Card>
            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-deep-cyan mb-2" />
                <CardTitle>Segurança Saiyajin</CardTitle>
              </CardHeader>
              <CardContent>
                Nossos sistemas são robustos como um Super Saiyajin, garantindo a proteção dos seus dados.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <Separator className="my-12 bg-panel-gray-3" />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Adicionar mais cards ou informações sobre a tecnologia aqui */}
        </motion.section>
      </div>
    </main>
  );
}


