"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function NavDock() {
  const items = useMemo(
    () => [
      { id: "home", label: "Home", href: "#home", icon: HomeIcon },
      { id: "about", label: "About", href: "#about", icon: BookmarkIcon },
      { id: "projects", label: "Projects", href: "#projects", icon: PlusIcon },
      { id: "contact", label: "Contact", href: "#contact", icon: UserIcon },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const rafRef = useRef(null);
  const canHoverRef = useRef(false);

  // No mobile não tem hover: ignora hoverIndex automaticamente
  const indicatorIndex = (canHoverRef.current ? hoverIndex : null) ?? activeIndex;

  useEffect(() => {
    // Detecta se o device suporta hover de verdade
    canHoverRef.current =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  useEffect(() => {
    const idsToWatch = ["home", "about", "projects", "contact"];
    const sections = idsToWatch
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    // Se não achou as seções, não tem como acompanhar
    if (!sections.length) return;

    const indexById = (id) => items.findIndex((it) => it.id === id);

    // ===== 1) IntersectionObserver (principal) =====
    const io = new IntersectionObserver(
      (entries) => {
        // pega o mais "central" / visível
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        const id = visible?.target?.id;
        if (!id) return;

        const idx = indexById(id);
        if (idx >= 0) setActiveIndex(idx);
      },
      {
        root: null,
        // isso é o que resolve MUITO no mobile (ativa quando a seção cruza o “meio”)
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.1, 0.2, 0.35, 0.5],
      }
    );

    sections.forEach((s) => io.observe(s));

    // ===== 2) Fallback por scroll (mobile-friendly) =====
    const computeByScroll = () => {
      rafRef.current = null;

      const midY = window.innerHeight * 0.45; // ponto “meio” da tela
      let bestIdx = 0;
      let bestDist = Infinity;

      for (const sec of sections) {
        const r = sec.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - midY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = indexById(sec.id);
        }
      }

      if (bestIdx >= 0) setActiveIndex(bestIdx);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(computeByScroll);
    };

    // dispara 1 vez ao carregar (mobile costuma precisar)
    computeByScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [items]);

  const onNavClick = (index, href) => (e) => {
    e.preventDefault();
    setActiveIndex(index);

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <div className="navdockShell">
      <div className="navdockBrand">
        <span className="navdockBrand__w">W</span>agner Paulo
      </div>

      <nav className="navdock navdock--4">
        <div
          className="navdock__indicator"
          style={{ transform: `translateX(${indicatorIndex * 64}px)` }}
          aria-hidden="true"
        >
          <span className="navdock__indicatorBar" />
          <span className="navdock__spotlight" />
        </div>

        {items.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === activeIndex;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={onNavClick(idx, item.href)}
              onMouseEnter={
                canHoverRef.current ? () => setHoverIndex(idx) : undefined
              }
              onMouseLeave={
                canHoverRef.current ? () => setHoverIndex(null) : undefined
              }
              className={`navdock__btn ${isActive ? "is-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="navdock__icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="navdock__sr">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

/* ===== ÍCONES ===== */

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4h10v17l-5-3-5 3V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.65"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 21a8 8 0 1 0-16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
