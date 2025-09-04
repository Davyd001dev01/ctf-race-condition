"use client";

import Link from 'next/link';
import { ModeToggle } from '@/components/site/ModeToggle';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between p-4 bg-charcoal-black text-pure-white border-b bg-opacity-90  border-panel-gray-3"
    >
      <div className="flex items-center space-x-4">
        <Link href="https://pt.wikipedia.org/wiki/Akira_Toriyama" target='_blank'  className="text-2xl font-bangers text-dragon-orange hover:text-star-yellow transition-colors">
          Capsule Corp Bank
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-dragon-orange transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-dragon-orange transition-colors font-medium">
            Sobre
          </Link>
          <Link href="/technologies" className="hover:text-dragon-orange transition-colors font-medium">
            Tecnologias
          </Link>
          <Link href="/characters" className="hover:text-dragon-orange transition-colors font-medium">
            Personagens
          </Link>
          <Link href="/training" className="hover:text-dragon-orange transition-colors font-medium">
            Treinamento
          </Link>
          <Link href="/fusion" className="hover:text-dragon-orange transition-colors font-medium">
            Fusão
          </Link>

        </div>
      </div>
      <div className="flex items-center space-x-4">
        <motion.span 
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-green-400 font-medium"
        >
          Zeni Network: Stable
        </motion.span>
      </div>
    </motion.nav>
  );
}

