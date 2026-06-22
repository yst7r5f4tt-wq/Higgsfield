/* Ħmira — interactions & premium micro-animations */
(function () {
  "use strict";

  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const drawer = document.getElementById("drawer");
  const fab = document.getElementById("fab");
  const hero = document.getElementById("hero");
  const heroImg = document.querySelector(".hero__img");
  const body = document.body;

  /* ---- Sticky nav state + FAB visibility ---- */
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("nav--scrolled", y > 40);
    if (fab) fab.classList.toggle("show", y > window.innerHeight * 0.6);

    // subtle hero parallax
    if (heroImg && y < window.innerHeight) {
      heroImg.style.transform = "translateY(" + y * 0.18 + "px)";
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  function closeMenu() {
    body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
  }
  navToggle.addEventListener("click", function () {
    const open = body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
  });
  drawer.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && body.classList.contains("menu-open")) closeMenu();
  });

  /* ---- Scroll reveal ---- */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Current year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Graceful image fallback (keeps layout premium if a photo is missing) ---- */
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () {
      if (img.dataset.failed) return;
      img.dataset.failed = "1";
      const wrap = img.parentElement;
      if (wrap) {
        wrap.style.background =
          "linear-gradient(135deg, var(--brown-700), var(--brown-900))";
      }
      img.style.opacity = "0";
    });
  });
})();
