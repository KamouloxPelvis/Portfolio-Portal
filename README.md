[ 🇫🇷 Français ](#version-francaise) | [ 🇺🇸 English ](#english-version)

---

<a name="version-francaise"></a>
# 🚀 Portfolio Portal — Infrastructure & Engineering Showcase

Bienvenue sur le centre de contrôle de mon écosystème. Ce projet n'est pas qu'un simple portfolio : c'est un démonstrateur technique orchestré par Kubernetes, sécurisé par des standards industriels et supervisé en temps réel.

> **Note :** L'intégralité de l'infrastructure est gérée en tant que code (IaC) et déployée via des pipelines automatisés.

![Page du portfolio](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_homepage.png)

---

### 🏗️ Architecture & Stack Technique

Le **portfolio-portal** repose sur une architecture conçue pour la performance et la résilience :

* **Frontend :** Next.js 14, Tailwind CSS, Framer Motion.
* **Orchestration :** Kubernetes (k3s) sur VPS Ubuntu (Kamatera).
* **Networking :** Cloudflare (DNS/WAF), Nginx Ingress Controller.
* **Sécurité :** Cert-Manager (TLS Let's Encrypt), GitLab Secrets.
* **Observabilité :** Prometheus & Grafana (Stack LGO).

![Environnement de travail](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_vscode.png)

---

### 💎 Ingénierie & Points d'Impact

#### 1. Orchestration Kubernetes & Haute Disponibilité
Conception d'une architecture résiliente au sein d'un cluster **k3s**. L'isolation par Namespaces permet de faire cohabiter mes différents services (`blog-devopsnotes`, `portfolio-portal`, `app-devopsnotes`) de manière étanche.
* **Ingress Management :** Centralisation du trafic via Nginx Ingress pour un routage intelligent.
* **Resource Control :** Optimisation de l'usage des ressources du VPS pour garantir un uptime maximal.

![Cluster k3s multi-tenant](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/k3s_blog_bridge_2.png)

#### 2. Observabilité & Monitoring (Dashboards Temps Réel)
Mise en œuvre d'une solution de monitoring complète pour surveiller la santé du cluster et des applications.
* **Visualisation :** Suivi précis des métriques hardware et applicatives via **Grafana**.
* **Réactivité :** Alerting et suivi des Pods pour une maintenance proactive.

![Monitoring avec Grafana](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/capture_monitoring.png)

#### 3. DevSecOps & Sécurité Périmétrique
La sécurité est intégrée dès la conception (Security by Design).
* **Edge Security :** Protection DDoS et filtrage WAF via Cloudflare.
* **Full TLS :** Automatisation du cycle de vie des certificats SSL via **Cert-Manager**.

![Certification SSL](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/k8s_cert_2.png)

---

### ⚡ Performance & Expérience Utilisateur (UX/SEO)

L'ingénierie ne s'arrête pas au déploiement. Pour **portfolio-portal**, j'applique une méthodologie axée sur la performance pure et la visibilité.

* **Analytics Privacy-First (Umami) :** Déploiement d'une instance Umami auto-hébergée sur le cluster pour suivre l'audience sans compromettre la vie privée des utilisateurs (RGPD compliant).
* **Indexation & SEO :** Pilotage de la visibilité via la Google Search Console pour garantir une indexation optimale des contenus techniques.
* **Scores Lighthouse (Green Stack) :** Optimisation du rendu Next.js pour atteindre des scores proches de 100 en Performance, Accessibilité et SEO.

![Performances Lighthouse](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_lighthouse.png)

---

### 📈 Automatisation : Pipeline CI/CD

Le cycle de vie du projet est entièrement automatisé sur GitLab. Chaque modification déclenche un pipeline robuste :
1. **Build :** Image Docker optimisée.
2. **Push :** Stockage sur registre privé GitLab.
3. **Deploy :** Rolling update sur le cluster via `kubectl` et ma clé `CI_CD_SSH_KEY`.

![GitLab CI/CD Pipelines](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/gitlab_ci-cd.png)

---

### 👨‍💻 À propos de l'auteur

**Kamal Guidadou — Ingénieur Cloud & DevSecOps**
Expertise en automatisation d'architectures Cloud-Natives et sécurisation des cycles de build.

🔗 [Blog DevOpsNotes](https://blog.devopsnotes.org) | 🔗 [Portfolio Live](https://portfolio.devopsnotes.org) | 🔗 [GitLab](https://gitlab.com/kamal)

---

<a name="english-version"></a>
# 🚀 🇺🇸 Portfolio Portal — Infrastructure & Engineering Showcase

Welcome to the command center of my ecosystem. This project is more than just a portfolio: it is a technical demonstrator orchestrated by Kubernetes, secured by industry standards, and monitored in real-time.

> **Note:** The entire infrastructure is managed as Code (IaC) and deployed via automated pipelines.

![Portfolio Homepage](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_homepage.png)

---

### 🏗️ Architecture & Technical Stack

The **portfolio-portal** relies on an architecture designed for high performance and resilience:

* **Frontend:** Next.js 14, Tailwind CSS, Framer Motion.
* **Orchestration:** Kubernetes (k3s) on an Ubuntu VPS (Kamatera).
* **Networking:** Cloudflare (DNS/WAF), Nginx Ingress Controller.
* **Security:** Cert-Manager (TLS Let's Encrypt), GitLab Secrets.
* **Observability:** Prometheus & Grafana (LGO Stack).

![Work Environment](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_vscode.png)

---

### 💎 Engineering & Impact Points

#### 1. Kubernetes Orchestration & High Availability
Designed a resilient architecture within a **k3s cluster**. Namespace isolation allows seamless cohabitation of my different services: `blog-devopsnotes`, `portfolio-portal`, and `app-devopsnotes`.
* **Ingress Management:** Centralized traffic via Nginx Ingress for intelligent routing.
* **Resource Control:** Optimized VPS resource usage to guarantee maximum uptime.

![Multi-tenant k3s cluster](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/k3s_blog_bridge_2.png)

#### 2. Observability & Monitoring (Real-Time Dashboards)
Implemented a comprehensive monitoring solution to track cluster and application health.
* **Visualization:** Precise tracking of hardware and application metrics via **Grafana**.
* **Responsiveness:** Proactive maintenance through Pod alerting and health monitoring.

![Monitoring with Grafana](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/capture_monitoring.png)

#### 3. DevSecOps & Perimeter Security
Security is integrated from the start (Security by Design).
* **Edge Security:** DDoS protection and WAF filtering via Cloudflare.
* **Full TLS:** Automated SSL certificate lifecycle management via **Cert-Manager**.

![SSL Certification](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/k8s_cert_2.png)

---

### ⚡ Performance & User Experience (UX/SEO)

Engineering doesn't stop at deployment. For **portfolio-portal**, I apply a methodology focused on pure performance and visibility.

* **Privacy-First Analytics (Umami):** Deployed a self-hosted Umami instance on the cluster to track audience without compromising user privacy (GDPR compliant).
* **Indexing & SEO:** Managing visibility via Google Search Console to ensure optimal indexing of technical content.
* **Lighthouse Scores (Green Stack):** Optimized Next.js rendering to achieve near-100 scores in Performance, Accessibility, and SEO.

![Lighthouse Performance](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/portfolio_lighthouse.png)

---

### 📈 Automation: CI/CD Pipeline

The project lifecycle is fully automated on GitLab. Every change triggers a robust pipeline:
1.  **Build:** Optimized Docker image.
2.  **Push:** Secure storage on GitLab Private Registry.
3.  **Deploy:** Rolling update on the cluster using `kubectl` and the `CI_CD_SSH_KEY`.

![GitLab CI/CD Pipelines](https://gitlab.com/portfolio-kamal-guidadou/portfolio-portal/-/raw/main/public/screenshots/gitlab_ci-cd.png)

---

### 👨‍💻 About the Author

**Kamal Guidadou — Cloud & DevSecOps Engineer**
Expertise in Cloud-Native architecture automation and secure build cycles.

🔗 [DevOpsNotes Blog](https://blog.devopsnotes.org) | 🔗 [Live Portfolio](https://portfolio.devopsnotes.org) | 🔗 [GitLab](https://gitlab.com/kamal)

Kamal Guidadou - Cloud & DevSecOps Engineer

