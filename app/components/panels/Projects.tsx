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
  architectureDoc?: string;
  screenshots?: string[];
}

const PROJECTS_DATA = [
  {
    id: 'kguard',
    href: "https://app.devopsnotes.org",
    img: "/screenshots/capture_sec-infra-app.jpg",
    title: "K-Guard",
    stack: "FastAPI • Pydantic • Python 3.12 • Docker • Kubernetes • Trivy • APIs REST • Automated ACLs • Gestion TLS/SSL • Ansible",
    desc: `
    <div class="space-y-8 text-slate-300 font-mono text-[13px] leading-relaxed">
      <section>
        <h4 class="text-brand-gold font-black text-sm mb-3 border-b border-brand-gold/10 pb-2 uppercase tracking-tighter">
          🛡️ K-Guard : Cloud-Native DevSecOps & Active Defense Platform
        </h4>
        <p class="mb-4">
          <strong>K-Guard</strong> est une solution de sécurisation intégrée conçue pour les environnements <strong>Kubernetes (K3s)</strong>. 
          En tant que plateforme orientée <strong>SRE</strong>, son objectif est de transformer la sécurité passive en une posture active et automatisée, 
          alliant visibilité en temps réel et capacités d'auto-guérison.
        </p>
      </section>

      <section class="space-y-6">
        <h4 class="text-brand-flame-h font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
           🎯 Piliers de Sécurité Implémentés
        </h4>

        <div class="space-y-6 pl-4 border-l border-white/5">
          <div>
            <p class="text-white font-bold mb-1">1. 🛡️ Network Security & Zero Trust (Sentinel)</p>
            <p>Protection basée sur le moindre privilège et la micro-segmentation automatisée par <strong>Ansible</strong>. 
            Déploiement de <em>NetworkPolicies</em> instaurant un blocage total par défaut (Deny-All) sur les namespaces critiques.</p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">2. 🔍 AppSec & Remédiation Active</p>
            <p>K-Guard agit comme un agent <strong>SecOps</strong>. Intégration de <strong>Trivy</strong> pour l'audit SCA des images (CVE High/Critical). 
            Capacité de <em>Strategic Merge Patch</em> via l'API K8s pour appliquer des correctifs à chaud sans interruption de service.</p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">3. 🔐 IAM & Cryptographie (Secure by Design)</p>
            <p>Hachage <strong>Bcrypt</strong> (cost 12) via le CLI en Go et protection des endpoints par <strong>JWT (HS256)</strong> avec une expiration stricte à 10h.</p>
          </div>

          <div>
            <p class="text-white font-bold mb-1">4. ⚙️ Résilience & SecOps (CIA Triad)</p>
            <ul class="list-none space-y-2 mt-2">
              <li class="flex gap-2"><span class="text-brand-gold">→</span> <strong>Anti-DoS :</strong> Limits CPU/RAM strictes et <em>PersistentVolumeClaim</em> pour éviter les OOM Kills.</li>
              <li class="flex gap-2"><span class="text-brand-gold">→</span> <strong>Hardening Edge :</strong> Restriction Ingress aux plages IP <strong>Cloudflare</strong> uniquement.</li>
              <li class="flex gap-2"><span class="text-brand-gold">→</span> <strong>ACL (RFC 1918) :</strong> API verrouillée aux réseaux privés, bloquant tout trafic public non routé.</li>
              <li class="flex gap-2"><span class="text-brand-gold">→</span> <strong>RBAC :</strong> ServiceAccount restreint avec ClusterRole sur mesure (moindre privilège).</li>
              <li class="flex gap-2"><span class="text-brand-gold">→</span> <strong>Audit :</strong> Historisation immuable dans <strong>SQLite</strong> pour la traçabilité.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  `,
    repo: "https://gitlab.com/portfolio-kamal-guidadou/k-guard",
    blogUrl: "https://blog.devopsnotes.org/articles/k-guard-orchestration-sre-et-audit-de-scurit-sur-k3s",
    videoPitch: "https://youtu.be/zWBhaYw0LSM",
    architectureDoc: "/docs/Rapport_Architecture_KGuard.pdf",
    screenshots: [
        "/screenshots/install.png",
        "/screenshots/kguard-1.png", 
        "/screenshots/kguard-2.png", 
        "/screenshots/kguard-3.png", 
        "/screenshots/kguard-4.png", 
        "/screenshots/kguard-5.png", 
        "/screenshots/kguard-6.png", 
        "/screenshots/kguard-7.png",
        "/screenshots/kguard-8.png"
    ] 
  },
  {
    id: 'monitoring',
    href: "https://monitoring.devopsnotes.org",
    img: "/screenshots/capture_monitoring.png",
    title: "Live Monitoring",
    stack: "Prometheus • Grafana • K3s • NodeExporter • Cadvisor",
    desc: `
      <div class="space-y-6 text-slate-300 font-mono text-[13px] leading-relaxed">
        <p>Écosystème d'observabilité complet dédié à la haute disponibilité et à la sécurité d'un cluster <strong>K3s</strong> de production. Ce dashboard centralise les <strong>Golden Signals</strong> pour assurer un MCO (Maintien en Condition Opérationnelle) proactif via trois axes stratégiques :</p>
        
        <ul class="list-none space-y-4 pl-2 border-l border-brand-gold/20">
          <li><strong>📊 Dashboard Disponibilité (Nginx) :</strong> Monitoring critique du contrôleur Ingress. Analyse en temps réel des taux de succès des requêtes (non-5xx) et du volume de trafic par micro-service pour garantir une expérience sans interruption[cite: 55, 56].</li>
          <li><strong>⚡ Dashboard Performance (SRE) :</strong> Analyse granulaire de la consommation RAM et CPU. Utilisation de <em>NodeExporter</em> et <em>Cadvisor</em> pour le Capacity Planning, permettant d'identifier les fuites de ressources avant l'OOM Kill[cite: 34, 35].</li>
          <li><strong>🛡️ Dashboard Sécurité :</strong> Surveillance des flux réseau et détection des anomalies. Tracking des tentatives d'intrusion (codes 401/404) et suivi de l'état des certificats TLS/SSL pour prévenir les expirations critiques.</li>
        </ul>
      </div>
    `,
    screenshots: [
      "/screenshots/monitoring-capture-1.png",
      "/screenshots/monitoring-capture-2.png",
      "/screenshots/monitoring-capture-3.png"
    ]
  },
  {
    id: 'blog',
    href: "https://blog.devopsnotes.org",
    img: "/screenshots/blog_devopsnotes.png",
    title: "Blog DevOpsNotes",
    stack: "React/Ts • Nodejs/Express • MongoDB • Docker • K3s • Nginx • GitLab CI • Cloudflare • Sentry télémetry  • Grafana Monitoring",
    desc: `
          <div class="space-y-6 text-slate-300 font-mono text-[13px] leading-relaxed">
            <p>Plateforme d'échange technique communautaire conçue comme un laboratoire d'architecture <strong>Cloud-Native</strong>. Ce projet illustre l'implémentation complète d'une chaîne <strong>CI/CD</strong> sécurisée et automatisée.</p>
            
            <p>L'application utilise une stack MERN durcie : le frontend React communique avec une API Node.js protégée par Cloudflare. La robustesse est assurée par une télémétrie <strong>Sentry</strong> intégrée, permettant un tracking d'erreurs en temps réel dès le déploiement sur le cluster Kubernetes[cite: 58, 61].</p>
            
            <p>C'est ici que je documente mes recherches sur la sécurisation de la <em>Supply Chain</em> logicielle, de l'écriture du Dockerfile jusqu'au déploiement final via GitLab CI.</p>
          </div>
        `,    
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