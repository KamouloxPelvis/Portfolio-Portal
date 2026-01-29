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

  return (
    <div className="h-screen w-full bg-brand-bg p-4 md:p-12 flex items-center justify-center font-sans">
      
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
                  className="relative z-10 h-full p-8 md:p-16 flex flex-col justify-center overflow-y-auto"
                >
                  
                  {/* --- PROFIL : L'accroche Pro --- */}
                  {panel.id === 'intro' && (
                    <div className="space-y-8">
                      <div className="inline-block border border-brand-flame-h px-4 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-tighter">
                        Statut : Disponible pour de nouveaux défis
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 border border-brand-flame-p p-1">
                          <Image 
                            src="/profil_cool_2.jpg" 
                            alt="Kamal Guidadou"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-brand-flame-h w-4 h-4" />
                        </div>

                        <div className="space-y-1">
                          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-brand-skull">
                            KAMAL <br /> 
                            GUIDADOU<span className="text-brand-flame-p">.</span>
                          </h3>
                          <p className="text-xs font-mono text-brand-flame-p tracking-widest uppercase">
                            Ingénieur Cloud Architect & DevSecOps
                          </p>
                        </div>
                      </div>

                      <p className="text-lg font-mono text-slate-400 border-l-4 border-brand-gold pl-6 max-w-xl">
                        Expert en automatisation et sécurisation des infrastructures critiques. J&apos;accompagne les entreprises dans la mise en place de <span className="text-brand-skull">systèmes haute performance, résilients et hautement sécurisés.</span>
                      </p>

                      <div className="flex gap-4 pt-4">
                        <button className="px-8 py-4 bg-brand-flame-h text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                          Télécharger CV
                        </button>
                        <button className="px-8 py-4 border border-brand-gold text-brand-gold font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all">
                          Me Contacter
                        </button>
                      </div>
                    </div>
                  )}

                  {/* --- RÉALISATIONS : Projets phares --- */}
                  {panel.id === 'projects' && (
                    <div className="h-full flex flex-col space-y-6">
                      <h3 className="text-4xl font-black uppercase text-brand-skull border-b border-white/10 pb-4">Projets Majeurs</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto pr-2">
                        
                        <div className="relative group overflow-hidden border border-brand-gold/30 bg-black cursor-pointer"
                             onClick={() => window.open('https://blog.devopsnotes.org')}>
                          <div className="relative h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                             <Image 
                                src="/blog-devopsnotes.webp" 
                                alt="Blog DevOpsNotes Preview"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                             />
                             <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-60" />
                          </div>
                          <div className="p-4">
                            <h4 className="text-xl font-bold text-brand-gold uppercase tracking-tighter">Blog DevOpsNotes</h4>
                            <p className="text-[10px] font-mono text-slate-400 mt-1">Ecosystème Full-Stack • Kubernetes • CI/CD</p>
                            <p className="text-xs text-slate-300 mt-2 line-clamp-2">Plateforme d&apos;échange technique déployée via GitLab CI sur un cluster Kubernetes managé, incluant une gestion temps réel des données.</p>
                          </div>
                        </div>

                        <div className="border border-white/5 bg-white/5 p-6 group hover:border-brand-flame-p transition-all">
                          <span className="text-brand-flame-p font-mono text-[10px] uppercase">Infrastructure</span>
                          <h4 className="text-2xl font-bold text-white mt-1 uppercase italic">Cluster Haute Disponibilité</h4>
                          <p className="text-xs text-slate-500 mt-2">Provisionnement automatique d&apos;infrastructures On-Premise (Bare Metal) via Terraform et Ansible, assurant une disponibilité de service optimale.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- COMPÉTENCES : Expertise & Impact --- */}
                  {panel.id === 'expertise' && (
                    <div className="space-y-8 h-full overflow-y-auto pr-4">
                      <h3 className="text-3xl font-mono text-brand-flame-h uppercase">Valeur Ajoutée</h3>
                      
                      <div className="grid gap-4">
                        {[
                          "Sécurisation des cycles de build : Gestion avancée des secrets et durcissement des pipelines de déploiement (DevSecOps).",
                          "Optimisation Infra : Design d&apos;architectures micro-services réduisant les coûts opérationnels et le downtime de 40%.",
                          "Gouvernance Technique : Mise en place de monitoring proactif et de stratégies de reprise d&apos;activité après sinistre."
                        ].map((point, i) => (
                          <div key={i} className="flex gap-4 bg-white/5 p-4 border-l-2 border-brand-gold">
                            <span className="text-brand-gold font-mono text-xs">0{i+1}</span>
                            <p className="text-xs md:text-sm text-slate-300 italic">{point}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-black/40 border border-brand-flame-p/20 p-6 font-mono text-xs md:text-sm text-slate-300">
                        <div className="text-brand-gold font-bold mb-2">ORCHESTRATION & CLOUD :</div>
                        <div className="pl-6 mb-4">Kubernetes (K3s/GKE), Docker, Cloudflare, Gestion de réseaux complexes.</div>
                        <div className="text-brand-gold font-bold mb-2">AUTOMATION & CI/CD :</div>
                        <div className="pl-6 mb-4">Terraform, Ansible, GitLab CI, GitHub Actions.</div>
                        <div className="text-brand-gold font-bold mb-2">ARCHITECTURE WEB :</div>
                        <div className="pl-6">Next.js, Node.js, MongoDB Atlas, API Security (JWT).</div>
                      </div>
                    </div>
                  )}

                  {/* --- ACTIVITÉ : Indicateurs de performance --- */}
                  {panel.id === 'blog' && (
                    <div className="space-y-6">
                      <h3 className="text-3xl font-black uppercase text-brand-skull tracking-tighter">Indicateurs & Flux</h3>
                      <div className="space-y-4 font-mono text-[10px] md:text-xs">
                         <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-slate-400">Dernier Déploiement :</span>
                            <span className="text-green-500">Réussi (Stable)</span>
                         </div>
                         <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-slate-400">Projets Actifs :</span>
                            <span className="text-brand-gold">3 Environnements de Production</span>
                         </div>
                         <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-slate-400">Sécurité :</span>
                            <span className="text-brand-flame-p">100% Secrets Encrypted</span>
                         </div>
                         <div className="mt-8 pt-4 italic text-slate-500">
                            &gt; Ces indicateurs reflètent ma rigueur opérationnelle et ma capacité à maintenir des systèmes stables en continu.
                         </div>
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