import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { WaysToEarn } from './components/WaysToEarn';
import { LiveAssistant } from './components/LiveAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            <span>O Futuro do Trabalho Chegou</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
            DINHEIRO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              SILENCIOSO
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Existe uma nova geração ganhando milhares de dólares usando IA. 
            Descubra as 5 formas que estão mudando vidas em 2026.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('ways')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition-colors"
            >
              Explorar Oportunidades
            </button>
            <button 
              onClick={() => document.getElementById('assistant')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-full font-bold hover:bg-zinc-800 transition-colors"
            >
              Falar com Assistente
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </header>

      {/* Main Content */}
      <main>
        <div id="ways">
          <WaysToEarn />
        </div>

        {/* Live Assistant Section */}
        <section id="assistant" className="py-24 px-6 bg-zinc-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dúvidas? Pergunte à nossa IA</h2>
              <p className="text-zinc-400">
                Inicie uma conversa por voz em tempo real para entender melhor como aplicar essas estratégias no seu dia a dia.
              </p>
            </div>
            <LiveAssistant />
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-32 px-6 text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-4xl font-serif italic text-zinc-300 leading-tight">
            "A Inteligência Artificial não está apenas mudando a tecnologia... ela está criando novas oportunidades para milhões de pessoas."
          </blockquote>
          <div className="mt-8 text-emerald-500 font-bold tracking-widest uppercase text-sm">
            A Era da IA 2026
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-sm">
          &copy; 2026 AI Money Maker. O futuro é agora.
        </p>
      </footer>
    </div>
  );
}

