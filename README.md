🚀 Portfolio Portal — Infrastructure & Engineering Showcase

Bienvenue sur le centre de contrôle de mon écosystème. Ce projet n'est pas qu'un simple portfolio : c'est un démonstrateur technique orchestré par Kubernetes, sécurisé par des standards industriels et supervisé en temps réel.

Note : L'intégralité de l'infrastructure est gérée en tant que code (IaC) et déployée via des pipelines automatisés.

![Page du portfolio](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_homepage.png)


🏗️ Architecture & Stack Technique

Le portfolio-portal repose sur une architecture conçue pour la performance et la résilience :

Frontend : Next.js 14, Tailwind CSS, Framer Motion.

Orchestration : Kubernetes (K3s) sur VPS Ubuntu.

Networking : Cloudflare (DNS/WAF), Nginx Ingress Controller.

Sécurité : Cert-Manager (TLS Let's Encrypt), GitLab Secrets.

Observabilité : Prometheus & Grafana (Stack LGO).

![Environnement de travail](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_vscode.png)


💎 Ingénierie & Points d'Impact

1. Orchestration Kubernetes & Haute Disponibilité

Conception d'une architecture résiliente au sein d'un cluster K3s. L'isolation par Namespaces permet de faire cohabiter mes différents services (blog-devopsnotes, portfolio-portal, app-devopsnotes) de manière étanche.

Ingress Management : Centralisation du trafic via Nginx Ingress pour un routage intelligent.

Resource Control : Optimisation de l'usage des ressources du VPS pour garantir un uptime maximal.

![Cluster k3s multi-tenant](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/k3s_blog_bridge_2.png)

2. Observabilité & Monitoring (Real-Time Dashboards)

Mise en œuvre d'une solution de monitoring complète pour surveiller la santé du cluster et des applications.

Visualisation : Suivi précis des métriques hardware et applicatives via Grafana.

Réactivité : Alerting et suivi des Pods pour une maintenance proactive.

![Monitoring avec Grafana](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/capture_monitoring.png)

![Monitoring avec Grafana](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/capture_monitoring_2.png)

3. DevSecOps & Sécurité Périmétrique

La sécurité est intégrée dès la conception (Security by Design).

Edge Security : Protection DDoS et filtrage WAF via Cloudflare.

Full TLS : Automatisation du cycle de vie des certificats SSL via Cert-Manager.

![Certification SSL](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/k8s_cert_2.png)


⚡ Performance & Expérience Utilisateur (UX/SEO)

L'ingénierie ne s'arrête pas au déploiement. Pour portfolio-portal, j'applique une méthodologie axée sur la performance pure et la visibilité.

Analytics Privacy-First (Umami) : Déploiement d'une instance Umami auto-hébergée sur le cluster pour suivre l'audience sans compromettre la vie privée des utilisateurs (RGPD compliant).

Indexation & SEO : Pilotage de la visibilité via la Google Search Console pour garantir une indexation optimale des contenus techniques.

![Gitlab pipelines](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/g_search_console.png)

Scores Lighthouse (Green Stack) : Optimisation du rendu Next.js pour atteindre des scores proches de 100 en Performance, Accessibilité et SEO.

Impact : Temps de chargement ultra-rapide et infrastructure optimisée pour le Core Web Vitals de Google.

![Gitlab pipelines](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_lighthouse.png)


📈 Automatisation : Pipeline CI/CD

Le cycle de vie du projet est entièrement automatisé sur GitLab. Chaque modification déclenche un pipeline robuste :

Build : Image Docker optimisée.

Push : Stockage sur registre privé GitLab.

Deploy : Rolling update sur le cluster via kubectl et ma clé CI_CD_SSH_KEY.

![Gitlab pipelines](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/gitlab_ci-cd.png)

👨‍💻 À propos de l'auteur

Kamal Guidadou — Ingénieur Cloud & DevSecOps

Expertise en automatisation d'architectures Cloud Natives et sécurisation des cycles de build.

🔗 Blog DevOpsNotes | 🔗 Portfolio Live | 🔗 GitLab


Kamal Guidadou Ingénieur Cloud & DevSecOps

