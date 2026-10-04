import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-28 md:py-40">
      <SectionHeading label="Selected Work" title="Things I've built, explored, and shipped." />
      <Reveal>
        <div className="mt-16 grid items-center gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-[var(--accent)]">01</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">[YOUR PROJECT NAME]</h3>
            <p className="mt-4 text-[var(--muted)]">[PROJECT DESCRIPTION: one line on what it does and why you built it]</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">[TECH STACK] · 2026</p>
            <p className="mt-8 text-sm text-[var(--muted)]">Case study coming soon →</p>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-[var(--line)] bg-white/[0.02] font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            Project preview
          </div>
        </div>
      </Reveal>
    </section>
  );
}