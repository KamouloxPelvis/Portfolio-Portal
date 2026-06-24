'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ProfilProps {
  onContactClick: () => void;
}

/**
 * Profile Component - Fully Responsive
 */
export default function Profil({ onContactClick }: ProfilProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto px-4 md:px-8 py-6 custom-scrollbar">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section: Flex reverse pour le badge */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-start gap-6">
          
          {/* Main Info */}
          <div className="space-y-4">
            <div className="inline-block border border-brand-flame-h px-3 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-widest">
              OUVERT AUX OPPORTUNITÉS DEVOPS & INFRA
            </div>
            
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 border border-brand-flame-p p-1">
                <Image 
                  src="/photo_profil.jpg" 
                  alt="Kamal Guidadou" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
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

          {/* Credly Badge - Responsive Container */}
          <div className="w-full md:w-auto flex justify-center md:block">
            <div className="border border-white/10 bg-black/20 p-1 scale-[0.8] md:scale-[0.6] origin-top-right">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="a6236722-64f4-4b70-a485-b14911cb1cf7" 
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
          </div>
        </div>

        {/* Middle Section: Textes avec gestion de la largeur */}
        <div className="max-w-3xl space-y-6">
          <p className="text-lg md:text-3xl font-mono text-brand-gold italic leading-tight">
            &apos;Concevoir l&apos;infrastructure, automatiser la résilience, sécuriser le cycle de vie&apos;
          </p>
          <p className="text-sm md:text-lg font-mono text-slate-400 border-l-4 border-brand-gold pl-6 italic leading-relaxed text-balance">
            DevOps & Infrastructure Engineer, j&apos;allie la rigueur de l&apos;administration système et réseaux 
            à l&apos;agilité des pratiques DevSecOps. Mon expertise se concentre sur la conception 
            d&apos;infrastructures cloud-native sécurisées, avec une orientation marquée vers la 
            <span className="text-brand-skull font-bold"> sécurité opérationnelle</span>.
          </p>
        </div>

        {/* Bottom Section: Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a 
            href="/CV_DevOps_Infra.pdf" 
            download 
            className="px-8 py-4 bg-brand-flame-h text-white text-[10px] font-bold uppercase tracking-widest text-center hover:brightness-110 transition-all"
          >
            Télécharger CV
          </a>
          <a 
            href="https://github.com/KamouloxPelvis/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-brand-flame-p text-brand-flame-p text-[10px] font-bold uppercase tracking-widest text-center hover:bg-brand-flame-p/10 transition-all"
          >
            Repo GitHub
          </a>
          <button 
            onClick={onContactClick} 
            className="px-8 py-4 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-brand-gold/10 transition-all"
          >
            Contacts
          </button>
        </div>
      </div>
    </div>
  );
}