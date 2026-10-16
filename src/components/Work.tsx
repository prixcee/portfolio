import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Ring3D, { type RingItem } from "./Ring3D";

// Replace the [BRACKETED] text with your real details.
const items: RingItem[] = [
  {
    title: "LASA Guard",
    meta: "Project · 2026",
    description:
      "Checks whether two medicine names look or sound alike and explains the risk, to prevent dispensing errors.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    badge: "Upcoming",
  },
  {
    title: "Personal Portfolio",
    meta: "Project · 2026",
    description: "This site: a 3D project ring, built with Next.js and Tailwind.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "[SMART INDIA HACKATHON]",
    meta: "Hackathon · [2026]",
    description: "[I was only partcipating in the hackathon, not the winner]",
  },
  {
    title: "[CAPTURE THE FLAG]",
    meta: "CTF · [2026]",
    description: "[13th place out of 100+ teams, solved 24/45 challenges]",
  },
  {
    title: "[PROJECT NAME]",
    meta: "Project · [YEAR]",
    description: "[One line on what it does and why you built it]",
    tags: ["[TECH]", "[TECH]"],
  },
  {
    title: "[PROJECT NAME]",
    meta: "Project · [YEAR]",
    description: "[One line on what it does and why you built it]",
    tags: ["[TECH]", "[TECH]"],
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-28 md:py-40">
      <SectionHeading label="Selected Work" title="Things I've built, explored, and shipped." />
      <Reveal>
        <div className="mt-16 border-t border-[var(--line)] pt-10">
          <Ring3D items={items} />
        </div>
      </Reveal>
    </section>
  );
}