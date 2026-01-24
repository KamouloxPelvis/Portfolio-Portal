'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const panels = [
  { id: 'intro', title: 'ENGINEERING', subtitle: 'Qui suis-je ?', color: 'bg-slate-900' },
  { id: 'projects', title: 'SOLUTIONS', subtitle: 'Projets & Démos', color: 'bg-blue-950' },
  { id: 'expertise', title: 'TECH STACK', subtitle: 'Compétences', color: 'bg-indigo-950' },
  { id: 'blog', title: 'BLOG', subtitle: 'DevOpsNotes', color: 'bg-slate-900' },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>('intro');

  return (
    <main className="flex flex-col md:flex-row h-screen w-full overflow-hidden p-2 gap-2 bg-black">
      {panels.map((panel) => (
        <motion.section
          key={panel.id}
          layout
          onClick={() => setExpanded(panel.id)}
          initial={false}
          animate={{
            flex: expanded === panel.id ? 5 : 1, // On augmente le ratio pour plus d'espace
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`relative rounded-2xl cursor-pointer overflow-hidden border border-slate-800/50 ${panel.color} group`}
        >
          {/* Titre en arrière-plan (Background Label) */}
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <motion.h2 
              layout="position"
              className={`text-2xl font-black tracking-tighter transition-opacity duration-500
                ${expanded === panel.id ? 'opacity-10 scale-[2] blur-sm' : 'opacity-40'}
                md:[writing-mode:vertical-lr] md:rotate-180`}
            >
              {panel.title}
            </motion.h2>
          </div>

          {/* CONTENU DYNAMIQUE SELON LA SECTION */}
          {expanded === panel.id && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative z-10 h-full p-6 md:p-12 flex flex-col justify-center"
            >
              
              {/* CAS 1 : SECTION INTRO (Ton profil Kamal) */}
              {panel.id === 'intro' && (
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,1)]"></div>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter">KAMAL G.</h3>
                  </div>
                  <p className="text-xl text-blue-400 font-mono">Full Stack & DevOps Engineer</p>
                  <p className="max-w-xl text-slate-300 leading-relaxed text-lg">
                    I focus on the entire lifecycle—from the first line of code 
                    to automated deployments and search engine dominance.
                  </p>
                  <button className="mt-4 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all">
                    View My CV
                  </button>
                </div>
              )}

              {/* CAS 2 : SECTION PROJECTS */}
              {panel.id === 'projects' && (
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold">Latest Solutions</h3>
                  <div className="grid grid-cols-1 gap-4">
                     <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="text-xs font-mono text-blue-400">01. Infrastructure</span>
                        <h4 className="text-xl font-bold">K3s Cluster Deployment</h4>
                        <p className="text-sm text-slate-400">Terraform, Ansible, & Bare Metal.</p>
                     </div>
                  </div>
                </div>
              )}

              {/* CAS 3 : AUTRES SECTIONS (Générique pour l'instant) */}
              {(panel.id === 'expertise' || panel.id === 'blog') && (
                <div>
                   <h3 className="text-4xl font-bold mb-4">{panel.subtitle}</h3>
                   <p className="text-slate-400 italic">Content for {panel.title} is coming soon...</p>
                </div>
              )}

            </motion.div>
          )}
        </motion.section>
      ))}
    </main>
  );
}