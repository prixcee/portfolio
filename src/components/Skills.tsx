import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  { title: "Engineering", items: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"] },
  { title: "Core & Data", items: ["Data Structures & Algorithms", "OOP", "DBMS", "MySQL", "SQL", "Operating Systems", "Computer Networks"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-28 md:py-40">
      <SectionHeading label="Skills" title="What I work with." />
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.1}>
            <div className="border-t border-[var(--line)] pt-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">{g.title}</h3>
              <ul className="mt-5 space-y-2 text-lg">
                {g.items.map((s) => (
                  <li key={s} className="text-[var(--fg)]/90">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}