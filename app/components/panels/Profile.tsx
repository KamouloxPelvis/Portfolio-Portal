'use client';

import React from 'react';
import Image from 'next/image';

interface ProfilProps {
  onContactClick: () => void;
}

export default function Profil({ onContactClick }: ProfilProps) {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Badge Statut */}
      <div className="inline-block border border-brand-flame-h px-4 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-tighter">
        Statut : En recherche d&apos;alternance Cyber
      </div>

      {/* Header Profil : Photo + Nom */}
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0 border border-brand-flame-p p-1">
          <Image 
            src="/photo_profil.jpg" 
            alt="Kamal Guidadou" 
            width={128} 
            height={128} 
            className="w-full h-full object-cover filter transition-all duration-500" 
          />
          <div className="absolute -bottom-2 -right-2 bg-brand-flame-h w-4 h-4" />
        </div>
        <div className="space-y-1">
          <h3 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none text-brand-skull">
            KAMAL <br /> GUIDADOU<span className="text-brand-flame-p">.</span>
          </h3>
          <p className="text-[10px] md:text-xs font-mono text-brand-flame-p tracking-widest uppercase italic">
            Ingénieur Cloud & DevSecOps
          </p>
        </div>
      </div>

      {/* Baseline / Bio */}
      <p className="text-sm md:text-lg font-mono text-slate-400 border-l-4 border-brand-gold pl-4 md:pl-6 max-w-xl italic text-balance">
        &apos;Bridging the gap between Code, Infrastructure and Security&apos; : 
        Expertise en automatisation d&apos;architectures <span className="text-brand-skull">Cloud Natives</span> et sécurisation des cycles de build.
      </p>

      {/* Actions / Boutons */}
      <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
        {/* Bouton Télécharger CV */}
        <a 
          href="/CV_Kamal_Guidadou.pdf" 
          download 
          className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 bg-brand-flame-h text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center"
        >
          Télécharger CV
        </a>

        {/* Bouton Repo Git */}
        <a 
          href="https://gitlab.com/portfolio-kamal-guidadou" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 border border-brand-flame-p text-brand-flame-p text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-flame-p hover:text-white transition-all flex items-center justify-center text-center"
        >
          Repo Git
        </a>

        {/* Bouton Me Contacter */}
        <button 
          onClick={(e) => { 
            e.stopPropagation(); 
            onContactClick(); 
          }}
          className="flex-1 md:flex-none px-6 py-3 md:px-8 md:py-4 border border-brand-gold text-brand-gold text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all cursor-pointer z-20"
        >
          Me Contacter
        </button>
      </div>
    </div>
  );
}