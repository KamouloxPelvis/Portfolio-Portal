'use client';
import Image from 'next/image';

interface ProfilProps {
  onContactClick: () => void;
}

/**
 * Profile Component
 * Showcases professional identity and core mission.
 */
export default function Profil({ onContactClick }: ProfilProps) {

  return (
    <div className="flex flex-col h-full w-full no-scrollbar overflow-y-auto relative">

      {/* Top Section: Branding and Status */}
      {/* Ajout du padding-right (pr-32) pour laisser la place au badge */}
      <div className="space-y-4 pr-32"> 
        <div className="inline-block border border-brand-flame-h px-3 py-1 text-[10px] font-mono text-brand-flame-h uppercase tracking-widest">
            OUVERT A DE NOUVELLES OPPORTUNITÉS
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
              Expert DevOps, Infra & Sécurité
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-w-3xl my-auto py-8">
        <p className="text-lg md:text-3xl font-mono text-brand-gold italic leading-tight mb-4">
          &apos;Concevoir l&apos;infrastructure, automatiser la résilience, sécuriser le cycle de vie&apos;
        </p>
        <p className="text-[11px] md:text-lg font-mono text-slate-400 border-l-4 border-brand-gold pl-6 italic leading-relaxed text-balance">
          Expert DevOps, Infra & Sécurité, mon travail repose sur une expertise transverse : je maîtrise la 
          <span className="text-brand-skull font-bold"> stabilité des réseaux physiques &amp; des protocoles hérités </span> (Administrateur d&apos;Infrastructures
          Sécurisées) tout en déployant l&apos;agilité des pratiques DevSecOps (Cisco DevNet, Controle plane K3s K-Guard). Je conçois des infrastructures cloud-native 
          sécurisées en gardant une vision unifiée, <span className="text-brand-skull font-bold"> du hardware aux clusters </span>, 
          garantissant ainsi une maîtrise de la chaîne de transmission jusqu&apos;à l&apos;application, avec une orientation marquée vers la 
          <span className="text-brand-skull font-bold"> sécurité opérationnelle</span>.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap gap-4 pt-6 pb-2 mt-auto">
        <a 
          href="/CV_DevOps_Infra.pdf" 
          download 
          className="flex-1 md:flex-none px-8 py-4 bg-brand-flame-h text-white text-[10px] font-bold uppercase tracking-widest text-center hover:brightness-110 transition-all"
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