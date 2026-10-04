import Reveal from "./Reveal";

export default function SectionHeading({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{label}</p>
      <h2 className="text-4xl font-semibold tracking-tighter md:text-6xl">{title}</h2>
      {sub && <p className="mt-4 max-w-xl text-[var(--muted)]">{sub}</p>}
    </Reveal>
  );
}