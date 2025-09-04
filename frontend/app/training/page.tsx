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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Zap, Target, Dumbbell, Timer, Settings, Play, Pause, RotateCcw, TrendingUp, Award, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TrainingPage() {
  const [gravityLevel, setGravityLevel] = useState([100]);
  const [trainingDuration, setTrainingDuration] = useState([30]);
  const [powerLevel, setPowerLevel] = useState(8500);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [selectedTrainingType, setSelectedTrainingType] = useState('strength');
  const [trainingIntensity, setTrainingIntensity] = useState([75]);
  const [kiControl, setKiControl] = useState([50]);
  const [endurance, setEndurance] = useState([60]);
  const [speed, setSpeed] = useState([70]);
  const [technique, setTechnique] = useState([65]);
  const [trainingGoal, setTrainingGoal] = useState('');
  const [personalizedRoutine, setPersonalizedRoutine] = useState('');
  const [nutritionPlan, setNutritionPlan] = useState('');
  const [mentalFocus, setMentalFocus] = useState([80]);
  const [recoveryTime, setRecoveryTime] = useState([24]);
  const [trainingPartner, setTrainingPartner] = useState('');
  const [environmentType, setEnvironmentType] = useState('gravity-chamber');
  const [weatherCondition, setWeatherCondition] = useState('normal');
  const [musicPreference, setMusicPreference] = useState('');
  const [motivationalQuote, setMotivationalQuote] = useState('');

  const trainingTypes = [
    { id: 'strength', name: 'Força Física', icon: <Dumbbell className="h-5 w-5" />, color: 'text-red-500' },
    { id: 'speed', name: 'Velocidade', icon: <Zap className="h-5 w-5" />, color: 'text-yellow-500' },
    { id: 'ki', name: 'Controle de Ki', icon: <Flame className="h-5 w-5" />, color: 'text-blue-500' },
    { id: 'technique', name: 'Técnicas', icon: <Target className="h-5 w-5" />, color: 'text-green-500' },
    { id: 'endurance', name: 'Resistência', icon: <Timer className="h-5 w-5" />, color: 'text-purple-500' }
  ];

  const environments = [
    { id: 'gravity-chamber', name: 'Câmara de Gravidade', multiplier: 1.5 },
    { id: 'hyperbolic-time', name: 'Sala do Tempo', multiplier: 2.0 },
    { id: 'planet-vegeta', name: 'Planeta Vegeta', multiplier: 1.8 },
    { id: 'namek', name: 'Namekusei', multiplier: 1.2 },
    { id: 'earth', name: 'Terra', multiplier: 1.0 }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTraining) {
      interval = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            setIsTraining(false);
            setPowerLevel(prev => prev + Math.floor(Math.random() * 500) + 100);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isTraining]);

  const startTraining = () => {
    setIsTraining(true);
    setTrainingProgress(0);
  };

  const pauseTraining = () => {
    setIsTraining(false);
  };

  const resetTraining = () => {
    setIsTraining(false);
    setTrainingProgress(0);
  };

  const calculateTrainingEfficiency = () => {
    const baseEfficiency = (gravityLevel[0] / 100) * (trainingIntensity[0] / 100);
    const environmentMultiplier = environments.find(env => env.id === environmentType)?.multiplier || 1;
    return Math.round(baseEfficiency * environmentMultiplier * 100);
  };

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
            Treinamento Saiyajin Personalizado
          </h1>
          <p className="text-xl text-pure-white max-w-3xl mx-auto">
            Configure seu treinamento personalizado e alcance novos níveis de poder como um verdadeiro guerreiro Saiyajin.
          </p>
        </motion.div>

        {/* Painel Principal de Controle */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-3xl font-bangers text-star-yellow flex items-center">
                  <Settings className="mr-3 h-8 w-8" />
                  Centro de Controle de Treinamento
                </CardTitle>
                <CardDescription className="text-pure-white">
                  Configure todos os parâmetros do seu treinamento personalizado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-panel-gray-3">
                    <TabsTrigger value="basic">Básico</TabsTrigger>
                    <TabsTrigger value="advanced">Avançado</TabsTrigger>
                    <TabsTrigger value="environment">Ambiente</TabsTrigger>
                    <TabsTrigger value="personal">Pessoal</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="basic" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="gravity">Nível de Gravidade: {gravityLevel[0]}x</Label>
                          <Slider
                            id="gravity"
                            min={1}
                            max={1000}
                            step={1}
                            value={gravityLevel}
                            onValueChange={setGravityLevel}
                            className="mt-2"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="duration">Duração (minutos): {trainingDuration[0]}</Label>
                          <Slider
                            id="duration"
                            min={5}
                            max={480}
                            step={5}
                            value={trainingDuration}
                            onValueChange={setTrainingDuration}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="intensity">Intensidade: {trainingIntensity[0]}%</Label>
                          <Slider
                            id="intensity"
                            min={10}
                            max={100}
                            step={5}
                            value={trainingIntensity}
                            onValueChange={setTrainingIntensity}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="training-type">Tipo de Treinamento</Label>
                          <Select value={selectedTrainingType} onValueChange={setSelectedTrainingType}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              {trainingTypes.map((type) => (
                                <SelectItem key={type.id} value={type.id}>
                                  <div className="flex items-center space-x-2">
                                    <span className={type.color}>{type.icon}</span>
                                    <span>{type.name}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="goal">Objetivo do Treinamento</Label>
                          <Input
                            id="goal"
                            placeholder="Ex: Alcançar Super Saiyajin 3"
                            value={trainingGoal}
                            onChange={(e) => setTrainingGoal(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="partner">Parceiro de Treinamento</Label>
                          <Select value={trainingPartner} onValueChange={setTrainingPartner}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue placeholder="Selecione um parceiro" />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              <SelectItem value="vegeta">Vegeta</SelectItem>
                              <SelectItem value="piccolo">Piccolo</SelectItem>
                              <SelectItem value="gohan">Gohan</SelectItem>
                              <SelectItem value="trunks">Trunks</SelectItem>
                              <SelectItem value="android-17">Android 17</SelectItem>
                              <SelectItem value="whis">Whis</SelectItem>
                              <SelectItem value="solo">Treinar Sozinho</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="advanced" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="ki-control">Controle de Ki: {kiControl[0]}%</Label>
                          <Slider
                            id="ki-control"
                            min={0}
                            max={100}
                            step={1}
                            value={kiControl}
                            onValueChange={setKiControl}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="endurance">Resistência: {endurance[0]}%</Label>
                          <Slider
                            id="endurance"
                            min={0}
                            max={100}
                            step={1}
                            value={endurance}
                            onValueChange={setEndurance}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="speed">Velocidade: {speed[0]}%</Label>
                          <Slider
                            id="speed"
                            min={0}
                            max={100}
                            step={1}
                            value={speed}
                            onValueChange={setSpeed}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="technique">Técnica: {technique[0]}%</Label>
                          <Slider
                            id="technique"
                            min={0}
                            max={100}
                            step={1}
                            value={technique}
                            onValueChange={setTechnique}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="mental-focus">Foco Mental: {mentalFocus[0]}%</Label>
                          <Slider
                            id="mental-focus"
                            min={0}
                            max={100}
                            step={1}
                            value={mentalFocus}
                            onValueChange={setMentalFocus}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="recovery">Tempo de Recuperação: {recoveryTime[0]}h</Label>
                          <Slider
                            id="recovery"
                            min={1}
                            max={72}
                            step={1}
                            value={recoveryTime}
                            onValueChange={setRecoveryTime}
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="routine">Rotina Personalizada</Label>
                      <Textarea
                        id="routine"
                        placeholder="Descreva sua rotina de treinamento personalizada..."
                        value={personalizedRoutine}
                        onChange={(e) => setPersonalizedRoutine(e.target.value)}
                        className="bg-panel-gray-3 text-pure-white mt-2 min-h-[100px]"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="environment" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="environment">Ambiente de Treinamento</Label>
                          <Select value={environmentType} onValueChange={setEnvironmentType}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              {environments.map((env) => (
                                <SelectItem key={env.id} value={env.id}>
                                  {env.name} (x{env.multiplier})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="weather">Condição Climática</Label>
                          <Select value={weatherCondition} onValueChange={setWeatherCondition}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="extreme-heat">Calor Extremo</SelectItem>
                              <SelectItem value="extreme-cold">Frio Extremo</SelectItem>
                              <SelectItem value="storm">Tempestade</SelectItem>
                              <SelectItem value="zero-gravity">Gravidade Zero</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="music">Música de Fundo</Label>
                          <Input
                            id="music"
                            placeholder="Ex: Cha-La Head-Cha-La"
                            value={musicPreference}
                            onChange={(e) => setMusicPreference(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="nutrition">Plano Nutricional</Label>
                          <Textarea
                            id="nutrition"
                            placeholder="Descreva seu plano alimentar para o treinamento..."
                            value={nutritionPlan}
                            onChange={(e) => setNutritionPlan(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2 min-h-[80px]"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="personal" className="mt-6 space-y-6">
                    <div>
                      <Label htmlFor="quote">Frase Motivacional</Label>
                      <Input
                        id="quote"
                        placeholder="Ex: Eu vou superar meus limites!"
                        value={motivationalQuote}
                        onChange={(e) => setMotivationalQuote(e.target.value)}
                        className="bg-panel-gray-3 text-pure-white mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-panel-gray-2 text-center">
                        <CardHeader>
                          <CardTitle className="text-lg font-bangers text-dragon-orange">Eficiência</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-star-yellow">{calculateTrainingEfficiency()}%</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-panel-gray-2 text-center">
                        <CardHeader>
                          <CardTitle className="text-lg font-bangers text-dragon-orange">Poder Atual</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-green-400">{powerLevel.toLocaleString()}</p>
                        </CardContent>
                      </Card>

                      <Card className="bg-panel-gray-2 text-center">
                        <CardHeader>
                          <CardTitle className="text-lg font-bangers text-dragon-orange">Progresso</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-blue-400">{trainingProgress}%</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Painel de Status e Controles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bangers text-star-yellow">Status do Treinamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative h-48">
                    <Image
                      src="/db/gravity-chamber-1.png"
                      alt="Câmara de Gravidade"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{trainingProgress}%</span>
                    </div>
                    <Progress value={trainingProgress} className="w-full" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={startTraining}
                      disabled={isTraining}
                      className="bg-green-600 hover:bg-green-700"
                      size="sm"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={pauseTraining}
                      disabled={!isTraining}
                      className="bg-yellow-600 hover:bg-yellow-700"
                      size="sm"
                    >
                      <Pause className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={resetTraining}
                      className="bg-red-600 hover:bg-red-700"
                      size="sm"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bangers text-star-yellow">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Gravidade</span>
                    <Badge className="bg-red-500">{gravityLevel[0]}x</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Duração</span>
                    <Badge className="bg-blue-500">{trainingDuration[0]}min</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Intensidade</span>
                    <Badge className="bg-orange-500">{trainingIntensity[0]}%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Eficiência</span>
                    <Badge className="bg-green-500">{calculateTrainingEfficiency()}%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Separator className="my-12 bg-panel-gray-3" />

        {/* Galeria de Ambientes */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bangers text-star-yellow text-center mb-8">
            Ambientes de Treinamento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/gravity-chamber-2.png" 
                  alt="Câmara de Gravidade" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">Câmara de Gravidade</CardTitle>
                <CardDescription className="text-pure-white">
                  Ambiente controlado para treinamento com gravidade aumentada até 1000x.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Selecionar Ambiente
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/training-goku.jpg" 
                  alt="Treinamento Intenso" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">Sala do Tempo</CardTitle>
                <CardDescription className="text-pure-white">
                  Um ano de treinamento equivale a um dia no mundo exterior.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Selecionar Ambiente
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/characters-group.jpg" 
                  alt="Planeta Vegeta" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">Planeta Vegeta</CardTitle>
                <CardDescription className="text-pure-white">
                  Gravidade natural 10x maior que a Terra, ambiente hostil para Saiyajins.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Selecionar Ambiente
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

