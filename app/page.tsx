'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Contact from './components/Contact';

const panels = [
  { id: 'intro', title: 'PROFIL', color: 'bg-[#11091d]' },
  { id: 'projects', title: 'RÉALISATIONS', color: 'bg-[#160d25]' },
  { id: 'blog', title: 'LIVE OPS & SECURITY', color: 'bg-[#11091d]' },
  { id: 'expertise', title: 'COMPÉTENCES', color: 'bg-[#1b112e]' },
];

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>('intro');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex-1 w-full bg-brand-bg px-4 md:px-10 pt-4 pb-0 flex flex-col items-center justify-start font-sans">      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #EAB308; border-radius: 10px; }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #EAB308 rgba(255, 255, 255, 0.05); }
      `}</style>

      <main className="flex flex-col md:flex-row h-[calc(100svh-80px)] md:h-[calc(100vh-50px)] min-h-[500px] w-full max-w-7xl border border-brand-gold/20 bg-black overflow-hidden shadow-2xl relative">
        
        {/* LA BOUCLE MANQUANTE ÉTAIT ICI */}
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
                        Statut : En recherche d&apos;alternance Cyber
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0 border border-brand-flame-p p-1">
                          <Image src="/profil_cool_2.jpg" alt="Kamal Guidadou" width={128} height={128} className="w-full h-full object-cover filter transition-all duration-500" />
                          <div className="absolute -bottom-2 -right-2 bg-brand-flame-h w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none text-brand-skull">KAMAL <br /> GUIDADOU<span className="text-brand-flame-p">.</span></h3>
                          <p className="text-[10px] md:text-xs font-mono text-brand-flame-p tracking-widest uppercase italic">Ingénieur Cloud & DevSecOps</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-lg font-mono text-slate-400 border-l-4 border-brand-gold pl-4 md:pl-6 max-w-xl italic text-balance">
                        &apos;Bridging the gap between Code, Infrastructure and Security&apos; : Expertise en automatisation d&apos;architectures <span className="text-brand-skull">Cloud Natives</span> et sécurisation des cycles de build.
                      </p>
                      <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
                        <a href="/CV_alt_inge_devsecops_cyber.pdf" download className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 bg-brand-flame-h text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">Télécharger CV</a>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setIsContactOpen(true); }}
                          className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 border border-brand-gold text-brand-gold text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all cursor-pointer z-20"
                        >
                          Me Contacter
                        </button>
                      </div>
                    </div>
                  )}

                  {/* --- RÉALISATIONS --- */}
                  {panel.id === 'projects' && (
                    <div className="h-full flex flex-col space-y-4 md:space-y-6">
                      <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-skull border-b border-white/10 pb-2 md:pb-4">Projets</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-y-auto pr-2 custom-scrollbar">
                        <a href="https://blog.devopsnotes.org" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden border border-brand-gold/30 bg-black flex flex-col min-h-75">
                          <div className="relative h-40 md:h-48 w-full overflow-hidden bg-zinc-900 shrink-0">
                            <Image src="/screenshots/blog_devopsnotes.png" alt="Aperçu Blog DevOpsNotes" fill style={{ objectFit: 'cover' }} className="transition-all duration-700 transform group-hover:scale-105" />
                            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-60" />
                          </div>
                          <div className="p-4 md:p-5 grow">
                            <h4 className="text-lg md:text-xl font-bold text-brand-gold uppercase tracking-tighter">Blog DevOpsNotes</h4>
                            <p className="text-[9px] font-mono text-slate-400 mt-1 uppercase tracking-widest">K3s • GitLab CI • Cloudflare</p>
                            <p className="text-xs text-slate-300 mt-3 leading-relaxed">Plateforme d&apos;échange technique déployée via CI/CD sur cluster Kubernetes.</p>
                          </div>
                        </a>
                        <a href="https://app.devopsnotes.org" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden border border-brand-flame-p/30 bg-[#2c1035] flex flex-col min-h-75 group">
                          <div className="p-4 md:p-6 grow flex flex-col">
                            <span className="text-brand-flame-p font-mono text-[10px] uppercase tracking-widest mb-1">Démonstrateur Technique DevNet (en cours)</span>
                            <h4 className="text-xl md:text-2xl font-bold text-white uppercase italic leading-tight group-hover:text-brand-flame-p transition-colors">Sec-Infra App</h4>
                            <div className="mt-4 grid grid-cols-2 gap-2">
                                <div className="bg-white/5 p-2 border border-white/10 text-[8px] text-slate-500 font-mono uppercase">FastAPI / Python</div>
                                <div className="bg-white/5 p-2 border border-white/10 text-[8px] text-slate-500 font-mono uppercase">Terraform IaC</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {/* --- ACTIVITÉ --- */}
                  {panel.id === 'blog' && (
                    <div className="h-full flex flex-col space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="border-b border-white/10 pb-4">
                        <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-skull tracking-tighter">
                          Live Ops <span className="text-brand-flame-p">&</span> Security
                        </h3>
                        <p className="text-[10px] md:text-xs font-mono text-brand-flame-p uppercase tracking-widest mt-1">
                          Monitoring en temps réel du Cluster K3s (Ubuntu) Avec Grafana </p>
                        <p>  https://monitoring.devopsnotes.org
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Colonne de gauche : Indicateurs */}
                        <div className="lg:col-span-1 space-y-4 font-mono text-[10px] md:text-xs">
                          <div className="bg-white/5 p-4 border border-white/10">
                            <div className="flex justify-between border-b border-white/10 pb-2 mb-4">
                              <span className="text-slate-400">CI/CD Pipeline :</span>
                              <span className="text-green-500 uppercase font-bold">Stable</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2 mb-4">
                              <span className="text-slate-400">Uptime Cluster :</span>
                              <span className="text-brand-gold uppercase font-bold">99.9%</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                              <span className="text-slate-400">Sec-Audit :</span>
                              <span className="text-brand-flame-p uppercase font-bold">ClamAV Active</span>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-brand-flame-h/5 border border-brand-flame-h/20">
                            <h4 className="text-brand-flame-h font-bold uppercase mb-2 text-[11px]">Focus DevSecOps</h4>
                            <p className="text-slate-400 italic text-[10px] leading-relaxed">
                              Visualisation des ressources pour le blog technique. L&apos;analyse de la mémoire (951 MiB pour ClamAV) 
                              permet d&apos;ajuster les Resource Quotas et de garantir la stabilité de l&apos;infrastructure face aux scans de sécurité.
                            </p>
                          </div>
                        </div>

                        {/* Colonne de droite : Iframe Grafana */}
                        <div className="lg:col-span-2 relative min-h-[300px] bg-black border border-white/10 rounded-sm overflow-hidden group">
                          <div className="absolute top-0 left-0 w-full h-1 bg-brand-flame-p opacity-50 group-hover:opacity-100 transition-opacity" />
                          <iframe 
                            src="https://monitoring.devopsnotes.org/d-solo/ad4vz4j/devopsnotes-monitoring?orgId=1&timezone=browser&theme=dark&panelId=panel-2&__feature.dashboardSceneSolo=true"
                            width="100%" 
                            height="100%" 
                            className="min-h-[300px] transition-all duration-700"
                            frameBorder="0"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- COMPÉTENCES --- */}
                  {panel.id === 'expertise' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="border-b border-white/10 pb-2">
                        <h3 className="text-xl md:text-2xl font-mono text-brand-flame-h uppercase tracking-tighter">Expertise Technique</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 p-4 border-l-4 border-brand-gold">
                          <div className="text-brand-gold font-bold text-xs uppercase tracking-wider">Cloud & Orchestration</div>
                          <p className="text-[11px] text-slate-300 font-mono mt-2">K3s, Docker, Terraform, Cloudflare Workers, Google APIs.</p>
                        </div>
                        <div className="bg-white/5 p-4 border-l-4 border-brand-flame-p">
                          <div className="text-brand-flame-p font-bold text-xs uppercase tracking-wider">Security & Network</div>
                          <p className="text-[11px] text-slate-300 font-mono mt-2">Fortinet, Cisco IOS, VLAN Hardening, VPN, SSH/HTTPS, Wireshark.</p>
                        </div>
                        <div className="bg-white/5 p-4 border-l-4 border-brand-flame-h">
                          <div className="text-brand-flame-h font-bold text-xs uppercase tracking-wider">DevSecOps & Code</div>
                          <p className="text-[11px] text-slate-300 font-mono mt-2">GitLab CI/CD, Ansible, Python, Bash, SonarQube, Sentry.</p>
                        </div>
                        <div className="bg-white/5 p-4 border-l-4 border-slate-400">
                          <div className="text-slate-400 font-bold text-xs uppercase tracking-wider">Monitoring & MCO</div>
                          <p className="text-[11px] text-slate-300 font-mono mt-2">Zabbix, Grafana, SCCM, MongoDB Atlas, API REST Security.</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <h4 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">Diplômes & Certifications</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-4 bg-black/40 p-3 border border-white/5 hover:border-brand-gold/30 transition-colors">
                            <Image src="/javascript.png" alt="JS" width={32} height={32} />
                            <div><p className="text-xs font-bold text-white uppercase">Bootcamp Dev Full Stack</p></div>
                          </div>
                          <div className="flex items-center gap-4 bg-black/40 p-3 border border-white/5">
                            <Image src="/afpa.png" alt="AFPA" width={32} height={32} />
                            <div><p className="text-xs font-bold text-white uppercase">Titre Pro. AIS</p></div>
                          </div>
                          <div className="flex items-center gap-4 bg-black/40 p-3 border border-white/5">
                            <Image src="/cisco.png" alt="Cisco" width={32} height={32} />
                            <div><p className="text-xs font-bold text-white uppercase">CCNA Automation</p></div>
                          </div>
                          <div className="flex items-center gap-4 bg-brand-flame-h/10 p-3 border border-brand-flame-h/30 relative">
                            <Image src="/ynov.png" alt="Ynov" width={32} height={32} />
                            <div><p className="text-xs font-bold text-white uppercase">Mastère Expert Cybersécurité</p></div>
                            <div className="absolute top-1 right-2 text-[8px] font-black text-brand-flame-h uppercase">Focus</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        ))} {/* FERMETURE DE LA BOUCLE ICI */}

        <AnimatePresence>
          <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </AnimatePresence>
      </main>
    </div>
  ); 
}