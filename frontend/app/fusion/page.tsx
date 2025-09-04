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
import { Users, Sparkles, Clock, Zap, Star, Shuffle, Download, Share2, Heart, Brain } from 'lucide-react';
import { useState } from 'react';

export default function FusionPage() {
  const [fusionType, setFusionType] = useState('potara');
  const [character1, setCharacter1] = useState('');
  const [character2, setCharacter2] = useState('');
  const [fusionName, setFusionName] = useState('');
  const [fusionDuration, setFusionDuration] = useState([30]);
  const [powerMultiplier, setPowerMultiplier] = useState([2.5]);
  const [synchronization, setSynchronization] = useState([85]);
  const [mentalHarmony, setMentalHarmony] = useState([75]);
  const [physicalCompatibility, setPhysicalCompatibility] = useState([80]);
  const [kiBalance, setKiBalance] = useState([90]);
  const [fusionStability, setFusionStability] = useState([70]);
  const [personalityDominance, setPersonalityDominance] = useState([50]);
  const [fusionExperience, setFusionExperience] = useState([25]);
  const [emotionalState1, setEmotionalState1] = useState('');
  const [emotionalState2, setEmotionalState2] = useState('');
  const [fusionGoal, setFusionGoal] = useState('');
  const [specialAbilities, setSpecialAbilities] = useState('');
  const [fusionEnvironment, setFusionEnvironment] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');
  const [fusionRitual, setFusionRitual] = useState('');
  const [fusionMusic, setFusionMusic] = useState('');
  const [fusionClothing, setFusionClothing] = useState('');
  const [fusionAccessories, setFusionAccessories] = useState('');
  const [fusionHairStyle, setFusionHairStyle] = useState('');
  const [fusionEyeColor, setFusionEyeColor] = useState('');
  const [fusionHeight, setFusionHeight] = useState([180]);
  const [fusionWeight, setFusionWeight] = useState([75]);
  const [fusionAge, setFusionAge] = useState([25]);
  const [fusionVoice, setFusionVoice] = useState('');
  const [fusionPersonality, setFusionPersonality] = useState('');
  const [fusionWeakness, setFusionWeakness] = useState('');
  const [fusionStrength, setFusionStrength] = useState('');

  const characters = [
    'Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Trunks', 'Goten', 'Krillin', 'Yamcha', 
    'Tien', 'Android 17', 'Android 18', 'Frieza', 'Cell', 'Majin Buu', 'Broly',
    'Bardock', 'Raditz', 'Nappa', 'Ginyu', 'Recoome', 'Burter', 'Jeice', 'Guldo'
  ];

  const fusionTypes = [
    { id: 'potara', name: 'Potara', duration: 'Permanente*', difficulty: 'Fácil', power: 'Máximo' },
    { id: 'dance', name: 'Dança da Fusão', duration: '30 minutos', difficulty: 'Difícil', power: 'Alto' },
    { id: 'namekian', name: 'Fusão Namekuseijin', duration: 'Permanente', difficulty: 'Médio', power: 'Variável' },
    { id: 'absorption', name: 'Absorção', duration: 'Permanente', difficulty: 'Extremo', power: 'Crescente' }
  ];

  const emotionalStates = [
    'Calmo', 'Determinado', 'Furioso', 'Confiante', 'Nervoso', 'Focado', 
    'Relaxado', 'Ansioso', 'Corajoso', 'Preocupado', 'Alegre', 'Sério'
  ];

  const calculateFusionSuccess = () => {
    const baseSuccess = (synchronization[0] + mentalHarmony[0] + physicalCompatibility[0] + kiBalance[0]) / 4;
    const stabilityBonus = fusionStability[0] * 0.1;
    const experienceBonus = fusionExperience[0] * 0.05;
    return Math.min(100, Math.round(baseSuccess + stabilityBonus + experienceBonus));
  };

  const calculateFusionPower = () => {
    if (!character1 || !character2) return 0;
    const basePower = 15000; // Poder base estimado
    const multiplier = powerMultiplier[0];
    const harmonyBonus = mentalHarmony[0] / 100;
    const stabilityBonus = fusionStability[0] / 100;
    return Math.round(basePower * multiplier * harmonyBonus * stabilityBonus);
  };

  const generateFusionName = () => {
    if (!character1 || !character2) return;
    const name1 = character1.toLowerCase();
    const name2 = character2.toLowerCase();
    const fusion1 = name1.slice(0, Math.ceil(name1.length / 2)) + name2.slice(Math.floor(name2.length / 2));
    const fusion2 = name2.slice(0, Math.ceil(name2.length / 2)) + name1.slice(Math.floor(name1.length / 2));
    setFusionName(fusion1.charAt(0).toUpperCase() + fusion1.slice(1));
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
            Simulador de Fusão Universal
          </h1>
          <p className="text-xl text-pure-white max-w-3xl mx-auto">
            Crie fusões épicas entre guerreiros do universo Dragon Ball. Configure cada detalhe e descubra o poder resultante da união perfeita.
          </p>
        </motion.div>

        {/* Painel Principal de Configuração */}
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
                  <Users className="mr-3 h-8 w-8" />
                  Laboratório de Fusão
                </CardTitle>
                <CardDescription className="text-pure-white">
                  Configure todos os parâmetros para criar a fusão perfeita entre dois guerreiros.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="characters" className="w-full">
                  <TabsList className="grid w-full grid-cols-5 bg-panel-gray-3">
                    <TabsTrigger value="characters">Personagens</TabsTrigger>
                    <TabsTrigger value="fusion-type">Tipo</TabsTrigger>
                    <TabsTrigger value="parameters">Parâmetros</TabsTrigger>
                    <TabsTrigger value="appearance">Aparência</TabsTrigger>
                    <TabsTrigger value="personality">Personalidade</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="characters" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="character1">Primeiro Guerreiro</Label>
                          <Select value={character1} onValueChange={setCharacter1}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue placeholder="Selecione o primeiro personagem" />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              {characters.map((char) => (
                                <SelectItem key={char} value={char.toLowerCase()}>
                                  {char}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="emotional1">Estado Emocional</Label>
                          <Select value={emotionalState1} onValueChange={setEmotionalState1}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue placeholder="Estado emocional" />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              {emotionalStates.map((state) => (
                                <SelectItem key={state} value={state.toLowerCase()}>
                                  {state}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="sync1">Nível de Sincronização: {synchronization[0]}%</Label>
                          <Slider
                            id="sync1"
                            min={0}
                            max={100}
                            step={1}
                            value={synchronization}
                            onValueChange={setSynchronization}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="character2">Segundo Guerreiro</Label>
                          <Select value={character2} onValueChange={setCharacter2}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue placeholder="Selecione o segundo personagem" />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              {characters.map((char) => (
                                <SelectItem key={char} value={char.toLowerCase()}>
                                  {char}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="emotional2">Estado Emocional</Label>
                          <Select value={emotionalState2} onValueChange={setEmotionalState2}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue placeholder="Estado emocional" />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              {emotionalStates.map((state) => (
                                <SelectItem key={state} value={state.toLowerCase()}>
                                  {state}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="harmony">Harmonia Mental: {mentalHarmony[0]}%</Label>
                          <Slider
                            id="harmony"
                            min={0}
                            max={100}
                            step={1}
                            value={mentalHarmony}
                            onValueChange={setMentalHarmony}
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button
                        onClick={generateFusionName}
                        className="bg-dragon-orange hover:bg-star-yellow"
                        disabled={!character1 || !character2}
                      >
                        <Shuffle className="mr-2 h-4 w-4" />
                        Gerar Nome da Fusão
                      </Button>
                    </div>

                    {fusionName && (
                      <div className="text-center">
                        <Label>Nome da Fusão Gerado</Label>
                        <Input
                          value={fusionName}
                          onChange={(e) => setFusionName(e.target.value)}
                          className="bg-panel-gray-3 text-pure-white mt-2 text-center text-xl font-bold"
                        />
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="fusion-type" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {fusionTypes.map((type) => (
                        <Card
                          key={type.id}
                          className={`cursor-pointer transition-all ${
                            fusionType === type.id
                              ? 'bg-dragon-orange text-charcoal-black'
                              : 'bg-panel-gray-2 text-pure-white hover:bg-panel-gray-3'
                          }`}
                          onClick={() => setFusionType(type.id)}
                        >
                          <CardHeader>
                            <CardTitle className="font-bangers">{type.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p><strong>Duração:</strong> {type.duration}</p>
                              <p><strong>Dificuldade:</strong> {type.difficulty}</p>
                              <p><strong>Poder:</strong> {type.power}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="environment">Ambiente da Fusão</Label>
                        <Input
                          id="environment"
                          placeholder="Ex: Sala do Tempo, Planeta Namek, Terra"
                          value={fusionEnvironment}
                          onChange={(e) => setFusionEnvironment(e.target.value)}
                          className="bg-panel-gray-3 text-pure-white mt-2"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="time">Horário</Label>
                          <Select value={timeOfDay} onValueChange={setTimeOfDay}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue placeholder="Selecione o horário" />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              <SelectItem value="dawn">Amanhecer</SelectItem>
                              <SelectItem value="morning">Manhã</SelectItem>
                              <SelectItem value="noon">Meio-dia</SelectItem>
                              <SelectItem value="afternoon">Tarde</SelectItem>
                              <SelectItem value="sunset">Pôr do Sol</SelectItem>
                              <SelectItem value="night">Noite</SelectItem>
                              <SelectItem value="midnight">Meia-noite</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="weather">Clima</Label>
                          <Select value={weatherCondition} onValueChange={setWeatherCondition}>
                            <SelectTrigger className="bg-panel-gray-3 text-pure-white mt-2">
                              <SelectValue placeholder="Condição climática" />
                            </SelectTrigger>
                            <SelectContent className="bg-panel-gray-2 text-pure-white">
                              <SelectItem value="clear">Céu Limpo</SelectItem>
                              <SelectItem value="cloudy">Nublado</SelectItem>
                              <SelectItem value="rainy">Chuvoso</SelectItem>
                              <SelectItem value="stormy">Tempestade</SelectItem>
                              <SelectItem value="windy">Ventoso</SelectItem>
                              <SelectItem value="foggy">Nebuloso</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="parameters" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="power-mult">Multiplicador de Poder: {powerMultiplier[0]}x</Label>
                          <Slider
                            id="power-mult"
                            min={1}
                            max={10}
                            step={0.1}
                            value={powerMultiplier}
                            onValueChange={setPowerMultiplier}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="compatibility">Compatibilidade Física: {physicalCompatibility[0]}%</Label>
                          <Slider
                            id="compatibility"
                            min={0}
                            max={100}
                            step={1}
                            value={physicalCompatibility}
                            onValueChange={setPhysicalCompatibility}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="ki-balance">Equilíbrio de Ki: {kiBalance[0]}%</Label>
                          <Slider
                            id="ki-balance"
                            min={0}
                            max={100}
                            step={1}
                            value={kiBalance}
                            onValueChange={setKiBalance}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="stability">Estabilidade da Fusão: {fusionStability[0]}%</Label>
                          <Slider
                            id="stability"
                            min={0}
                            max={100}
                            step={1}
                            value={fusionStability}
                            onValueChange={setFusionStability}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="dominance">Dominância de Personalidade: {personalityDominance[0]}%</Label>
                          <Slider
                            id="dominance"
                            min={0}
                            max={100}
                            step={1}
                            value={personalityDominance}
                            onValueChange={setPersonalityDominance}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="experience">Experiência em Fusão: {fusionExperience[0]}%</Label>
                          <Slider
                            id="experience"
                            min={0}
                            max={100}
                            step={1}
                            value={fusionExperience}
                            onValueChange={setFusionExperience}
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="goal">Objetivo da Fusão</Label>
                      <Textarea
                        id="goal"
                        placeholder="Descreva o objetivo principal desta fusão..."
                        value={fusionGoal}
                        onChange={(e) => setFusionGoal(e.target.value)}
                        className="bg-panel-gray-3 text-pure-white mt-2 min-h-[80px]"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="appearance" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="height">Altura: {fusionHeight[0]}cm</Label>
                          <Slider
                            id="height"
                            min={150}
                            max={250}
                            step={1}
                            value={fusionHeight}
                            onValueChange={setFusionHeight}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="weight">Peso: {fusionWeight[0]}kg</Label>
                          <Slider
                            id="weight"
                            min={50}
                            max={150}
                            step={1}
                            value={fusionWeight}
                            onValueChange={setFusionWeight}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="age">Idade Aparente: {fusionAge[0]} anos</Label>
                          <Slider
                            id="age"
                            min={16}
                            max={60}
                            step={1}
                            value={fusionAge}
                            onValueChange={setFusionAge}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="hair">Estilo do Cabelo</Label>
                          <Input
                            id="hair"
                            placeholder="Ex: Espetado dourado, Liso preto"
                            value={fusionHairStyle}
                            onChange={(e) => setFusionHairStyle(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="eyes">Cor dos Olhos</Label>
                          <Input
                            id="eyes"
                            placeholder="Ex: Azul turquesa, Verde esmeralda"
                            value={fusionEyeColor}
                            onChange={(e) => setFusionEyeColor(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="clothing">Vestimenta</Label>
                          <Input
                            id="clothing"
                            placeholder="Ex: Gi laranja e azul, Armadura Saiyajin"
                            value={fusionClothing}
                            onChange={(e) => setFusionClothing(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="accessories">Acessórios</Label>
                          <Input
                            id="accessories"
                            placeholder="Ex: Brincos Potara, Faixa vermelha"
                            value={fusionAccessories}
                            onChange={(e) => setFusionAccessories(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="voice">Tom de Voz</Label>
                          <Input
                            id="voice"
                            placeholder="Ex: Grave e confiante, Agudo e energético"
                            value={fusionVoice}
                            onChange={(e) => setFusionVoice(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="personality" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="personality">Traços de Personalidade</Label>
                        <Textarea
                          id="personality"
                          placeholder="Descreva a personalidade resultante da fusão..."
                          value={fusionPersonality}
                          onChange={(e) => setFusionPersonality(e.target.value)}
                          className="bg-panel-gray-3 text-pure-white mt-2 min-h-[100px]"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="strengths">Pontos Fortes</Label>
                          <Textarea
                            id="strengths"
                            placeholder="Liste os pontos fortes da fusão..."
                            value={fusionStrength}
                            onChange={(e) => setFusionStrength(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2 min-h-[80px]"
                          />
                        </div>

                        <div>
                          <Label htmlFor="weaknesses">Pontos Fracos</Label>
                          <Textarea
                            id="weaknesses"
                            placeholder="Liste as fraquezas da fusão..."
                            value={fusionWeakness}
                            onChange={(e) => setFusionWeakness(e.target.value)}
                            className="bg-panel-gray-3 text-pure-white mt-2 min-h-[80px]"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="abilities">Habilidades Especiais</Label>
                        <Textarea
                          id="abilities"
                          placeholder="Descreva as habilidades únicas da fusão..."
                          value={specialAbilities}
                          onChange={(e) => setSpecialAbilities(e.target.value)}
                          className="bg-panel-gray-3 text-pure-white mt-2 min-h-[100px]"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Painel de Resultados */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bangers text-star-yellow">Resultado da Fusão</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative h-48">
                    <Image
                      src="/db/fusion-dance.jpg"
                      alt="Fusão"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  
                  {fusionName && (
                    <div className="text-center">
                      <h3 className="text-2xl font-bangers text-dragon-orange">{fusionName}</h3>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Taxa de Sucesso</span>
                      <Badge className={calculateFusionSuccess() >= 80 ? 'bg-green-500' : calculateFusionSuccess() >= 60 ? 'bg-yellow-500' : 'bg-red-500'}>
                        {calculateFusionSuccess()}%
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Poder Estimado</span>
                      <Badge className="bg-purple-500">
                        {calculateFusionPower().toLocaleString()}
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">Duração</span>
                      <Badge className="bg-blue-500">
                        {fusionType === 'potara' ? 'Permanente*' : `${fusionDuration[0]}min`}
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">Estabilidade</span>
                      <Badge className={fusionStability[0] >= 80 ? 'bg-green-500' : fusionStability[0] >= 60 ? 'bg-yellow-500' : 'bg-red-500'}>
                        {fusionStability[0]}%
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Button className="bg-capsule-blue hover:bg-deep-cyan" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Salvar
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bangers text-star-yellow">Análise Detalhada</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Sincronização</span>
                      <span>{synchronization[0]}%</span>
                    </div>
                    <Progress value={synchronization[0]} className="w-full" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Harmonia Mental</span>
                      <span>{mentalHarmony[0]}%</span>
                    </div>
                    <Progress value={mentalHarmony[0]} className="w-full" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Compatibilidade</span>
                      <span>{physicalCompatibility[0]}%</span>
                    </div>
                    <Progress value={physicalCompatibility[0]} className="w-full" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Equilíbrio Ki</span>
                      <span>{kiBalance[0]}%</span>
                    </div>
                    <Progress value={kiBalance[0]} className="w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Separator className="my-12 bg-panel-gray-3" />

        {/* Galeria de Tipos de Fusão */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bangers text-star-yellow text-center mb-8">
            Tipos de Fusão Disponíveis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/potara-earrings.png" 
                  alt="Potara" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">Fusão Potara</CardTitle>
                <CardDescription className="text-pure-white">
                  Fusão permanente usando os brincos sagrados dos Kaioshin. Máximo poder garantido.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Selecionar Potara
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/fusion-dance.jpg" 
                  alt="Dança da Fusão" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">Dança da Fusão</CardTitle>
                <CardDescription className="text-pure-white">
                  Técnica de fusão que requer sincronização perfeita. Duração limitada mas poder imenso.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Selecionar Dança
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/db/gogeta-vegito.jpg" 
                  alt="Fusões Épicas" 
                  fill 
                  style={{ objectFit: "cover" }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-bangers text-dragon-orange">Fusões Lendárias</CardTitle>
                <CardDescription className="text-pure-white">
                  Explore as fusões mais poderosas já criadas no universo Dragon Ball.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-dragon-orange hover:bg-star-yellow">
                  Ver Galeria
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

