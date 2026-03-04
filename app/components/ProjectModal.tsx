'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Project } from './panels/Projects';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

interface ZoomedMedia {
  src: string;
  index: number;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [zoomedMedia, setZoomedMedia] = useState<ZoomedMedia | null>(null);

  // On mémoïse les screenshots pour stabiliser les dépendances
  const screenshots = useMemo(() => project?.screenshots ?? [], [project?.screenshots]);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (screenshots.length === 0 || zoomedMedia === null) return;
    const nextIndex = (zoomedMedia.index + 1) % screenshots.length;
    setZoomedMedia({ src: screenshots[nextIndex], index: nextIndex });
  }, [screenshots, zoomedMedia]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (screenshots.length === 0 || zoomedMedia === null) return;
    const prevIndex = (zoomedMedia.index - 1 + screenshots.length) % screenshots.length;
    setZoomedMedia({ src: screenshots[prevIndex], index: prevIndex });
  }, [screenshots, zoomedMedia]);

  useEffect(() => {
    if (!zoomedMedia) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') setZoomedMedia(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedMedia, showNext, showPrev]);

  // Si pas de projet ou fermé, on gère le rendu ici, 
  // mais TOUS les hooks ont été déclarés avant.
  if (!isOpen || !project) return null;

  // Extraction de la logique des captions pour plus de clarté
  const getCaption = (index: number) => {
    const captions: Record<string, string[]> = {
      kguard: [
        "Interface du CLI d'installation Go (TUI Bubble Tea)",
        "Vue d'ensemble des pods avec métriques, logs et quick remediation",
        "Logs live de l'application et/ou du backend",
        "Audit SCA Trivy : Détection des vulnérabilités critiques",
        "Audit SCA Trivy : Détection des vulnérabilités critiques",
        "Network Sentinel : Visualisation de la micro-segmentation",
        "Network Sentinel : Visualisation de la micro-segmentation",
        "Logs de remédiation active : Strategic Merge Patching",
        "Scan de vulnérabilités de l'image test/démo de Nginx 1.18",
        "Configuration des alertes Cisco webex",
        "Configuration des alertes Cisco webex",
        "Interface de la messagerie Cisco Webex avec bot d'alerte",
      ],
      monitoring: [
        "Dashboard Disponibilité : État de santé du contrôleur Nginx",
        "Dashboard Performance : Monitoring RAM/CPU des micro-services",
        "Dashboard Sécurité : Tracking des flux et erreurs Ingress"
      ],
      blog: [
        "Interface utilisateur Cloud-Native", "Interface utilisateur Cloud-Native", "Interface utilisateur Cloud-Native"
      ]
    };
    return captions[project.id]?.[index] || "Preuve technique de l'infrastructure";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl bg-[#0d0714] border border-brand-gold/30 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col font-sans"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/5">
            <h3 className="text-brand-gold font-black uppercase tracking-tighter text-2xl">{project.title}</h3>
            <button onClick={onClose} className="text-white/50 hover:text-brand-gold text-xl cursor-pointer transition-colors">✕</button>
        </div>

        <div className="overflow-y-auto p-6 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6 text-sm font-mono leading-relaxed prose prose-invert max-w-none"
                 dangerouslySetInnerHTML={{ __html: project.desc }} 
            />
            
            <div className="space-y-6 border-l border-white/5 pl-6 hidden lg:block">
              <h4 className="text-white/40 font-mono text-[9px] uppercase tracking-[0.2em]">Visual Evidence</h4>
              <div className="grid grid-cols-1 gap-3">
                {screenshots.map((img, i) => (
                  <button key={i} onClick={() => setZoomedMedia({ src: img, index: i })}
                    className="relative aspect-video border border-white/10 overflow-hidden bg-zinc-900 group cursor-zoom-in">
                    <Image src={img} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Evidence thumbnail" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {zoomedMedia && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setZoomedMedia(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <button onClick={showPrev} className="absolute left-4 md:left-10 z-[120] p-4 text-white/20 hover:text-brand-gold transition-all group hidden md:block">
              <span className="text-6xl font-thin group-hover:-translate-x-2 block transition-transform">‹</span>
            </button>

            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-7xl flex flex-col items-center justify-center gap-6"
            >
              <div className="relative w-full h-[75vh] md:h-[80vh]">
                <AnimatePresence mode="wait">
                  <motion.div key={zoomedMedia.src} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="relative w-full h-full">
                    <Image src={zoomedMedia.src} fill className="object-contain" alt="Evidence Zoom" priority />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="text-brand-gold font-mono text-[10px] uppercase tracking-[0.4em] mb-2">
                   Evidence {zoomedMedia.index + 1} / {screenshots.length}
                </span>
                <p className="text-slate-200 font-sans text-sm md:text-base max-w-2xl bg-white/5 px-6 py-2 border border-white/10 rounded-sm">
                  {getCaption(zoomedMedia.index)}
                </p>
              </div>
            </motion.div>

            <button onClick={showNext} className="absolute right-4 md:right-10 z-[120] p-4 text-white/20 hover:text-brand-gold transition-all group hidden md:block">
              <span className="text-6xl font-thin group-hover:translate-x-2 block transition-transform">›</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}