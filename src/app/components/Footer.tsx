import { content } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl justify-between border-t border-[var(--line)] px-6 py-8 font-mono text-xs text-[var(--muted)]">
      <span>© 2026 {content.name}</span>
      <span>Built with curiosity + code.</span>
    </footer>
  );
}