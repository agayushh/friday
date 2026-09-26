import Section from "./Section";

const About = () => {
  return (
    <Section id="about" index="01" label="About">
      <div className="max-w-[40rem] space-y-5 text-[16px] leading-[1.75] text-foreground sm:text-[17px]">
        <p>
          Most of the work is quiet. I write software across the stack, look
          after the systems around it, and try to leave a codebase clearer than
          I found it. I care about architecture — the kind that still makes
          sense after the demo.
        </p>
        <p>
          I contribute to open source and keep a few projects of my own, mostly
          to find out how something is actually built. I&apos;ve organized
          events, led a technical club, and had a project acknowledged by the
          Chief Minister of Haryana. I&apos;m looking for a team where careful
          work is the point.
        </p>
      </div>
    </Section>
  );
};

export default About;
