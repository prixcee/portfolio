import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-28 md:py-40">
      <SectionHeading label="About" title="I like understanding how things work, then building better versions." />
      <Reveal delay={0.1}>
        <div className="mt-12 max-w-2xl space-y-5 text-lg text-[var(--muted)]">
          <p>
            I&apos;m a B.Tech Computer Science student at Jaipur National University, focused on
            software development and the fundamentals behind it: data structures, databases and
            operating systems.
          </p>
          <p>
            I&apos;ve taken part in CTF competitions and hackathons, including Smart India Hackathon,
            because I learn fastest by solving real problems under pressure.
          </p>
          <p>[EDIT: add one sentence in your own words about what you want to build next.]</p>
        </div>
      </Reveal>
    </section>
  );
}