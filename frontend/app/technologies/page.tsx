"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Rocket, Zap, Shield, Database, Cpu, Wifi } from 'lucide-react';
import { useState } from 'react';

export default function TechnologiesPage() {
  const [selectedTech, setSelectedTech] = useState('dynocaps');
  const [researchProgress, setResearchProgress] = useState(75);

  const technologies = [
    {
      id: 'dynocaps',
      name: 'DynoCaps',
      description: 'Tecnologia revolucionária de compressão de matéria',
      icon: <Database className="h-8 w-8" />,
      progress: 100,
      status: 'Ativo'
    },
    {
      id: 'dragon-radar',
      name: 'Dragon Radar',
      description: 'Detector de Esferas do Dragão de alta precisão',
      icon: <Wifi className="h-8 w-8" />,
      progress: 95,
      status: 'Ativo'
    },
    {
      id: 'time-machine',
      name: 'Máquina do Tempo',
      description: 'Viagem temporal experimental',
      icon: <Rocket className="h-8 w-8" />,
      progress: 60,
      status: 'Em Desenvolvimento'
    },
    {
      id: 'gravity-chamber',
      name: 'Câmara de Gravidade',
      description: 'Simulador de gravidade para treinamento',
      icon: <Zap className="h-8 w-8" />,
      progress: 90,
      status: 'Ativo'
    }
  ];

  return (
    <main className="min-h-screen bg-charcoal-black text-pure-white py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bangers text-dragon-orange mb-4">
            Tecnologias da Capsule Corp
          </h1>
          <p className="text-xl text-pure-white max-w-3xl mx-auto">
            Descubra as inovações tecnológicas mais avançadas do universo, desenvolvidas pelo gênio de Bulma e sua equipe de cientistas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Painel de Controle Principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bangers text-star-yellow flex items-center">
                  <Cpu className="mr-3 h-8 w-8" />
                  Centro de Controle Tecnológico
                </CardTitle>
                <CardDescription className="text-pure-white">
                  Monitore e controle todas as tecnologias da Capsule Corp em tempo real.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedTech} onValueChange={setSelectedTech} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-panel-gray-3">
                    {technologies.map((tech) => (
                      <TabsTrigger key={tech.id} value={tech.id} className="text-xs">
                        {tech.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {technologies.map((tech) => (
                    <TabsContent key={tech.id} value={tech.id} className="mt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-deep-cyan">{tech.icon}</div>
                            <div>
                              <h3 className="text-xl font-bangers">{tech.name}</h3>
                              <p className="text-sm text-gray-300">{tech.description}</p>
                            </div>
                          </div>
                          <Badge variant={tech.status === 'Ativo' ? 'default' : 'secondary'}>
                            {tech.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progresso de Desenvolvimento</span>
                            <span>{tech.progress}%</span>
                          </div>
                          <Progress value={tech.progress} className="w-full" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <Button className="bg-dragon-orange hover:bg-star-yellow">
                            Ativar Sistema
                          </Button>
                          <Button variant="outline" className="border-deep-cyan text-deep-cyan hover:bg-deep-cyan hover:text-pure-white">
                            Diagnóstico
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Painel de Status */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bangers text-star-yellow">Status do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Energia Ki</span>
                    <Badge className="bg-green-500">100%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Segurança</span>
                    <Badge className="bg-green-500">Ativo</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rede Neural</span>
                    <Badge className="bg-yellow-500">Sincronizando</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Backup</span>
                    <Badge className="bg-green-500">OK</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bangers text-star-yellow">Pesquisa Ativa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="research-input">Projeto de Pesquisa</Label>
                    <Input 
                      id="research-input" 
                      placeholder="Ex: Energia Infinita" 
                      className="bg-panel-gray-3 text-pure-white mt-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso Atual</span>
                      <span>{researchProgress}%</span>
                    </div>
                    <Progress value={researchProgress} className="w-full" />
                  </div>
                  <Button 
                    className="w-full bg-capsule-blue hover:bg-deep-cyan"
                    onClick={() => setResearchProgress(Math.min(100, researchProgress + 5))}
                  >
                    Acelerar Pesquisa
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Separator className="my-12 bg-panel-gray-3" />

        {/* Galeria de Tecnologias */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bangers text-star-yellow text-center mb-8">
            Galeria de Inovações
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/capsules.png" 
                  alt="DynoCaps" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">DynoCaps</CardTitle>
                <CardDescription className="text-pure-white">
                  A revolução da compressão de matéria que permite armazenar qualquer objeto em uma pequena cápsula.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/bulma-tech.png" 
                  alt="Dragon Radar" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">Dragon Radar</CardTitle>
                <CardDescription className="text-pure-white">
                  Detector de alta precisão capaz de localizar as Esferas do Dragão em qualquer lugar do universo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/capsule-corp-building.png" 
                  alt="Capsule Corp" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">Sede da Capsule Corp</CardTitle>
                <CardDescription className="text-pure-white">
                  O centro de inovação tecnológica mais avançado do mundo, onde o futuro é criado todos os dias.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

