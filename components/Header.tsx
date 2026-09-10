"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Tricolor, TricolorFlag } from "@/components/Tricolor";

const links = [
  { href: "#the-deli", label: "The deli" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-espresso/92 text-cream shadow-[0_1px_0_rgba(198,166,108,0.25)] backdrop-blur-md"
          : "bg-transparent text-cream"
      }`}
    >
      <Tricolor className="h-[3px] w-full" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <TricolorFlag className="hidden sm:inline-flex" />
          <span className="font-display text-2xl tracking-[0.04em] md:text-[1.65rem]">
            H.T. Harris
          </span>
          <span className="hidden text-[0.62rem] uppercase tracking-[0.2em] text-brass-bright md:inline">
            {site.est.italian}
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] font-medium uppercase tracking-[0.22em] text-cream/80 transition hover:text-brass-bright"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={site.tel}
          className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brass-bright transition hover:text-cream"
        >
          {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
