'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Project } from './panels/Projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

// Typage pour la gestion de la Lightbox avec légende
interface ZoomedMedia {
  src: string;
  index: number;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [zoomedMedia, setZoomedMedia] = useState<ZoomedMedia | null>(null);

  if (!isOpen || !project) return null;

  const techList = project.stack.split('•').map(t => t.trim());

  // Mapping des légendes basé sur l'ordre des screenshots de K-Guard
    const getCaption = (index: number) => {
  const captions: Record<string, string[]> = {
    kguard: [
      "Interface du CLI d'installation Go (TUI Bubble Tea)",
      "Audit SCA Trivy : Détection des vulnérabilités critiques",
      "Network Sentinel : Visualisation de la micro-segmentation",
      "Analyse SRE : Quotas et limites de ressources",
      "Logs de remédiation active : Strategic Merge Patching",
      "Audit de conformité des images Docker",
      "Historique des scans stockés en base SQLite locale",
      "État de santé des Pods et déploiements Kubernetes",
      "Visualisation des NetworkPolicies Ansible"
    ],
    monitoring: [
      "Dashboard Disponibilité : État de santé du contrôleur Nginx",
      "Dashboard Performance : Monitoring RAM/CPU des micro-services",
      "Dashboard Sécurité : Tracking des flux et erreurs Ingress"
    ],
    blog: [
      "Interface utilisateur Cloud-Native",
      "Interface utilisateur Cloud-Native",
      "Interface utilisateur Cloud-Native",
      "Interface utilisateur Cloud-Native",
      "Interface utilisateur Cloud-Native",
      "Interface utilisateur Cloud-Native",
      "Interface utilisateur Cloud-Native"
    ]
  };
  return captions[project.id]?.[index] || "Preuve technique de l'infrastructure";
};

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl bg-[#0d0714] border border-brand-gold/30 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col font-sans"
      >
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/5">
            <h3 className="text-brand-gold font-black uppercase tracking-tighter text-2xl">{project.title}</h3>
            <button onClick={onClose} className="text-white/50 hover:text-brand-gold font-mono text-xl cursor-pointer transition-colors">✕</button>
        </div>

        {/* --- CONTENU --- */}
        <div className="overflow-y-auto p-6 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* COLONNE GAUCHE (75%) */}
            <div className="lg:col-span-3 space-y-8">
              {project.videoPitch && (
                <div className="aspect-video w-full border border-white/10 bg-black shadow-2xl relative">
                  <iframe src={project.videoPitch} className="w-full h-full" allowFullScreen title="Video Pitch" />
                </div>
              )}

              <div 
                className="prose prose-invert max-w-none font-mono"
                dangerouslySetInnerHTML={{ __html: project.desc }} 
              />

              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10 hover:border-brand-gold transition-all text-[10px] font-bold uppercase font-mono group">
                    <div className="relative w-4 h-4"><Image src="/gitlab.png" fill alt="Git" className="object-contain" /></div>
                    <span className="text-slate-300 group-hover:text-brand-gold transition-colors">Repository Git</span>
                  </a>
                )}
                {project.blogUrl && (
                  <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-black px-4 py-2 text-[10px] font-bold uppercase font-mono hover:bg-white transition-all">
                    Lire l&apos;article sur mon blog
                  </a>
                )}
              </div>
            </div>

            {/* COLONNE DROITE (25%) */}
            <div className="space-y-8 border-l border-white/5 pl-6 hidden lg:block">
              {/* System Stack */}
              <div className="space-y-4">
                <h4 className="text-white/40 font-mono text-[9px] uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> System Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techList.map(t => (
                    <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] text-slate-400 font-mono uppercase italic">{t}</span>
                  ))}
                </div>
              </div>

              {/* Rapport PDF */}
              {project.architectureDoc && (
                <div className="space-y-3">
                  <h4 className="text-white/40 font-mono text-[9px] uppercase tracking-[0.2em]">Rapport Technique</h4>
                  <a href={project.architectureDoc} download className="block group relative aspect-[1.4/1] overflow-hidden border border-brand-gold/30 bg-zinc-900">
                    <Image src="/docs/thumbnail_k-guard.png" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" alt="Thumbnail" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-brand-gold text-black text-[9px] font-black px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">Télécharger PDF</span>
                    </div>
                  </a>
                </div>
              )}

              {/* BOUTONS ACTIONS */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-brand-flame-h text-white px-6 py-2 border border-brand-flame-h hover:bg-white hover:text-black transition-all text-[10px] font-bold uppercase font-mono shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span></span>
                    Aller sur l&apos;application
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10 hover:border-brand-gold transition-all text-[10px] font-bold uppercase font-mono group">
                    <div className="relative w-4 h-4"><Image src="/gitlab.png" fill alt="Git" className="object-contain" /></div>
                    <span className="text-slate-300 group-hover:text-brand-gold">Repository Git</span>
                  </a>
                )}
                {project.blogUrl && (
                  <a href={project.blogUrl} target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-black px-4 py-2 text-[10px] font-bold uppercase font-mono hover:bg-white transition-all">
                    Article complet
                  </a>
                )}
              </div>

              {/* Screenshots */}
              {project.screenshots && (
                <div className="space-y-4">
                  <h4 className="text-white/40 font-mono text-[9px] uppercase tracking-[0.2em]">Visual Evidence</h4>
                  <div className="flex flex-col gap-4">
                    {project.screenshots.map((img, i) => (
                      <button 
                        key={i} 
                        onClick={() => setZoomedMedia({ src: img, index: i })}
                        className="relative aspect-video border border-white/10 overflow-hidden bg-zinc-900 transition-all duration-700 group cursor-zoom-in"
                      >
                        <Image src={img} fill className="object-cover" alt={`Screenshot ${i}`} />
                        <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                            <span className="text-[7px] text-brand-gold font-mono uppercase bg-black/80 px-1 py-0.5 self-start">
                                {getCaption(i).substring(0, 30)}...
                            </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- LIGHTBOX (Zoom + Légende dynamique) --- */}
      <AnimatePresence>
        {zoomedMedia && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            // On utilise une fonction qui ferme le zoom SANS fermer le modal parent
            onClick={(e) => {
              e.stopPropagation();
              setZoomedMedia(null);
            }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-6 md:p-12 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }}
              // Empêche la fermeture si on clique sur l'image elle-même
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-7xl flex flex-col items-center justify-center gap-6"
            >
              <div className="relative w-full h-[80%]">
                <Image 
                  src={zoomedMedia.src} 
                  fill 
                  className="object-contain shadow-[0_0_50px_rgba(251,191,36,0.1)]" 
                  alt="Evidence" 
                  priority 
                />
              </div>

              {/* Barre de légende dynamique */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="bg-black/80 border border-brand-gold/30 px-6 py-3 max-w-2xl text-center"
              >
                <p className="text-brand-gold font-mono text-xs md:text-sm uppercase tracking-widest mb-1">
                  Evidence #{zoomedMedia.index + 1}
                </p>
                <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed">
                  {getCaption(zoomedMedia.index)}
                </p>
              </motion.div>

              {/* Bouton de fermeture du zoom uniquement */}
              <button 
                className="absolute top-0 right-0 text-white/50 hover:text-brand-gold text-2xl p-4 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedMedia(null);
                }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  }