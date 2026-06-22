'use client';

import React from 'react';
import Image from 'next/image';

interface ProfilProps {
  onContactClick: () => void;
}

/**
 * Profile Component
 * Showcases professional identity and core mission.
 * Features auto-spacing to adapt to large resolutions while maintaining accessibility on laptops.
 */
export default function Profil({ onContactClick }: ProfilProps) {
  return (
    /* Full-width container with flex-col layout for vertical distribution */
    <div className="flex flex-col h-full w-full no-scrollbar overflow-y-auto">
      
      {/* Top Section: Branding and Current Status */}
      <div className="space-y-4">
        <div className="inline-block border border-brand-flame-h px-3 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-widest">
           OUVERT AUX NOUVELLES OPPORTUNITÉS EN INGENIERIE DEVOPS & INFRASTRUCTURES SECURISÉES 
        </div>

        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 border border-brand-flame-p p-1">
            <Image 
              src="/photo_profil.jpg" 
              alt="Kamal Guidadou" 
              width={112} 
              height={112} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.85] text-brand-skull">
              KAMAL <br /> GUIDADOU<span className="text-brand-flame-p">.</span>
            </h3>
            <p className="text-[10px] font-mono text-brand-flame-p tracking-widest uppercase italic mt-2">
              Devops & Infrastructure Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section: Technical Pitch
          'my-auto' ensures vertical centering on large screens, expanding the layout.
      */}
      <div className="max-w-3xl my-auto py-8">
        <p className="text-lg md:text-3xl font-mono text-brand-gold italic leading-tight mb-4">
          &apos;Concevoir l&apos;infrastructure, automatiser la résilience, sécuriser le cycle de vie&apos;
        </p>
        <p className="text-[11px] md:text-lg font-mono text-slate-400 border-l-4 border-brand-gold pl-6 italic leading-relaxed text-balance">
          DevOps & Infrastructure Engineer, j&apos;allie la rigueur de l&apos;administration système et réseaux 
          à l&apos;agilité des pratiques DevSecOps. Mon expertise se concentre sur la conception 
          d&apos;infrastructures cloud-native sécurisées, où chaque brique — du serveur physique 
          aux clusters conteneurisés — est pensée pour garantir la continuité de service et 
          l&apos;auditabilité, avec une orientation marquée vers la 
          <span className="text-brand-skull font-bold"> sécurité opérationnelle</span>.
        </p>
      </div>

      {/* Bottom Section: Strategic Links and Actions */}
      <div className="flex flex-wrap gap-4 pt-6 pb-2 mt-auto">
        <a 
          href="/CV_DevOps_Infra.pdf" 
          download 
          className="flex-1 md:flex-n one px-8 py-4 bg-brand-flame-h text-white text-[10px] font-bold uppercase tracking-widest text-center hover:brightness-110 transition-all"
        >
          Télécharger CV
        </a>
        <a 
          href="https://github.com/KamouloxPelvis/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 md:flex-none px-8 py-4 border border-brand-flame-p text-brand-flame-p text-[10px] font-bold uppercase tracking-widest text-center hover:bg-brand-flame-p/10 transition-all"
        >
          Repo GitHub
        </a>
        <button 
          onClick={onContactClick} 
          className="flex-1 md:flex-none px-8 py-4 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-brand-gold/10 transition-all"
        >
          Contacts
        </button>
      </div>
    </div>
  );
}