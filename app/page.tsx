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
    <div className="h-screen w-full bg-brand-bg p-2 md:p-12 flex items-center justify-center font-sans overflow-hidden">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ff4d4d; border-radius: 10px; }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #ff4d4d rgba(255, 255, 255, 0.05); }
      `}</style>

      <main className="flex flex-col md:flex-row h-full w-full max-w-7xl border border-brand-gold/20 bg-black overflow-hidden shadow-2xl">
        {panels.map((panel) => (
          <motion.section
            key={panel.id}
            layout
            onClick={() => setExpanded(panel.id)}
            animate={{ 
              flex: expanded === panel.id ? 12 : 1,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 1.2 }}
            className={`relative cursor-pointer overflow-hidden border-white/5 
              ${expanded === panel.id ? 'bg-opacity-100' : 'md:border-r border-b md:border-b-0 hover:bg-white/5'} 
              ${panel.color} transition-colors duration-500`}
          >
            {/* Titre vertical (caché ou réduit sur mobile pour laisser place au contenu) */}
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
                  
                  {/* --- PROFIL --- */}
                  {panel.id === 'intro' && (
                    <div className="space-y-6 md:space-y-8">
                      <div className="inline-block border border-brand-flame-h px-4 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-tighter">
                        Statut : Disponible pour de nouveaux défis
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0 border border-brand-flame-p p-1">
                          <Image src="/profil_cool_2.jpg" alt="Kamal Guidadou" width={128} height={128} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                          <div className="absolute -bottom-2 -right-2 bg-brand-flame-h w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none text-brand-skull">KAMAL <br /> GUIDADOU<span className="text-brand-flame-p">.</span></h3>
                          <p className="text-[10px] md:text-xs font-mono text-brand-flame-p tracking-widest uppercase">Ingénieur Cloud Architect & DevSecOps</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-lg font-mono text-slate-400 border-l-4 border-brand-gold pl-4 md:pl-6 max-w-xl italic">
                        Expert en automatisation et sécurisation des infrastructures critiques. J&apos;accompagne les entreprises dans la mise en place de <span className="text-brand-skull">systèmes haute performance et résilients.</span>
                      </p>
                      <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
                        <a href="/CV_Kamal_Guidadou.pdf" download className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 bg-brand-flame-h text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">CV</a>
                        <button className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 border border-brand-gold text-brand-gold text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all">Contact</button>
                      </div>
                    </div>
                  )}

                  {/* --- RÉALISATIONS (Ajusté) --- */}
                  {panel.id === 'projects' && (
                    <div className="h-full flex flex-col space-y-4 md:space-y-6">
                      <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-skull border-b border-white/10 pb-2 md:pb-4">Projets</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-y-auto pr-2 custom-scrollbar">
                        
                        <a href="https://blog.devopsnotes.org" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden border border-brand-gold/30 bg-black flex flex-col">
                          <div className="relative h-32 md:h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shrink-0">
                            <Image src="/blog_devopsnotes.png" alt="Aperçu Blog DevOpsNotes" fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-60" />
                          </div>
                          <div className="p-4 md:p-5 flex-grow">
                            <h4 className="text-lg md:text-xl font-bold text-brand-gold uppercase tracking-tighter">Blog DevOpsNotes</h4>
                            <p className="text-[9px] font-mono text-slate-400 mt-1 uppercase">K8s • GitLab CI • Full-Stack</p>
                            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                              Plateforme d&apos;échange technique déployée via GitLab CI sur un cluster Kubernetes, incluant une gestion temps réel des données.
                            </p>
                          </div>
                        </a>

                        <div className="border border-white/5 bg-white/5 p-4 md:p-6 group hover:border-brand-flame-p transition-all">
                          <span className="text-brand-flame-p font-mono text-[10px] uppercase tracking-widest">Infrastructure</span>
                          <h4 className="text-xl md:text-2xl font-bold text-white mt-1 uppercase italic">HA Cluster</h4>
                          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                            Provisionnement automatique d&apos;infrastructures On-Premise (Bare Metal) via Terraform et Ansible.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- COMPÉTENCES --- */}
                  {panel.id === 'expertise' && (
                    <div className="space-y-6 h-full overflow-y-auto pr-4 custom-scrollbar">
                      <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <h3 className="text-2xl md:text-3xl font-mono text-brand-flame-h uppercase">Stack</h3>
                        <span className="hidden md:block text-[10px] font-mono text-slate-500 uppercase tracking-widest">MCO • Hardening</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <div className="bg-white/5 p-4 md:p-6 border-l-2 border-brand-gold">
                          <div className="text-brand-gold font-bold mb-2 text-[10px] uppercase">Cloud & K8s</div>
                          <p className="text-[10px] md:text-[11px] text-slate-300 font-mono">Kubernetes, Docker, Cloudflare, Google Cloud APIs, Terraform.</p>
                        </div>
                        <div className="bg-white/5 p-4 md:p-6 border-l-2 border-brand-flame-p">
                          <div className="text-brand-flame-p font-bold mb-2 text-[10px] uppercase">Net & Sec</div>
                          <p className="text-[10px] md:text-[11px] text-slate-300 font-mono">Cisco IOS, Fortinet, VLAN/VPN, Hardening, Wireshark.</p>
                        </div>
                        <div className="bg-white/5 p-4 md:p-6 border-l-2 border-brand-flame-h">
                          <div className="text-brand-flame-h font-bold mb-2 text-[10px] uppercase">DevSecOps</div>
                          <p className="text-[10px] md:text-[11px] text-slate-300 font-mono">GitLab CI, Ansible, Python, Sentry, SonarQube.</p>
                        </div>
                        <div className="bg-white/5 p-4 md:p-6 border-l-2 border-slate-400">
                          <div className="text-slate-400 font-bold mb-2 text-[10px] uppercase">Observabilité</div>
                          <p className="text-[10px] md:text-[11px] text-slate-300 font-mono">Zabbix, Grafana, SCCM, Next.js, Node.js, MongoDB.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- ACTIVITÉ --- */}
                  {panel.id === 'blog' && (
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-black uppercase text-brand-skull tracking-tighter">Indicateurs</h3>
                      <div className="space-y-4 font-mono text-[10px] md:text-xs">
                         <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-slate-400">Status :</span>
                            <span className="text-green-500">Stable</span>
                         </div>
                         <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-slate-400">Environnements :</span>
                            <span className="text-brand-gold">3 Prod Active</span>
                         </div>
                         <div className="flex justify-between border-b border-white/10 pb-2">
                            <span className="text-slate-400">Sécurité :</span>
                            <span className="text-brand-flame-p">Secrets Encrypted</span>
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