import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
      <Reveal>
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          Computer Science Student · India · 2026
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-tighter">
          Building things
          <br />
          that deserve
          <br />
          <span className="text-[var(--accent)]">to exist.</span>
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-8 max-w-xl text-lg text-[var(--muted)]">
          Computer Science student focused on software engineering and building
          thoughtful digital products.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="rounded-full bg-[var(--fg)] px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5">
            View selected work →
          </a>
          <a href="#contact" className="rounded-full border border-[var(--line)] px-6 py-3 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
            Let&apos;s connect →
          </a>
        </div>
      </Reveal>
    </section>
  );
}