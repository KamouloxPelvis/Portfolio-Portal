'use client';

import React, { useState, useEffect } from 'react';

export default function Monitoring() {
  const [sslDays, setSslDays] = useState(87);

  useEffect(() => {
    // --- LOGIQUE DYNAMIQUE "PSEUDO" KAMAL ---
    // Date de dernier renouvellement (9 février 2026 à 87j du terme)
    // On calcule la différence entre aujourd'hui et la date d'expiration théorique
    const expirationDate = new URLSearchParams(window.location.search).get('debugDate') 
      ? new Date() 
      : new Date('2026-05-07'); // Date cible (87 jours après le 9 fév)

    const calculateDays = () => {
      const now = new Date();
      const diffTime = expirationDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setSslDays(diffDays > 0 ? diffDays : 0);
    };

    calculateDays();
    const timer = setInterval(calculateDays, 3600000); // Mise à jour toutes les heures
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full flex flex-col space-y-6 overflow-y-auto pr-2 custom-scrollbar">
      <div className="border-b border-white/10 pb-4">
        <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-skull tracking-tighter">
          Live Ops <span className="text-brand-flame-p">&</span> Cyber Monitoring
        </h3>
        <div className="flex flex-col gap-1">
          <p className="text-[10px] md:text-xs font-mono text-brand-flame-p uppercase tracking-widest mt-1">
            Observabilité du Cluster K3s | Stack Prometheus & Grafana
          </p>
          
          <a 
            href="https://monitoring.devopsnotes.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] md:text-xs font-mono text-brand-gold hover:text-white transition-colors duration-300 break-all flex items-center gap-2"
          >
            <span className="animate-pulse text-brand-flame-p">●</span> Explorer l&apos;instance live : monitoring.devopsnotes.org
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Colonne de gauche : Indicateurs & Baseline */}
        <div className="lg:col-span-1 space-y-4 font-mono text-[10px] md:text-xs">
          <div className="bg-white/5 p-4 border border-white/10 shadow-inner">
            <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4">
              <span className="text-slate-400">Baseline Sécurité :</span>
              <span className="text-brand-gold uppercase font-bold text-right">Établie</span>
            </div>

            {/* Ligne Certificats DYNAMIQUE */}
            <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4">
              <span className="text-slate-400">Certificats SSL/TLS :</span>
              <div className="flex items-center gap-1">
                <span className="text-green-500 uppercase font-bold text-right">Valides</span>
                <span className="text-green-500/80 text-[9px] font-bold">
                  ({sslDays}J)
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-slate-400">Score Qualys :</span>
              <span className="text-brand-flame-p uppercase font-bold text-right">Grade A+</span>
            </div>
          </div>  

          <div className="p-4 bg-brand-flame-h/5 border border-brand-flame-h/20">
            <h4 className="text-brand-flame-h font-bold uppercase mb-2 text-[11px]">Analyse de Flux & Baseline</h4>
            <p className="text-slate-400 italic text-[10px] leading-relaxed">
              Ce graphique correspond au taux de requêtes HTTP par seconde 
              capturées en périphérie du cluster, me permettant de définir une baseline 
              de sécurité pour discriminer en temps réel le trafic légitime des anomalies 
              de flux ou des tentatives de déni de service (DoS).
            </p>
          </div>
        </div>

        {/* Colonne de droite : Iframe Grafana */}
        <div className="lg:col-span-2 relative min-h-[350px] bg-black border border-white/10 rounded-sm overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-flame-p opacity-50 group-hover:opacity-100 transition-opacity z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
          
          <iframe 
            src="https://monitoring.devopsnotes.org/d-solo/ad2hfk6/securite-3a-trafic-et-vulnerabilites?orgId=1&from=now-6h&to=now&timezone=browser&var-Filters=&panelId=2&theme=dark"
            width="100%" 
            height="100%" 
            className="min-h-[350px] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 relative z-0 scale-[1.01]"
            frameBorder="0"
          />

          <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-2 bg-brand-flame-p text-white px-3 py-1.5 rounded-sm shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <p className="text-[10px] font-black uppercase tracking-tighter">
                Live Stream Data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}