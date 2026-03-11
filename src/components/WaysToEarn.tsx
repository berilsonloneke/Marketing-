import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Youtube, Zap, Terminal, Megaphone, ArrowRight } from 'lucide-react';
import { WAYS_TO_EARN } from '../constants';

const iconMap: Record<string, any> = {
  Briefcase,
  Youtube,
  Zap,
  Terminal,
  Megaphone
};

export const WaysToEarn: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
        >
          5 Formas Silenciosas de Lucrar
        </motion.h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          A Inteligência Artificial está criando uma nova geração de empreendedores digitais. 
          Descubra como você pode começar ainda hoje.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WAYS_TO_EARN.map((way, index) => {
          const Icon = iconMap[way.icon];
          return (
            <motion.div
              key={way.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{way.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {way.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {way.tools.map(tool => (
                    <span key={tool} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-zinc-800 text-zinc-500 rounded border border-zinc-700">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-500">{way.potential}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
