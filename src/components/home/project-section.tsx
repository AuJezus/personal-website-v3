import Project from "@/components/home/project";
import { projects } from "@/content";
import { links } from "@/lib/site";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import TerminalHeading from "../terminal-heading";
import Section from "./section";

function ProjectSection() {
  const sortedProjects = projects.sort((a, b) =>
    a.date > b.date ? -1 : a.date < b.date ? 1 : 0,
  );

  return (
    <Section id="projects">
      <TerminalHeading>projects</TerminalHeading>
      <h3 className="mb-8 text-center text-3xl font-semibold capitalize sm:mb-16 sm:text-5xl">
        Discover my work
      </h3>

      <div className="flex flex-col items-center gap-10 sm:gap-16">
        {sortedProjects.map((project, i) => (
          <React.Fragment key={project.slug}>
            <Project left={i % 2 !== 0} project={project} />
            <div className="h-px w-full max-w-96 bg-secondary"></div>
          </React.Fragment>
        ))}

        <a
          href={links.githubRepositories}
          target="_blank"
          className="flex items-center gap-2 text-sm hover:underline sm:text-base"
        >
          View all projects <BiLogoGithub />
        </a>
      </div>
    </Section>
  );
}

export default ProjectSection;
