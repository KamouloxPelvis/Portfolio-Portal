'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const panels = [
  { id: 'intro', title: 'PROFIL', color: 'bg-[#11091d]' },
  { id: 'projects', title: 'RÉALISATIONS', color: 'bg-[#160d25]' },
  { id: 'expertise', title: 'COMPÉTENCES', color: 'bg-[#1b112e]' },
  { id: 'blog', title: 'ACTIVITÉ', color: 'bg-[#11091d]' },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>('intro');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-brand-bg p-2 md:p-12 flex items-center justify-center font-sans overflow-hidden">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #EAB308; border-radius: 10px; }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #EAB308 rgba(255, 255, 255, 0.05); }
      `}</style>

      <main className="flex flex-col md:flex-row h-full w-full max-w-7xl border border-brand-gold/20 bg-black overflow-hidden shadow-2xl relative">
        {panels.map((panel) => (
          <motion.section
            key={panel.id}
            layout
            onClick={() => setExpanded(panel.id)}
            animate={{ flex: expanded === panel.id ? 12 : 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 1.2 }}
            className={`relative cursor-pointer overflow-hidden border-white/5 
              ${expanded === panel.id ? 'bg-opacity-100' : 'md:border-r border-b md:border-b-0 hover:bg-white/5'} 
              ${panel.color} transition-colors duration-500`}
          >
            {/* Titre vertical du panneau */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <motion.h2 
                layout="position"
                className={`font-mono tracking-widest uppercase transition-opacity duration-700
                  ${expanded === panel.id ? 'opacity-5 scale-125 md:scale-150 blur-xs' : 'opacity-30 text-[10px] md:text-xs'}
                  md:[writing-mode:vertical-lr] md:rotate-180`}
              >
                {panel.title}
              </motion.h2>
            </div>

            <AnimatePresence mode="wait">
              {expanded === panel.id && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative z-10 h-full p-6 md:p-16 flex flex-col justify-start md:justify-center overflow-y-auto custom-scrollbar"
                >
                  {/* --- SECTION PROFIL --- */}
                  {panel.id === 'intro' && (
                    <div className="space-y-6 md:space-y-8">
                      <div className="inline-block border border-brand-flame-h px-4 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-tighter">
                        Statut : En recherche d&apos;alternance Cyber
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0 border border-brand-flame-p p-1">
                          <Image src="/profil_cool_2.jpg" alt="Kamal Guidadou" width={128} height={128} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                          <div className="absolute -bottom-2 -right-2 bg-brand-flame-h w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none text-brand-skull">KAMAL <br /> GUIDADOU<span className="text-brand-flame-p">.</span></h3>
                          <p className="text-[10px] md:text-xs font-mono text-brand-flame-p tracking-widest uppercase italic">Ingénieur Cloud & DevSecOps</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-lg font-mono text-slate-400 border-l-4 border-brand-gold pl-4 md:pl-6 max-w-xl italic">
                        Bridging the gap between Code, Infrastructure and Security. Expertise en automatisation d&apos;architectures <span className="text-brand-skull">Cloud Natives</span> et sécurisation des cycles de build.
                      </p>
                      <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
                        <a href="/CV_alt_inge_devsecops_cyber.pdf" download className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 bg-brand-flame-h text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">Télécharger CV</a>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setIsContactOpen(true); }}
                          className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 border border-brand-gold text-brand-gold text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all"
                        >
                          Me Contacter
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Les autres sections restent identiques ... */}
                  {panel.id === 'projects' && ( <div className="text-white">Section Projets (cf. code précédent)</div> )}
                  {panel.id === 'expertise' && ( <div className="text-white">Section Expertise (cf. code précédent)</div> )}
                  {panel.id === 'blog' && ( <div className="text-white">Section Activité (cf. code précédent)</div> )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        ))}

        {/* --- MODALE CONTACT (Style Éclectique) --- */}
        <AnimatePresence>
          {isContactOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[#11091d]/90 backdrop-blur-md"
              onClick={() => setIsContactOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-[#160d25] border-2 border-brand-gold p-6 md:p-8 relative overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.1)]"
              >
                {/* Bouton Fermer */}
                <button 
                  onClick={() => setIsContactOpen(false)}
                  className="absolute top-4 right-4 text-brand-gold hover:text-white transition-colors text-xl font-bold"
                >
                  ✕
                </button>

                <div className="flex flex-col items-center space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                  {/* Photo de profil contact */}
                  <div className="w-24 h-24 border-2 border-brand-flame-p p-1 rotate-3 group hover:rotate-0 transition-transform duration-500">
                    <Image src="/profil_cool.png" alt="Kamal Contact" width={96} height={96} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                  </div>

                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">Réseau & Certification</h4>

                  <div className="w-full space-y-4">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/kamal-guidadou" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-brand-flame-p transition-all group">
                      <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
                      <span className="text-xs font-mono text-slate-300 group-hover:text-white">LinkedIn @Kamal Guidadou</span>
                    </a>

                    {/* Root-Me */}
                    <a href="https://www.root-me.org/KamouloxPelvis" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-brand-flame-p transition-all group">
                      <div className="w-6 h-6 overflow-hidden rounded-full border border-brand-flame-h">
                        <Image src="/avatar.png" alt="Avatar RootMe" width={24} height={24} />
                      </div>
                      <span className="text-xs font-mono text-slate-300 group-hover:text-white">Root-Me: KamouloxPelvis</span>
                    </a>

                    {/* TryHackMe */}
                    <a href="https://tryhackme.com/p/KamouloxPelvis" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-brand-flame-p transition-all group">
                      <Image src="/thm.png" alt="TryHackMe" width={24} height={24} />
                      <span className="text-xs font-mono text-slate-300 group-hover:text-white">TryHackMe: KamouloxPelvis</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:kamal.guidadou@gmail.com" 
                       className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 hover:border-brand-gold transition-all group">
                      <Image src="/email.png" alt="Email" width={24} height={24} />
                      <span className="text-xs font-mono text-slate-300 group-hover:text-white">kamal.guidadou@gmail.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}