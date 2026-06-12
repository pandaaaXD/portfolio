/* ============================================================
   Rim Ghannam — Portfolio interactions
   ============================================================ */
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  /* ---------- typed roles ---------- */
  const roles = [
    "Hardware & Diagnostics",
    "System Deployment",
    "Network Setup",
    "User Support",
    "Problem Solver",
  ];
  const typedEl = document.getElementById("typed");
  if (typedEl) {
    if (prefersReducedMotion) {
      typedEl.textContent = roles[0];
    } else {
      let roleIdx = 0, charIdx = 0, deleting = false;
      const tick = () => {
        const word = roles[roleIdx];
        charIdx += deleting ? -1 : 1;
        typedEl.textContent = word.slice(0, charIdx);
        let delay = deleting ? 38 : 72;
        if (!deleting && charIdx === word.length) { deleting = true; delay = 1800; }
        else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 350; }
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
      tracks.forEach((t, i) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "player__item" + (i === current ? " is-active" : "");
        const status = unavailable.has(i) ? "soon" : "rec";
        btn.innerHTML =
          `<span class="player__item-num">${String(i + 1).padStart(2, "0")}</span>` +
          `<span>${t.title}</span>` +
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

    const select = (i, autoplay) => {
      current = i;
      trackEl.textContent = tracks[i].title;
      audio.src = tracks[i].file;
      render();
      if (autoplay) {
        audio.play().catch(() => {
          unavailable.add(i);
          trackEl.textContent = tracks[i].title + " — recording coming soon";
          setPlayingUI(false);
          render();
        });
      }
    };

    btnPlay.addEventListener("click", () => {
      if (current === -1) { select(0, true); return; }
      if (audio.paused) {
        audio.play().catch(() => {
          unavailable.add(current);
          trackEl.textContent = tracks[current].title + " — recording coming soon";
          render();
        });
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
    audio.addEventListener("error", () => {
      if (current >= 0) {
        unavailable.add(current);
        trackEl.textContent = tracks[current].title + " — recording coming soon";
        setPlayingUI(false);
        render();
      }
    });

    seekEl.addEventListener("input", () => {
      if (audio.duration) {
        audio.currentTime = (seekEl.value / 100) * audio.duration;
      }
      seekEl.style.setProperty("--seek", seekEl.value + "%");
    });

    render();
  }

  /* ---------- contact form ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", () => {
      const btn = document.getElementById("sendBtn");
      btn.disabled = true;
      btn.textContent = "Sending…";
    });
  }

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
