import { EXP_LIST } from "../config/experience";
import ExperienceClient from "./ExperienceClient";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="02" label="Work">
      <ExperienceClient experiences={EXP_LIST} />
    </Section>
  );
}
