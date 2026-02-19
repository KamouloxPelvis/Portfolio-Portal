'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from './panels/Projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  // Extraction des technos pour affichage conditionnel
  const techList = project.stack.split('•').map(t => t.trim());

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#11091d] border border-brand-gold/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
            <h3 className="text-brand-gold font-black uppercase tracking-tighter text-2xl">{project.title}</h3>
            <button onClick={onClose} className="text-white/50 hover:text-brand-gold font-mono text-xl cursor-pointer">✕</button>
        </div>

        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* 1. Vidéo Pitch-Demo */}
          {project.videoPitch && (
            <div className="aspect-video w-full border border-brand-flame-p/30 bg-black">
              <iframe src={project.videoPitch} className="w-full h-full" allowFullScreen />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
                <h4 className="text-brand-flame-h font-mono text-xs uppercase tracking-widest border-l-2 border-brand-flame-h pl-3">Architecture & Concept</h4>
                <div className="space-y-4 text-slate-300 text-[13px] leading-relaxed font-mono whitespace-pre-line">
                  <p>{project.desc.split('En cours :')[0]}</p>
                  
                  {project.desc.includes('En cours :') && (
                    <p className="italic text-brand-gold/90 bg-brand-gold/5 border-l-2 border-brand-gold/30 pl-4 py-2">
                      <span className="not-italic font-bold">En cours :</span> {project.desc.split('En cours :')[1]}
                    </p>
                  )}
                </div>
                
                {/* BOUTONS ACTIONS */}
                <div className="flex flex-wrap gap-4 pt-4">
                    {project.id !== 'kguard' && project.href && (
                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-flame-h text-white px-6 py-2 border border-brand-flame-h hover:bg-white hover:text-black transition-all text-[10px] font-bold uppercase shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span></span>
                            Aller sur l&apos;application
                        </a>
                    )}

                    {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10 hover:border-brand-gold transition-all text-[10px] font-bold uppercase group">
                            <div className="relative w-4 h-4 shrink-0 overflow-hidden"><Image src="/gitlab.png" alt="Git" fill className="object-contain" /></div>
                            <span className="text-slate-300 group-hover:text-brand-gold">Repository Git</span>
                        </a>
                    )}

                    {project.blogUrl && (
                        <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-gold text-black px-4 py-2 border border-brand-gold hover:bg-white transition-all text-[10px] font-bold uppercase">
                            Lire l&apos;article complet
                        </a>
                    )}
                </div>
            </div>

            {/* TECH STACK DYNAMIQUE */}
            <div className="bg-black/40 p-6 border border-white/5 rounded-sm h-fit">
                <h4 className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
                    Tech Stack
                </h4>
                
                <div className="space-y-6">
                    {/* LOGIC/APP - VIOLET */}
                    <div>
                        <p className="text-[9px] text-brand-flame-p uppercase mb-2 font-bold tracking-widest italic">Backend & Logic</p>
                        <div className="flex flex-wrap gap-2">
                            {techList.filter(t => ['FastAPI', 'Python 3.12', 'Nodejs/Express', 'React/Ts'].includes(t)).map(t => (
                                <span key={t} className="px-2 py-1 bg-brand-flame-p/10 border border-brand-flame-p/30 text-[9px] text-brand-flame-p font-mono">{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* INFRA - BLEU ÉLECTRIQUE */}
                    <div>
                        <p className="text-[9px] text-blue-400 uppercase mb-2 font-bold tracking-widest italic">Infrastructure</p>
                        <div className="flex flex-wrap gap-2">
                            {techList.filter(t => ['Docker', 'Kubernetes', 'K3s', 'Prometheus', 'Grafana', 'Nginx', 'Cloudflare'].includes(t)).map(t => (
                                <span key={t} className="px-2 py-1 bg-blue-400/10 border border-blue-400/30 text-[9px] text-blue-400 font-mono">{t}</span>
                            ))}
                        </div>
                    </div>

                    {/* SECURITY & OPS - JAUNE */}
                    <div>
                        <p className="text-[9px] text-brand-gold uppercase mb-2 font-bold tracking-widest italic">Security & Ops</p>
                        <div className="flex flex-wrap gap-2">
                            {techList.filter(t => ['Ansible', 'Trivy', 'Automated ACLs', 'TLS/SSL', 'Sentry télémetry', 'GitLab CI'].includes(t)).map(t => (
                                <span key={t} className="px-2 py-1 bg-brand-gold/10 border border-brand-gold/30 text-[9px] text-brand-gold font-mono">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* GALERIE CAPTURES */}
          {project.screenshots && (
            <div className="space-y-4 pt-4 border-t border-white/5">
                <h4 className="text-brand-flame-h font-mono text-xs uppercase tracking-widest">Visual Evidence (Grafana & Logs)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.screenshots.map((img, i) => (
                        <div key={i} className="relative aspect-video border border-white/10 group overflow-hidden bg-zinc-900">
                            <Image src={img} alt="Screenshot" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}