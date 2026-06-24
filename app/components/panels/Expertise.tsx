'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DiplomaModal from '../DiplomaModal';

const DIPLOMAS = {
  cisco: {
    title: "Formation certifiante Cisco DevNet Associate",
    school: "ISEN / Yncréa Ouest / Cisco Networking Academy",
    year: "2026",
    logo: "/cisco_logo.png",
    image: "/cisco_illustration.webp",
    program: [
      "Développement & Conception : Utilisation avancée des APIs (REST, RPC) et protocoles de parsing (JSON, XML).",
      "Infrastructures Programmables : Automatisation via Netconf, Restconf et modèles de données YANG.",
      "Sécurité & Opérations : Déploiement d'applications sécurisées sur Docker et gestion des secrets via CI/CD.",
      "Automatisation Réseau : Scripting Python pour la configuration massive d'équipements Cisco IOS/Nexus."
    ],
    details: "Certification validant la capacité à transformer des réseaux traditionnels en infrastructures agiles pilotées par le code."
  },
  afpa: {
    title: "Titre Pro Administrateur d'Infrastructures Sécurisées",
    school: "AFPA - Brest",
    year: "2025",
    logo: "/afpa_logo.png",
    image: "/afpa_illustration.jpg",
    program: [
      "Conception : Design d'infrastructures réseaux basées sur les besoins métiers et la sécurité (VLAN, Routage).",
      "Administration Système : Gestion des serveurs Windows (AD, GPO) et Linux (Hardening, Services).",
      "Sécurisation : Mise en œuvre de firewalls (Fortinet/PFSense), VPN, certificats SSL/TLS et filtrage.",
      "Supervision & MCO : Monitoring de la disponibilité et gestion des sauvegardes/restaurations."
    ],
    details: "Référentiel d'État validant la maîtrise complète du cycle de vie des infrastructures systèmes et réseaux sécurisées."
  },
  matrice: {
    title: "Bootcamp Développeur Full Stack",
    school: "Matrice l'école - Paris",
    year: "2022",
    logo: "/matrice_logo.png",
    image: "/matrice_illustration.jpeg",
    program: [
      "Développement Front-End : Conception d'interfaces réactives avec React, Next.js et Tailwind CSS.",
      "Développement Back-End : Création d'APIs robustes avec Node.js, Express et bases de données NoSQL/SQL.",
      "Culture DevOps : Industrialisation du développement via Docker, GitLab CI et gestion de version Git.",
      "Méthodologie Agile : Pilotage de projet en mode Sprint, revues de code et collaboration technique."
    ],
    details: "Immersion intensive centrée sur la production web moderne et le référentiel naturel."
  }
};

export default function Expertise() {
  const [selectedDiploma, setSelectedDiploma] = useState<keyof typeof DIPLOMAS | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="h-full w-full overflow-y-auto px-4 md:px-8 py-6 custom-scrollbar"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-4">
          <h3 className="text-2xl md:text-4xl font-black uppercase text-brand-flame-h tracking-tighter">Expertise Technique</h3>
        </div>

        {/* Core Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Cloud & Orch.", border: "border-brand-gold", desc: "Kubernetes (K3s), Docker, Cloudflare, IaC." },
            { title: "Security & Net.", border: "border-brand-flame-p", desc: "Cisco IOS, Hardening, VPN, SSL/TLS, Ansible." },
            { title: "DevSecOps", border: "border-brand-flame-h", desc: "GitLab CI/CD, Python, Typescript, Go." },
            { title: "Observability", border: "border-blue-400", desc: "Prometheus, Grafana, SQL, NoSQL." }
          ].map((item) => (
            <div key={item.title} className={`bg-white/5 p-4 border-l-4 ${item.border}`}>
              <div className="text-white font-bold text-xs uppercase tracking-wider">{item.title}</div>
              <p className="text-[11px] text-slate-400 font-mono mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Cisco DevNet Highlights */}
        <div className="space-y-4">
          <div className="text-brand-flame-p font-bold text-xs uppercase tracking-widest border-b border-white/5 pb-2">
            Spécialisation Cisco DevNet
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Infrastructure Automation", desc: "Netconf/Restconf & Modèles YANG" },
              { label: "Application Security", desc: "SCA & Gestion des secrets" },
              { label: "Cloud & Container", desc: "Docker & CI/CD Pipelines" },
              { label: "Python & APIs", desc: "Scripting & REST Parsing" }
            ].map((item) => (
              <div key={item.label} className="bg-white/5 p-3 flex flex-col justify-center border border-white/5">
                <span className="text-white font-bold text-[10px] uppercase">{item.label}</span>
                <span className="text-[10px] text-slate-400 font-mono">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Diplomas */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em]">Diplômes & Certifications</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(Object.keys(DIPLOMAS) as Array<keyof typeof DIPLOMAS>).map((key) => {
              const diploma = DIPLOMAS[key];
              return (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedDiploma(key)}
                  className="flex flex-col p-4 border border-white/10 bg-black/40 text-left hover:border-brand-gold/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-8 h-8 bg-white overflow-hidden">
                      <Image src={diploma.logo} alt={diploma.school} fill className="object-contain p-0.5" />
                    </div>
                    <div className="text-brand-flame-p font-bold text-[10px]">{diploma.year}</div>
                  </div>
                  <p className="text-xs font-bold text-white uppercase leading-tight mb-1">{diploma.title}</p>
                  <p className="text-[10px] font-mono text-slate-400">{diploma.school}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <DiplomaModal 
        isOpen={!!selectedDiploma} 
        onClose={() => setSelectedDiploma(null)} 
        data={selectedDiploma ? DIPLOMAS[selectedDiploma] : null} 
      />
    </motion.div>
  );
}