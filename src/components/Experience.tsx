import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  { year: "2025", title: "B.Tech, Computer Science & Engineering", text: "Jaipur National University. Coursework in DSA, OOP, DBMS, OS and networks." },
  { year: "2025", title: "NPTEL: Communication Skills", text: "Certification from IIT Kharagpur." },
  { year: "[YEAR]", title: "Capture The Flag (CTF)", text: "Two certificates from New Soul Genious." },
  { year: "[YEAR]", title: "Hackathons", text: "Participated in several, including Smart India Hackathon." },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-28 md:py-40">
      <SectionHeading label="Experience" title="The path so far." />
      <div className="mt-16 border-t border-[var(--line)]">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.05}>
            <div className="grid gap-2 border-b border-[var(--line)] py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[160px_1fr]">
              <p className="font-mono text-sm text-[var(--accent)]">{it.year}</p>
              <div>
                <h3 className="text-xl font-medium tracking-tight">{it.title}</h3>
                <p className="mt-1 text-[var(--muted)]">{it.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}