import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Hero() {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-charcoal-black bg-opacity-80 text-pure-white">
      <div className="absolute inset-0 bg-dragon-gradient opacity-20 ki-aura"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bangers text-dragon-orange mb-4">
          Capsule Corporation Bank
        </h1>
        <p className="text-xl md:text-2xl font-inter mb-8">
          O seu Zeni em cápsulas de alta tecnologia.
        </p>
        <div className="flex justify-center space-x-4">
          <Card className="w-64 bg-panel-gray-2 text-pure-white card-2xl-shadow">
            <CardHeader>
              <CardTitle className="text-star-yellow">Segurança</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-pure-white">Cápsulas de última geração para proteger seu Zeni.</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-64 bg-panel-gray-2 text-pure-white card-2xl-shadow">
            <CardHeader>
              <CardTitle className="text-star-yellow">Velocidade</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-pure-white">Transferências rápidas como um Super Saiyajin.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </motion.div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-30">
        <Image src="/db/shenlong-silhouette.jpg" alt="Shenlong Silhouette" fill style={{ objectFit: "contain" }} />
      </div>
    </section>
  );
}


