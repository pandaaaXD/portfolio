/* ============================================================
   Rim Ghannam — Portfolio interactions
   ============================================================ */
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============================================================
     i18n — English / French
     ============================================================ */
  const I18N = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.passions": "Passions",
      "nav.contact": "Contact",

      "hero.eyebrow": "Available for new opportunities",
      "hero.title": "Hi, I'm <span class=\"gradient-text\">Rim Ghannam</span> —<br /> I keep technology <em>running</em>.",
      "hero.roleLabel": "IT Technician",
      "hero.summary": "Hands-on technician with a sharp eye for diagnostics and a calm head under pressure. From hardware repair and system deployment to networking and user support — I find the root cause, fix it properly, and document it so it stays fixed.",
      "hero.scroll": "scroll",
      "btn.contact": "Contact Me",
      "btn.projects": "View Projects",
      "btn.cv": "Download CV",
      "stat.devices": "Devices repaired & deployed",
      "stat.firstvisit": "Issues resolved first visit",
      "stat.years": "Years hands-on experience",

      "about.title": "About Me",
      "about.sub": "The person behind the toolkit.",
      "about.phototag": "// Rim Ghannam — IT Technician",
      "about.p1": "I'm a technician at heart — the kind of person who took machines apart as a kid just to see how they worked, and learned to put them back together better. Today I do that professionally: diagnosing hardware faults, deploying and maintaining systems, and supporting the people who depend on them.",
      "about.p2": "What sets me apart isn't just technical knowledge — it's how I work. I'm methodical: I isolate variables, test assumptions, and document everything. I'm calm when systems are down and users are stressed. And I never consider a ticket closed until the person on the other end is genuinely unblocked.",
      "value.reliability.t": "Reliability",
      "value.reliability.d": "If I commit to it, it gets done — on time, every time.",
      "value.curiosity.t": "Curiosity",
      "value.curiosity.d": "Every fault is a puzzle. I dig until I understand the <em>why</em>.",
      "value.discipline.t": "Discipline",
      "value.discipline.d": "Built through music and the gym — applied to everything I do.",
      "value.people.t": "People first",
      "value.people.d": "Tech serves people. I translate jargon into clarity and calm.",

      "skills.title": "Technical Skills",
      "skills.sub": "Hardware to helpdesk — the full stack of a technician.",
      "group.hardware": "Hardware",
      "group.systems": "Systems & Software",
      "group.networking": "Networking",
      "group.tools": "Tools & Support",
      "skill.pc": "PC assembly & repair",
      "skill.comp": "Component diagnostics",
      "skill.print": "Printers & peripherals",
      "skill.maint": "Preventive maintenance",
      "skill.win": "Windows 10/11 administration",
      "skill.linux": "Linux (Ubuntu/Debian)",
      "skill.image": "OS imaging & deployment",
      "skill.backup": "Backup & recovery",
      "skill.lan": "LAN / Wi-Fi setup & cabling",
      "skill.tcp": "TCP/IP, DNS, DHCP",
      "skill.router": "Router / switch configuration",
      "skill.nettrouble": "Network troubleshooting",
      "skill.ticket": "Ticketing & documentation",
      "skill.remote": "Remote support tools",
      "skill.script": "Scripting (Bash / PowerShell)",
      "skill.web": "Web basics (HTML/CSS/JS)",
      "certs.title": "// certifications & training",
      "cert.diploma": "IT Technician Diploma",
      "cert.aplus": "CompTIA A+ (in progress)",
      "cert.cisco": "Cisco Networking Basics",
      "cert.safety": "Workplace Safety & ESD Handling",

      "exp.title": "Experience & Projects",
      "exp.sub": "Real problems, measured results.",
      "tag.casestudy": "CASE STUDY",
      "tag.personal": "PERSONAL PROJECT",
      "date.present": "2024 — present",
      "date.ongoing": "ongoing",
      "case1.title": "Workstation Fleet Refresh",
      "case1.role": "IT Technician — deployment & support",
      "case1.desc": "Planned and executed the refresh of an aging workstation fleet: built a standard OS image, migrated user data, and staged rollouts to avoid downtime during working hours.",
      "case1.i1": "<strong>40+</strong> machines imaged and deployed",
      "case1.i2": "<strong>0</strong> hours of unplanned user downtime",
      "case1.i3": "<strong>~30 min</strong> per-machine setup (down from 2h manual)",
      "case2.title": "Small-Office Network Build",
      "case2.role": "Network setup — end to end",
      "case2.desc": "Designed and installed the full network for a small office: structured cabling, router and switch configuration, secured Wi-Fi with guest isolation, and a labeled patch panel so future troubleshooting takes minutes, not hours.",
      "case2.i1": "<strong>20+</strong> drops cabled, tested and certified",
      "case2.i2": "<strong>100%</strong> coverage — dead zones eliminated",
      "case2.i3": "<strong>Documented</strong> topology map handed to the owner",
      "case3.title": "Helpdesk & Hardware Repair",
      "case3.role": "Support technician",
      "case3.desc": "Front-line support across hardware, software and accounts. Built a personal knowledge base of recurring issues that cut average resolution time for the whole team — because a fix you can't repeat isn't really a fix.",
      "case3.i1": "<strong>300+</strong> tickets resolved",
      "case3.i2": "<strong>98%</strong> first-contact resolution on hardware faults",
      "case3.i3": "<strong>25%</strong> faster average resolution after KB rollout",
      "case4.title": "Home Lab",
      "case4.role": "Self-directed learning",
      "case4.desc": "A home lab built from refurbished parts: a small server running self-hosted services, a segmented network for testing, and scheduled backups. It's where I break things on purpose — so I don't break them at work.",
      "case4.i1": "<strong>Self-hosted</strong> services with monitoring & backups",
      "case4.i2": "<strong>Refurbished</strong> hardware given a second life",
      "case4.i3": "<strong>Sandbox</strong> for Linux, scripting and networking practice",
      "chip.imaging": "Imaging",
      "chip.datamig": "Data migration",
      "chip.docs": "Documentation",
      "chip.cabling": "Cabling",
      "chip.routing": "Routing",
      "chip.security": "Security",
      "chip.helpdesk": "Helpdesk",
      "chip.repair": "Repair",
      "chip.kb": "Knowledge base",
      "chip.training": "User training",
      "chip.selfhost": "Self-hosting",
      "chip.networking": "Networking",

      "passions.title": "Passions & Interests",
      "passions.sub": "The same discipline that fixes systems also learns sonatas and lifts iron.",
      "passions.quote": "“Practice a scale 500 times, rack the weight one more rep, re-seat the card and test again — <span class=\"gradient-text\">it's all the same skill: showing up until it works.</span>”",
      "guitar.title": "Guitar",
      "guitar.sub": "// mini music portfolio",
      "guitar.desc": "Years of daily practice taught me what no manual could: that mastery is just patience plus repetition. Here's a small selection of what I play.",
      "player.select": "Select a track",
      "player.sub": "— rim ghannam, guitar",
      "player.hint": "drop your recordings in <strong>assets/audio/</strong> and list them in js/main.js",
      "player.rec": "rec",
      "player.soon": "soon",
      "player.comingsoon": " — recording coming soon",
      "piano.title": "Piano",
      "piano.sub": "// musical growth",
      "piano.desc": "Piano is where I learned to read complexity — two hands, two clefs, one outcome. Each piece below marked a level I once thought was out of reach.",
      "piano.m1.t": "First full piece",
      "piano.m1.d": "Learned entirely by ear — patience level: unlocked.",
      "piano.m2.t": "Reading sheet music",
      "piano.m2.d": "From hunting single notes to playing fluently.",
      "piano.m3.t": "Performing for others",
      "piano.m3.d": "Calm under pressure — useful on stage <em>and</em> on call.",
      "fitness.title": "Gym & Fitness",
      "fitness.sub": "// consistency engine",
      "fitness.desc": "Progressive overload is just iterative debugging for the body: set a goal, measure, adjust, repeat. The gym is where my discipline gets compiled daily.",
      "fit.week": "sessions / week",
      "fit.years": "years consistent",
      "fit.showup": "show-up rate mindset",

      "contact.title": "Let's Talk",
      "contact.sub": "Hiring a technician who actually answers? I reply fast.",
      "contact.lead": "Whether it's a role, a contract, or just a question about something in this portfolio — my inbox is open.",
      "social.cv": "CV / Resume",
      "form.name": "Name",
      "form.email": "Email",
      "form.message": "Message",
      "ph.name": "Your name",
      "ph.email": "you@company.com",
      "ph.message": "Tell me about the role or project…",
      "btn.send": "Send Message",
      "btn.sending": "Sending…",
      "footer.text": "Rim Ghannam — built by hand, like everything I fix.",

      "roles": ["Hardware & Diagnostics", "System Deployment", "Network Setup", "User Support", "Problem Solver"],
    },

    fr: {
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.skills": "Compétences",
      "nav.experience": "Expérience",
      "nav.passions": "Passions",
      "nav.contact": "Contact",

      "hero.eyebrow": "Disponible pour de nouvelles opportunités",
      "hero.title": "Bonjour, je suis <span class=\"gradient-text\">Rim Ghannam</span> —<br /> je veille à ce que la technologie <em>fonctionne</em>.",
      "hero.roleLabel": "Technicien informatique",
      "hero.summary": "Technicien minutieux doté d'un sens aigu du diagnostic et d'un grand sang-froid. Du dépannage matériel au déploiement de systèmes, en passant par les réseaux et le support utilisateur — je trouve la cause profonde, je la corrige correctement et je la documente pour que le problème reste résolu.",
      "hero.scroll": "défiler",
      "btn.contact": "Me contacter",
      "btn.projects": "Voir les projets",
      "btn.cv": "Télécharger le CV",
      "stat.devices": "Appareils réparés et déployés",
      "stat.firstvisit": "Problèmes résolus dès la 1ʳᵉ visite",
      "stat.years": "Années d'expérience pratique",

      "about.title": "À propos de moi",
      "about.sub": "La personne derrière la boîte à outils.",
      "about.phototag": "// Rim Ghannam — Technicien informatique",
      "about.p1": "Je suis technicien dans l'âme — le genre de personne qui démontait les machines enfant juste pour comprendre comment elles fonctionnaient, et qui apprenait à les remonter en mieux. Aujourd'hui, j'en ai fait mon métier : diagnostiquer les pannes matérielles, déployer et maintenir les systèmes, et accompagner les personnes qui en dépendent.",
      "about.p2": "Ce qui me distingue, ce n'est pas seulement les connaissances techniques — c'est ma façon de travailler. Je suis méthodique : j'isole les variables, je teste les hypothèses et je documente tout. Je reste calme quand les systèmes sont en panne et que les utilisateurs sont stressés. Et je ne considère jamais un ticket comme clos tant que la personne en face n'est pas réellement débloquée.",
      "value.reliability.t": "Fiabilité",
      "value.reliability.d": "Si je m'y engage, c'est fait — dans les temps, à chaque fois.",
      "value.curiosity.t": "Curiosité",
      "value.curiosity.d": "Chaque panne est une énigme. Je creuse jusqu'à comprendre le <em>pourquoi</em>.",
      "value.discipline.t": "Discipline",
      "value.discipline.d": "Forgée par la musique et la salle de sport — appliquée à tout ce que je fais.",
      "value.people.t": "L'humain d'abord",
      "value.people.d": "La technologie est au service des gens. Je traduis le jargon en clarté et en sérénité.",

      "skills.title": "Compétences techniques",
      "skills.sub": "Du matériel au support — toute la palette d'un technicien.",
      "group.hardware": "Matériel",
      "group.systems": "Systèmes et logiciels",
      "group.networking": "Réseaux",
      "group.tools": "Outils et support",
      "skill.pc": "Assemblage et réparation de PC",
      "skill.comp": "Diagnostic des composants",
      "skill.print": "Imprimantes et périphériques",
      "skill.maint": "Maintenance préventive",
      "skill.win": "Administration Windows 10/11",
      "skill.linux": "Linux (Ubuntu/Debian)",
      "skill.image": "Imagerie et déploiement d'OS",
      "skill.backup": "Sauvegarde et restauration",
      "skill.lan": "Installation LAN / Wi-Fi et câblage",
      "skill.tcp": "TCP/IP, DNS, DHCP",
      "skill.router": "Configuration routeurs / commutateurs",
      "skill.nettrouble": "Dépannage réseau",
      "skill.ticket": "Tickets et documentation",
      "skill.remote": "Outils de support à distance",
      "skill.script": "Scripting (Bash / PowerShell)",
      "skill.web": "Bases du web (HTML/CSS/JS)",
      "certs.title": "// certifications et formations",
      "cert.diploma": "Diplôme de technicien informatique",
      "cert.aplus": "CompTIA A+ (en cours)",
      "cert.cisco": "Bases du réseau Cisco",
      "cert.safety": "Sécurité au travail et manipulation ESD",

      "exp.title": "Expérience et projets",
      "exp.sub": "Des problèmes réels, des résultats mesurables.",
      "tag.casestudy": "ÉTUDE DE CAS",
      "tag.personal": "PROJET PERSONNEL",
      "date.present": "2024 — présent",
      "date.ongoing": "en cours",
      "case1.title": "Renouvellement du parc de postes",
      "case1.role": "Technicien informatique — déploiement et support",
      "case1.desc": "Planification et exécution du renouvellement d'un parc de postes vieillissant : création d'une image système standard, migration des données utilisateurs et déploiements échelonnés pour éviter toute interruption pendant les heures de travail.",
      "case1.i1": "<strong>40+</strong> machines imagées et déployées",
      "case1.i2": "<strong>0</strong> heure d'interruption imprévue",
      "case1.i3": "<strong>~30 min</strong> de configuration par machine (contre 2 h en manuel)",
      "case2.title": "Réseau de petit bureau",
      "case2.role": "Installation réseau — de bout en bout",
      "case2.desc": "Conception et installation du réseau complet d'un petit bureau : câblage structuré, configuration du routeur et du commutateur, Wi-Fi sécurisé avec isolation des invités, et un panneau de brassage étiqueté pour que le dépannage futur prenne des minutes, pas des heures.",
      "case2.i1": "<strong>20+</strong> prises câblées, testées et certifiées",
      "case2.i2": "<strong>100 %</strong> de couverture — zones mortes éliminées",
      "case2.i3": "<strong>Documenté</strong> — plan de topologie remis au client",
      "case3.title": "Support et réparation matérielle",
      "case3.role": "Technicien de support",
      "case3.desc": "Support de première ligne sur le matériel, les logiciels et les comptes. Création d'une base de connaissances personnelle des problèmes récurrents qui a réduit le temps de résolution moyen de toute l'équipe — car une solution qu'on ne peut pas reproduire n'en est pas vraiment une.",
      "case3.i1": "<strong>300+</strong> tickets résolus",
      "case3.i2": "<strong>98 %</strong> de résolution au premier contact sur les pannes matérielles",
      "case3.i3": "<strong>25 %</strong> de résolution moyenne plus rapide après la base de connaissances",
      "case4.title": "Laboratoire personnel",
      "case4.role": "Apprentissage autodidacte",
      "case4.desc": "Un laboratoire maison construit à partir de pièces reconditionnées : un petit serveur hébergeant des services auto-hébergés, un réseau segmenté pour les tests et des sauvegardes planifiées. C'est là que je casse des choses volontairement — pour ne pas les casser au travail.",
      "case4.i1": "<strong>Auto-hébergé</strong> — services avec surveillance et sauvegardes",
      "case4.i2": "<strong>Reconditionné</strong> — du matériel qui a une seconde vie",
      "case4.i3": "<strong>Bac à sable</strong> pour Linux, scripting et réseau",
      "chip.imaging": "Imagerie",
      "chip.datamig": "Migration de données",
      "chip.docs": "Documentation",
      "chip.cabling": "Câblage",
      "chip.routing": "Routage",
      "chip.security": "Sécurité",
      "chip.helpdesk": "Assistance",
      "chip.repair": "Réparation",
      "chip.kb": "Base de connaissances",
      "chip.training": "Formation utilisateurs",
      "chip.selfhost": "Auto-hébergement",
      "chip.networking": "Réseaux",

      "passions.title": "Passions et centres d'intérêt",
      "passions.sub": "La même discipline qui répare les systèmes apprend aussi les sonates et soulève la fonte.",
      "passions.quote": "« Répéter une gamme 500 fois, ajouter une charge pour une répétition de plus, réinsérer la carte et tester à nouveau — <span class=\"gradient-text\">c'est la même compétence : persévérer jusqu'à ce que ça marche.</span> »",
      "guitar.title": "Guitare",
      "guitar.sub": "// mini portfolio musical",
      "guitar.desc": "Des années de pratique quotidienne m'ont appris ce qu'aucun manuel ne pouvait : la maîtrise, c'est juste la patience multipliée par la répétition. Voici une petite sélection de ce que je joue.",
      "player.select": "Sélectionnez un morceau",
      "player.sub": "— rim ghannam, guitare",
      "player.hint": "déposez vos enregistrements dans <strong>assets/audio/</strong> et listez-les dans js/main.js",
      "player.rec": "dispo",
      "player.soon": "bientôt",
      "player.comingsoon": " — enregistrement à venir",
      "piano.title": "Piano",
      "piano.sub": "// progression musicale",
      "piano.desc": "Le piano, c'est là que j'ai appris à lire la complexité — deux mains, deux clés, un seul résultat. Chaque morceau ci-dessous a marqué un niveau que je croyais hors de portée.",
      "piano.m1.t": "Premier morceau complet",
      "piano.m1.d": "Appris entièrement à l'oreille — niveau de patience : débloqué.",
      "piano.m2.t": "Lecture de partitions",
      "piano.m2.d": "De la chasse aux notes isolées à un jeu fluide.",
      "piano.m3.t": "Jouer devant un public",
      "piano.m3.d": "Calme sous pression — utile sur scène <em>comme</em> en intervention.",
      "fitness.title": "Sport et fitness",
      "fitness.sub": "// moteur de constance",
      "fitness.desc": "La surcharge progressive n'est qu'un débogage itératif appliqué au corps : fixer un objectif, mesurer, ajuster, recommencer. La salle de sport, c'est là que ma discipline se compile chaque jour.",
      "fit.week": "séances / semaine",
      "fit.years": "années de constance",
      "fit.showup": "état d'esprit d'assiduité",

      "contact.title": "Discutons",
      "contact.sub": "Recruter un technicien qui répond vraiment ? Je réponds vite.",
      "contact.lead": "Que ce soit pour un poste, un contrat, ou simplement une question sur un élément de ce portfolio — ma boîte de réception est ouverte.",
      "social.cv": "CV / Résumé",
      "form.name": "Nom",
      "form.email": "E-mail",
      "form.message": "Message",
      "ph.name": "Votre nom",
      "ph.email": "vous@entreprise.com",
      "ph.message": "Parlez-moi du poste ou du projet…",
      "btn.send": "Envoyer le message",
      "btn.sending": "Envoi…",
      "footer.text": "Rim Ghannam — fait main, comme tout ce que je répare.",

      "roles": ["Matériel et diagnostics", "Déploiement de systèmes", "Configuration réseau", "Support utilisateur", "Résolution de problèmes"],
    },
  };

  let currentLang = "en";
  const t = (key) => (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;

  const langToggle = document.getElementById("langToggle");

  const applyLang = (lang) => {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    if (langToggle) {
      langToggle.setAttribute("data-lang", lang);
      langToggle.setAttribute("aria-checked", lang === "fr" ? "true" : "false");
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = I18N[lang][el.dataset.i18n];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const val = I18N[lang][el.dataset.i18nPh];
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.dispatchEvent(new CustomEvent("langchanged"));
  };

  if (langToggle) {
    langToggle.addEventListener("click", () => applyLang(currentLang === "en" ? "fr" : "en"));
  }

  /* ---------- navbar ---------- */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* active link highlighting */
  const sections = [...document.querySelectorAll("section[id]")];
  const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]`);
  const sectionSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.querySelectorAll(".nav__link").forEach((l) => l.classList.remove("is-active"));
        const link = linkFor(entry.target.id);
        if (link) link.classList.add("is-active");
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => sectionSpy.observe(s));

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          entry.target.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
          entry.target.classList.add("is-visible");
          revealer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealer.observe(el));
  }

  /* ---------- typed roles (language-aware) ---------- */
  const typedEl = document.getElementById("typed");
  if (typedEl) {
    if (prefersReducedMotion) {
      typedEl.textContent = t("roles")[0];
      document.addEventListener("langchanged", () => { typedEl.textContent = t("roles")[0]; });
    } else {
      let roleIdx = 0, charIdx = 0, deleting = false;
      const tick = () => {
        const list = t("roles");
        const word = list[roleIdx % list.length];
        charIdx += deleting ? -1 : 1;
        typedEl.textContent = word.slice(0, Math.max(0, charIdx));
        let delay = deleting ? 38 : 72;
        if (!deleting && charIdx >= word.length) { deleting = true; delay = 1800; }
        else if (deleting && charIdx <= 0) { deleting = false; roleIdx = (roleIdx + 1) % list.length; delay = 350; }
        setTimeout(tick, delay);
      };
      tick();
    }
  }

  /* ---------- animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    if (prefersReducedMotion) { el.textContent = target + suffix; return; }
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const counterSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterSpy.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => counterSpy.observe(c));

  /* ---------- skill bars ---------- */
  const bars = document.querySelectorAll(".skill-bar__fill");
  const barSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.width = entry.target.dataset.level + "%";
        barSpy.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((b) => barSpy.observe(b));

  /* ---------- guitar music player ----------
     Add recordings to assets/audio/ and list them here.
     Tracks whose files are missing show as "coming soon" but the
     UI stays fully functional. */
  const tracks = [
    { title: "Nothing Else Matters — Metallica (cover)", file: "assets/audio/nothing-else-matters.mp3" },
    { title: "Tears in Heaven — Eric Clapton (cover)", file: "assets/audio/tears-in-heaven.mp3" },
    { title: "Original improvisation in E minor", file: "assets/audio/improv-e-minor.mp3" },
  ];

  const player = document.getElementById("player");
  if (player) {
    const audio = new Audio();
    const listEl = document.getElementById("playerList");
    const trackEl = document.getElementById("playerTrack");
    const curEl = document.getElementById("playerCur");
    const durEl = document.getElementById("playerDur");
    const seekEl = document.getElementById("playerSeek");
    const btnPlay = document.getElementById("btnPlay");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    const iconPlay = document.getElementById("iconPlay");
    const iconPause = document.getElementById("iconPause");
    const hintEl = document.getElementById("playerHint");

    let current = -1;
    let unavailable = new Set();

    const fmt = (s) => {
      if (!isFinite(s)) return "0:00";
      const m = Math.floor(s / 60);
      return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
    };

    const render = () => {
      listEl.innerHTML = "";
      tracks.forEach((tr, i) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "player__item" + (i === current ? " is-active" : "");
        const status = unavailable.has(i) ? t("player.soon") : t("player.rec");
        btn.innerHTML =
          `<span class="player__item-num">${String(i + 1).padStart(2, "0")}</span>` +
          `<span>${tr.title}</span>` +
          `<span class="mono">${status}</span>`;
        btn.addEventListener("click", () => select(i, true));
        li.appendChild(btn);
        listEl.appendChild(li);
      });
    };

    const setPlayingUI = (playing) => {
      player.classList.toggle("is-playing", playing);
      iconPlay.style.display = playing ? "none" : "";
      iconPause.style.display = playing ? "" : "none";
    };

    const markUnavailable = (i) => {
      unavailable.add(i);
      trackEl.textContent = tracks[i].title + t("player.comingsoon");
      setPlayingUI(false);
      render();
    };

    const select = (i, autoplay) => {
      current = i;
      trackEl.textContent = tracks[i].title;
      audio.src = tracks[i].file;
      render();
      if (autoplay) {
        audio.play().catch(() => markUnavailable(i));
      }
    };

    btnPlay.addEventListener("click", () => {
      if (current === -1) { select(0, true); return; }
      if (audio.paused) {
        audio.play().catch(() => markUnavailable(current));
      } else {
        audio.pause();
      }
    });
    btnPrev.addEventListener("click", () => select((current - 1 + tracks.length) % tracks.length, true));
    btnNext.addEventListener("click", () => select((current + 1) % tracks.length, true));

    audio.addEventListener("play", () => setPlayingUI(true));
    audio.addEventListener("pause", () => setPlayingUI(false));
    audio.addEventListener("ended", () => select((current + 1) % tracks.length, true));
    audio.addEventListener("loadedmetadata", () => {
      durEl.textContent = fmt(audio.duration);
      if (hintEl) hintEl.style.display = "none";
    });
    audio.addEventListener("timeupdate", () => {
      curEl.textContent = fmt(audio.currentTime);
      const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
      seekEl.value = pct;
      seekEl.style.setProperty("--seek", pct + "%");
    });
    audio.addEventListener("error", () => { if (current >= 0) markUnavailable(current); });

    seekEl.addEventListener("input", () => {
      if (audio.duration) audio.currentTime = (seekEl.value / 100) * audio.duration;
      seekEl.style.setProperty("--seek", seekEl.value + "%");
    });

    // re-render statuses and the idle track label on language change
    document.addEventListener("langchanged", () => {
      render();
      if (current === -1) trackEl.textContent = t("player.select");
    });

    render();
  }

  /* ---------- contact form ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", () => {
      const btn = document.getElementById("sendBtn");
      const label = document.getElementById("sendBtnText");
      btn.disabled = true;
      if (label) label.textContent = t("btn.sending");
    });
  }

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- initial language ---------- */
  let initial = "en";
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") initial = saved;
    else if ((navigator.language || "").toLowerCase().startsWith("fr")) initial = "fr";
  } catch (e) {}
  applyLang(initial);
})();
