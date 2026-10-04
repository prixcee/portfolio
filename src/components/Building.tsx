import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const progress = 30; // EDIT: your real progress, 0 to 100
const learning = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];

export default function Building() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading label="Now" title="Currently building." />
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-[var(--line)] p-8">
            <h3 className="text-2xl font-semibold tracking-tight">[YOUR PROJECT NAME]</h3>
            <p className="mt-3 text-[var(--muted)]">[One-line description]</p>
            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full bg-[var(--accent)]" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              In progress · {progress}% · [TECH STACK]
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-[var(--line)] p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Currently learning</h3>
            <ul className="mt-5 space-y-2 text-lg">
              {learning.map((l) => (<li key={l}>{l}</li>))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}