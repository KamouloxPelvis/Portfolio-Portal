'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const panels = [
  { id: 'intro', title: 'ENGINEERING', color: 'bg-[#11091d]' },
  { id: 'projects', title: 'SOLUTIONS', color: 'bg-[#160d25]' },
  { id: 'expertise', title: 'TECH_STACK', color: 'bg-[#1b112e]' },
  { id: 'blog', title: 'LOGS', color: 'bg-[#11091d]' },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>('intro');

  return (
    /* Background sombre avec léger grain */
    <div className="h-screen w-full bg-brand-bg p-4 md:p-12 flex items-center justify-center font-sans">
      
      {/* Cadre Principal - Pas d'arrondis, bordure Or discret (lunettes) */}
      <main className="flex flex-col md:flex-row h-full w-full max-w-7xl border border-brand-gold/20 bg-black overflow-hidden shadow-2xl">
        
        {panels.map((panel) => (
          <motion.section
            key={panel.id}
            layout
            onClick={() => setExpanded(panel.id)}
            animate={{ flex: expanded === panel.id ? 6 : 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 1.2 }}
            className={`relative cursor-pointer overflow-hidden border-white/5 
              ${expanded === panel.id ? 'bg-opacity-100' : 'md:border-r border-b md:border-b-0 hover:bg-white/5'} 
              ${panel.color} transition-colors duration-500`}
          >
            {/* Label Vertical en arrière-plan */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <motion.h2 
                layout="position"
                className={`font-mono tracking-widest uppercase transition-opacity duration-700
                  ${expanded === panel.id ? 'opacity-5 scale-150 blur-xs' : 'opacity-30 text-xs'}
                  md:[writing-mode:vertical-lr] md:rotate-180`}
              >
                {panel.title}
              </motion.h2>
            </div>

            <AnimatePresence mode="wait">
              {expanded === panel.id && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="relative z-10 h-full p-8 md:p-16 flex flex-col justify-center"
                >
                  
                  {/* INTRO : Style Kamal Skull */}
                  {panel.id === 'intro' && (
                    <div className="space-y-6">
                      <div className="inline-block border border-brand-flame-h px-4 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-tighter">
                        Status: Execution_Mode
                      </div>
                      <h3 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none text-brand-skull">
                        KAMAL<span className="text-brand-flame-p">.</span>G
                      </h3>
                      <p className="text-xl font-mono text-slate-400 border-l-4 border-brand-gold pl-6 max-w-xl">
                        DevOps Architect & Full Stack Engineer. Automating the chaos into <span className="text-brand-skull">perfect infrastructure.</span>
                      </p>
                      <div className="pt-8">
                        <button className="px-10 py-4 bg-brand-flame-h text-white font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all">
                          Sudo_Fetch_CV
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SOLUTIONS : Bento sans fioritures */}
                  {panel.id === 'projects' && (
                    <div className="h-full flex flex-col space-y-6">
                      <h3 className="text-4xl font-black uppercase text-brand-skull border-b border-white/10 pb-4">Terminal_Outputs</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                        <div className="border border-white/5 bg-white/5 p-6 group hover:border-brand-flame-p transition-all">
                          <span className="text-brand-flame-p font-mono text-[10px] uppercase">Project_01</span>
                          <h4 className="text-2xl font-bold text-white mt-1 uppercase">K3s Bare Metal</h4>
                          <p className="text-xs text-slate-500 mt-2">Terraform & Ansible automation.</p>
                        </div>
                        <div className="border border-brand-gold/30 bg-brand-gold/5 p-6 group hover:border-brand-gold transition-all cursor-pointer" 
                             onClick={() => window.open('https://blog.devopsnotes.org')}>
                          <h4 className="text-2xl font-bold text-white uppercase">DevOpsNotes</h4>
                          <p className="text-xs text-brand-gold/70 mt-2">Knowledge base for infrastructure engineering.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TECH STACK : YAML Manifest */}
                  {panel.id === 'expertise' && (
                    <div className="space-y-6">
                      <h3 className="text-3xl font-mono text-brand-flame-h">capabilities.yaml</h3>
                      <div className="bg-black/40 border-l-4 border-brand-flame-p p-8 font-mono text-sm md:text-lg text-slate-300">
                        <div className="text-brand-gold">stack:</div>
                        <div className="pl-6">- <span className="text-white">Next.js / Go / Python</span></div>
                        <div className="pl-6">- <span className="text-white">K8s (K3s, GKE) / Docker</span></div>
                        <div className="pl-6">- <span className="text-white">Terraform / Ansible / GitLab CI</span></div>
                        <div className="mt-4 text-brand-gold">monitoring:</div>
                        <div className="pl-6">- <span className="text-white">Prometheus / Grafana / ELK</span></div>
                      </div>
                    </div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        ))}
      </main>
    </div>
  );
}