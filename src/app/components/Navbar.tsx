"use client";
import { useEffect, useState } from "react";
import { content } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--line)] bg-[#0b0b0c]/70 backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {content.name}
        </a>
        <ul className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          {content.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-[var(--accent)]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Open to opportunities
        </span>
      </nav>
    </header>
  );
}