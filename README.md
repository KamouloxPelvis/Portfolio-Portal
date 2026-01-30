🚀 Portfolio Portal - Kamal Guidadou

Bienvenue sur le cœur de mon infrastructure. Ce projet n'est pas qu'un simple portfolio, c'est un démonstrateur technique orchestré par Kubernetes, sécurisé par les standards du marché et supervisé en temps réel.

🛠 Tech Stack
Frontend : Next.js 14, Tailwind CSS, Framer Motion.

Orchestration : Kubernetes (K3s) sur VPS Kamatera.

Monitoring : Grafana & Prometheus (Stack LGO).

Networking & Sécurité : Cloudflare (DNS/WAF), Cert-Manager (TLS), Nginx Ingress.

Automatisation : GitLab CI/CD, Docker.

<p align="center">
  <img src="screenshots/portfolio_homepage.png" width="600" alt="Portfolio Homepage">
</p>

💎 Points d'Impact & Réalisations

1. Haute Disponibilité et Orchestration Kubernetes
Déploiement d'une architecture résiliente au sein d'un cluster K3s. Gestion du trafic via un Ingress Controller Nginx permettant l'hébergement de plusieurs services (portfolio, blog, app) isolés par Namespaces, optimisant l'usage des ressources du VPS.

2. Observabilité et Monitoring (Grafana)
Mise en œuvre d'une solution de monitoring complète pour surveiller la santé du cluster et des applications. Visualisation des métriques de performance et d'uptime, garantissant une réactivité maximale sur les incidents d'infrastructure.

3. Edge Networking & Durcissement Sécurité
Sécurisation de la surface d'attaque via Cloudflare et Full TLS. Automatisation des certificats SSL par Cert-Manager (Challenge ACME). Intégration d'une page de maintenance durcie pour les micro-services en cours de déploiement (app.devopsnotes.org).

<p align="center">
  <img src="screenshots/k8s_cert.png" width="600" alt="Kubernetes Cluster Status">
</p>

📈 Pipeline CI/CD

Le cycle de vie est entièrement automatisé :

Build : Image Docker optimisée.

Push : Registre privé GitLab.

Deploy : Rolling update sur le cluster via kubectl et CI_CD_SSH_KEY.

<p align="center">
  <img src="screenshots/gitlab_ci-cd.png" width="600" alt="Gitlab pipelines">
</p>

Kamal Guidadou Ingénieur Cloud & DevSecOps | Blog | Portfolio

