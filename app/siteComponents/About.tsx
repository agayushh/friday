import Section from "./Section";

const Redacted = ({ children }: { children: React.ReactNode }) => (
  <span className="redact" tabIndex={0}>
    {children}
  </span>
);

const About = () => {
  return (
    <Section id="profile" index="01" title="Profile" meta="Partially redacted">
      <div className="space-y-4 px-4 py-5 text-[15px] leading-7 text-foreground/90 sm:px-6 sm:py-6">
        <p>
          Hi, I&apos;m Ayush — a developer who works a bit like an{" "}
          <Redacted>undercover operator</Redacted>. Most people just see me
          writing code; behind the scenes I quietly solve problems, build
          systems, and keep things running without drawing attention. Every
          project is a mission: understand the objective, plan the approach,
          execute with focus.
        </p>
        <p>
          I contribute to <Redacted>open source</Redacted>, maintain my own side
          projects, and like digging into the system architecture and design
          principles that make software robust at scale. Off the keyboard
          I&apos;ve organized events, led a technical club, and was acknowledged
          by the <Redacted>Chief Minister of Haryana</Redacted> for a technical
          project. Now looking for a team where I can contribute and grow.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Hover or tap redacted lines to declassify
        </p>
      </div>
    </Section>
  );
};

export default About;
