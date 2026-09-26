import { Projects_List } from "../config/projects";
import ProjectsClient from "./ProjectsClient";
import Section from "./Section";

export const Project = () => {
  return (
    <Section id="projects" index="03" label="Projects">
      <ProjectsClient projects={Projects_List} />
    </Section>
  );
};
