'use client';

import React from 'react';
import Image from 'next/image';

interface ProfilProps {
  onContactClick: () => void;
}

export default function Profil({ onContactClick }: ProfilProps) {
  return (
    /* 1. h-full ou h-[calc(100vh-theme(spacing.32))] pour s'adapter au parent
      2. justify-between répartit l'espace pour que les boutons restent en bas
    */
    <div className="flex flex-col h-full justify-between py-2 max-w-4xl no-scrollbar overflow-y-auto">
      
      {/* Partie Haute : Statut + Header */}
      <div className="space-y-4">
        <div className="inline-block border border-brand-flame-h px-3 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-widest">
          Statut : EN RECHERCHE D&apos;ALTERNANCE EN CYBERSÉCURITÉ
        </div>

        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 border border-brand-flame-p p-1">
            <Image src="/photo_profil.jpg" alt="Kamal" width={112} height={112} className="w-full h-full object-cover grayscale" />
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.85] text-brand-skull">
              KAMAL <br /> GUIDADOU<span className="text-brand-flame-p">.</span>
            </h3>
            <p className="text-[10px] font-mono text-brand-flame-p tracking-widest uppercase italic mt-2">
              Infrastructures Sécurisées & Automatisation
            </p>
          </div>
        </div>
      </div>

      {/* Partie Centrale : Bio (On réduit un peu les marges ici) */}
      <div className="max-w-2xl py-4">
        <p className="text-lg md:text-xl font-mono text-brand-gold italic leading-tight mb-3">
          &apos;Bridging the gap between Code, Infrastructure and Security&apos;
        </p>
        <p className="text-[11px] md:text-sm font-mono text-slate-400 border-l-4 border-brand-gold pl-5 italic leading-relaxed text-balance">
          Je mets mes compétences en administration des infrastructures sécurisées au service de la continuité de service. 
          Mon approche repose sur un socle technique rigoureux (AIS, Dev & Automation) allié aux outils modernes de déploiement (DevSecOps) 
          pour des environnements sécurisés du <span className="text-brand-skull font-bold">serveur physique au cluster Cloud-Native.</span>
        </p>
      </div>

      {/* Partie Basse : Tes boutons qui réapparaissent enfin ! */}
      <div className="flex flex-wrap gap-3 mt-auto pt-4">
        <a href="/CV_Alt_Cybersecu.pdf" download className="flex-1 md:flex-none px-6 py-3 bg-brand-flame-h text-white text-[10px] font-bold uppercase tracking-widest text-center">
          Télécharger CV
        </a>
        <a href="https://gitlab.com/portfolio-kamal-guidadou/" className="flex-1 md:flex-none px-6 py-3 border border-brand-flame-p text-brand-flame-p text-[10px] font-bold uppercase tracking-widest text-center">
          Repo Git
        </a>
        <button onClick={onContactClick} className="flex-1 md:flex-none px-6 py-3 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-widest cursor-pointer">
          Me Contacter
        </button>
      </div>
    </div>
  );
}