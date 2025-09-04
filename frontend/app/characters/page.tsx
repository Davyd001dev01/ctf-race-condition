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
import { Star, Zap, Shield, Sword, Heart, Search } from 'lucide-react';
import { useState } from 'react';

export default function CharactersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const characters = [
    {
      id: 'goku',
      name: 'Son Goku',
      category: 'heroes',
      powerLevel: 95,
      zeniBalance: 50000,
      description: 'O guerreiro Saiyajin mais poderoso do universo, conhecido por sua bondade e determinação.',
      abilities: ['Kamehameha', 'Instinto Superior', 'Teletransporte'],
      status: 'Ativo',
      image: '/db/goku-portrait.jpg'
    },
    {
      id: 'vegeta',
      name: 'Vegeta',
      category: 'heroes',
      powerLevel: 93,
      zeniBalance: 75000,
      description: 'Príncipe dos Saiyajins, orgulhoso e determinado a superar Goku.',
      abilities: ['Final Flash', 'Big Bang Attack', 'Ultra Ego'],
      status: 'Ativo',
      image: '/db/characters-group.jpg'
    },
    {
      id: 'piccolo',
      name: 'Piccolo',
      category: 'heroes',
      powerLevel: 85,
      zeniBalance: 30000,
      description: 'Namekuseijin sábio e poderoso, mentor de Gohan.',
      abilities: ['Makankosappo', 'Regeneração', 'Gigantificação'],
      status: 'Ativo',
      image: '/db/characters-group.jpg'
    },
    {
      id: 'frieza',
      name: 'Frieza',
      category: 'villains',
      powerLevel: 90,
      zeniBalance: 1000000,
      description: 'Imperador do universo, conhecido por sua crueldade e poder.',
      abilities: ['Death Beam', 'Supernova', 'Golden Form'],
      status: 'Neutro',
      image: '/db/character-cards.jpg'
    },
    {
      id: 'cell',
      name: 'Cell',
      category: 'villains',
      powerLevel: 88,
      zeniBalance: 25000,
      description: 'Androide bio-orgânico criado pelo Dr. Gero.',
      abilities: ['Kamehameha', 'Regeneração', 'Absorção'],
      status: 'Inativo',
      image: '/db/character-cards.jpg'
    },
    {
      id: 'bulma',
      name: 'Bulma',
      category: 'support',
      powerLevel: 15,
      zeniBalance: 10000000,
      description: 'Gênio científico e herdeira da Capsule Corporation.',
      abilities: ['Invenções', 'Dragon Radar', 'Liderança'],
      status: 'Ativo',
      image: '/db/bulma-tech.png'
    }
  ];

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || character.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPowerLevelColor = (level: number) => {
    if (level >= 90) return 'text-red-500';
    if (level >= 80) return 'text-orange-500';
    if (level >= 60) return 'text-yellow-500';
    return 'text-green-500';
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
            Personagens do Universo Zeni
          </h1>
          <p className="text-xl text-pure-white max-w-3xl mx-auto">
            Conheça os guerreiros, vilões e heróis que fazem parte do sistema bancário mais avançado do universo.
          </p>
        </motion.div>

        {/* Painel de Busca e Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="bg-panel-gray-1 text-pure-white card-2xl-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bangers text-star-yellow flex items-center">
                <Search className="mr-3 h-6 w-6" />
                Central de Busca de Personagens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="search">Buscar Personagem</Label>
                  <Input
                    id="search"
                    placeholder="Digite o nome do personagem..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-panel-gray-3 text-pure-white mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mt-2">
                    <TabsList className="grid w-full grid-cols-4 bg-panel-gray-3">
                      <TabsTrigger value="all">Todos</TabsTrigger>
                      <TabsTrigger value="heroes">Heróis</TabsTrigger>
                      <TabsTrigger value="villains">Vilões</TabsTrigger>
                      <TabsTrigger value="support">Suporte</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Grid de Personagens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredCharacters.map((character, index) => (
            <motion.div
              key={character.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow overflow-hidden hover:scale-105 transition-transform">
                <div className="relative h-48">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={character.status === 'Ativo' ? 'default' : character.status === 'Neutro' ? 'secondary' : 'destructive'}>
                      {character.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-bangers text-dragon-orange text-xl">
                    {character.name}
                  </CardTitle>
                  <CardDescription className="text-pure-white">
                    {character.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Nível de Poder</span>
                      <span className={`font-bold ${getPowerLevelColor(character.powerLevel)}`}>
                        {character.powerLevel}%
                      </span>
                    </div>
                    <Progress value={character.powerLevel} className="w-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Saldo Zeni</span>
                      <span className="font-bold text-star-yellow">
                        {character.zeniBalance.toLocaleString('pt-BR')} Z
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {character.abilities.slice(0, 2).map((ability, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {ability}
                        </Badge>
                      ))}
                      {character.abilities.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{character.abilities.length - 2}
                        </Badge>
                      )}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-dragon-orange hover:bg-star-yellow mt-4">
                          Ver Detalhes
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-panel-gray-1 text-pure-white border-panel-gray-3">
                        <DialogHeader>
                          <DialogTitle className="font-bangers text-dragon-orange text-2xl">
                            {character.name}
                          </DialogTitle>
                          <DialogDescription className="text-pure-white">
                            {character.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bangers text-star-yellow mb-2">Habilidades Especiais</h4>
                            <div className="flex flex-wrap gap-2">
                              {character.abilities.map((ability, idx) => (
                                <Badge key={idx} variant="outline">
                                  {ability}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-sm text-gray-300">Nível de Poder</span>
                              <p className={`font-bold ${getPowerLevelColor(character.powerLevel)}`}>
                                {character.powerLevel}%
                              </p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-300">Saldo Zeni</span>
                              <p className="font-bold text-star-yellow">
                                {character.zeniBalance.toLocaleString('pt-BR')} Z
                              </p>
                            </div>
                          </div>
                          <Button className="w-full bg-capsule-blue hover:bg-deep-cyan">
                            Iniciar Transação
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Separator className="my-12 bg-panel-gray-3" />

        {/* Estatísticas Gerais */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bangers text-star-yellow text-center mb-8">
            Estatísticas do Universo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow text-center">
              <CardHeader>
                <Star className="h-8 w-8 text-star-yellow mx-auto" />
                <CardTitle className="font-bangers text-dragon-orange">Total de Heróis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{characters.filter(c => c.category === 'heroes').length}</p>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow text-center">
              <CardHeader>
                <Sword className="h-8 w-8 text-red-500 mx-auto" />
                <CardTitle className="font-bangers text-dragon-orange">Total de Vilões</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{characters.filter(c => c.category === 'villains').length}</p>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow text-center">
              <CardHeader>
                <Heart className="h-8 w-8 text-green-500 mx-auto" />
                <CardTitle className="font-bangers text-dragon-orange">Suporte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{characters.filter(c => c.category === 'support').length}</p>
              </CardContent>
            </Card>

            <Card className="bg-panel-gray-2 text-pure-white card-2xl-shadow text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-500 mx-auto" />
                <CardTitle className="font-bangers text-dragon-orange">Poder Médio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">
                  {Math.round(characters.reduce((acc, c) => acc + c.powerLevel, 0) / characters.length)}%
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

