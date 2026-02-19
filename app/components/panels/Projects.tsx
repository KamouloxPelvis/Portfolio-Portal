'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import ProjectModal from '../ProjectModal';

export interface Project {
  id: string;
  href: string;
  img: string;
  title: string;
  stack: string;
  desc: string;
  repo?: string;    
  blogUrl?: string;  
  videoPitch?: string;
  screenshots?: string[];
}

const PROJECTS_DATA = [
  {
    id: 'kguard',
    href: "https://app.devopsnotes.org",
    img: "/screenshots/capture_sec-infra-app.jpg",
    title: "K-Guard",
    stack: "FastAPI • Python 3.12 • Docker • Kubernetes • APIs REST • Automated ACLs • Gestion TLS/SSL • Ansible",
    desc: "K-Guard est un dashboard SRE (Site Reliability Engineering) dédié à l'observabilité et à l'audit de sécurité automatisé pour clusters Kubernetes (optimisé pour k3s). Conçu pour offrir une visibilité en temps réel sur l'état de santé des Pods et leur surface d'attaque, K-Guard intègre des fonctions de remédiation immédiates : redémarrage de services, délestage dynamique des réplicas en cas de saturation CPU/RAM, et signalement de mise à jour des images conteneurisées suite à la détection de vulnérabilités critiques.\n\nEn cours : Extension d'audit automatisé via Ansible pour vérifier la conformité réseau du VPS (ports, ACLs, intégrité) et détecter les processus résiduels. Ce module transforme K-Guard en une plateforme de sécurité globale, unifiant la gestion des vulnérabilités applicatives et la gouvernance d'infrastructure",    repo: "https://gitlab.com/portfolio-kamal-guidadou/k-guard",
    blogUrl: "https://blog.devopsnotes.org/articles/k-guard-orchestration-sre-et-audit-de-scurit-sur-k3s",
    videoPitch: "https://www.youtube.com/embed/votre-id-video", //Format video embedded
    screenshots: ["/screenshots/k-guard-1.png", 
                  "/screenshots/k-guard-2.png", 
                  "/screenshots/k-guard-3.png", 
                  "/screenshots/k-guard-4.png", 
                  "/screenshots/k-guard-5.png", 
                  "/screenshots/k-guard-6.png", 
                  "/screenshots/k-guard-7.png", 
                  "/screenshots/k-guard-8.png"]
  },
  {
    id: 'monitoring',
    href: "https://monitoring.devopsnotes.org",
    img: "/screenshots/capture_monitoring.png",
    title: "Live Monitoring",
    stack: "Prometheus • Grafana • K3s • NodeExporter • Cadvisor",
    desc: "Écosystème d'observabilité complet dédié à la haute disponibilité et à la sécurité d'un cluster K3s de production. Ce dashboard centralise les signaux dorés (Golden Signals) pour assurer un MCO proactif :\n\n• Disponibilité & Ingress : Monitoring critique des contrôleurs Nginx et des taux de succès des requêtes pour garantir une expérience sans interruption.\n• Performance & SRE : Analyse granulaire de la consommation RAM/CPU par micro-service (Backend, Frontend, ClamAV) permettant un Capacity Planning précis.\n• Sécurité & Réseau : Surveillance en temps réel des flux Ingress couplée à un tracking des tentatives d'intrusion (codes 404, 401) et suivi des certificats TLS.",
  },
  {
    id: 'blog',
    href: "https://blog.devopsnotes.org",
    img: "/screenshots/blog_devopsnotes.png",
    title: "Blog DevOpsNotes",
    stack: "React/Ts • Nodejs/Express • MongoDB • Docker • K3s • Nginx • GitLab CI • Cloudflare • Sentry télémetry  • Grafana Monitoring",
    desc: "Plateforme d'échange technique communautaire autour des thématiques DevOps et DevSecOps. DevopsNotes-blog est une application Full-Stack 'Cloud-Native' conçue pour illustrer les standards modernes du DevOps et de la SecOps. Bien plus qu'un simple blog, ce projet est un laboratoire d'architecture évolutive et automatisée.",
    repo: "https://gitlab.com/portfolio-kamal-guidadou/devopsnotes-blog",
    screenshots: ["/screenshots/blog-capture-0.png",
                  "/screenshots/blog-capture-1.png", 
                  "/screenshots/blog-capture-2.png", 
                  "/screenshots/blog-capture-3.png", 
                  "/screenshots/blog-capture-4.png", 
                  "/screenshots/blog-capture-5.png", 
                  "/screenshots/blog-capture-6.png",
    ]
  }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="h-full flex flex-col space-y-4 md:space-y-6">
      <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-skull border-b border-white/10 pb-2 md:pb-4">
        Réalisations
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-y-auto pr-2 custom-scrollbar">
        {PROJECTS_DATA.map((proj) => (
          <button 
            key={proj.id} 
            onClick={() => setSelectedProject(proj)}
            className="text-left relative group overflow-hidden border border-brand-gold/30 bg-black flex flex-col h-full min-h-[380px] cursor-pointer"
          >
            <div className="relative h-56 md:h-64 w-full overflow-hidden bg-zinc-900 shrink-0">
              <Image 
                src={proj.img} 
                alt={proj.title} 
                fill 
                style={{ objectFit: 'cover' }} 
                className="transition-all duration-700 transform group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="border border-brand-gold text-brand-gold px-4 py-2 font-mono text-xs uppercase tracking-widest">Voir Détails</span>
              </div>
            </div>

            <div className="p-3 md:p-4 flex flex-col justify-start grow bg-black">
              <h4 className="text-md md:text-lg font-bold text-brand-gold uppercase tracking-tighter">
                {proj.title}
              </h4>
              <p className="text-[8px] font-mono text-slate-500 mt-0.5 uppercase tracking-widest">
                {proj.stack}
              </p>
              <p className="text-[11px] text-slate-300 mt-2 leading-snug">
                {proj.desc}
              </p>
            </div>
          </button>
        ))}

        <div className="hidden lg:block border border-white/5 bg-white/[0.02] min-h-[380px] items-center justify-center flex">
          <span className="text-white/5 font-mono text-[10px] uppercase tracking-[0.3em]">Next_Big_Thing_In_Progress</span>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
            project={selectedProject} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}