'use client';

import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="h-full flex flex-col space-y-4 md:space-y-6">
      <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-skull border-b border-white/10 pb-2 md:pb-4">
        Réalisations
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 overflow-y-auto pr-2 custom-scrollbar">
        
        {[
          {
            href: "https://blog.devopsnotes.org",
            img: "/screenshots/blog_devopsnotes.png",
            title: "Blog DevOpsNotes",
            stack: "K3s • GitLab CI • Cloudflare",
            desc: "Plateforme d'échange technique déployée via CI/CD sur Kubernetes."
          },
          {
            href: "https://monitoring.devopsnotes.org",
            img: "/screenshots/capture_monitoring.png",
            title: "Live Monitoring",
            stack: "Prometheus • Grafana • K3s",
            desc: "Supervision temps réel du cluster k3s sur VPS Linux: métriques hardware, santé, trafic et sécurité du réseau."
          },
          {
            href: "https://app.devopsnotes.org",
            img: "/screenshots/capture_sec-infra-app.jpg",
            title: "Sec-Infra App",
            stack: "FastAPI • Python • Terraform",
            desc: "Démonstrateur technique DevNet : sécurisation des infrastructures via automatisation et filtrage."
          }
        ].map((proj, i) => (
          <a key={i} href={proj.href} target="_blank" rel="noopener noreferrer" 
            className="relative group overflow-hidden border border-brand-gold/30 bg-black flex flex-col h-full min-h-[380px]">
            
            {/* IMAGE : Hauteur conservée pour dominer la carte */}
            <div className="relative h-56 md:h-64 w-full overflow-hidden bg-zinc-900 shrink-0">
              <Image 
                src={proj.img} 
                alt={proj.title} 
                fill 
                style={{ objectFit: 'cover' }} 
                className="transition-all duration-700 transform group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-60" />
            </div>

            {/* TEXTE : Design compact respecté */}
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
          </a>
        ))}

        {/* 4. PLACEHOLDER : Identique au design original */}
        <div className="hidden lg:block border border-white/5 bg-white/[0.02] min-h-[380px] items-center justify-center flex">
          <span className="text-white/5 font-mono text-[10px] uppercase tracking-[0.3em]">Project_04_In_Progress</span>
        </div>

      </div>
    </div>
  );
}