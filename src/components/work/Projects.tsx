import TitleText from "../title-text";
import { ProjectsBentoGrid } from "./ProjectsBentoGrid";

function Projects() {
  return (
    <div id="projects">
      <TitleText
        title="My project"
        description={`A collection of my projects`}
      />
      <ProjectsBentoGrid />
    </div>
  );
}

export default Projects;
