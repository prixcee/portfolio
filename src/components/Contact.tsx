import Reveal from "./Reveal";
import { content } from "@/data/content";

export default function Contact() {
  const links = [
    { label: "Email me →", href: `mailto:${content.email}` },
    { label: "GitHub →", href: content.github },
    { label: "LinkedIn →", href: content.linkedin },
  ];
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-28 md:py-40">
      <Reveal>
        <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-none tracking-tighter">
          Have something
          <br />
          interesting <span className="text-[var(--accent)]">in mind?</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined}
               rel="noreferrer"
               className="rounded-full border border-[var(--line)] px-6 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]">
              {l.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}