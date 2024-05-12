import Project from "@/components/home/project";
import { projects } from "@/content";
import { links } from "@/lib/site";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import TerminalHeading from "../terminal-heading";

function ProjectSection() {
  return (
    <section id="projects" className="mx-auto mb-44 max-w-[1200px] px-4 xl:p-0">
      <TerminalHeading>projects</TerminalHeading>
      <h3 className="mb-16 text-center text-3xl font-semibold capitalize sm:text-5xl">
        Discover my work
      </h3>

      <div className="flex flex-col items-center gap-10 sm:gap-16">
        {projects.map((project, i) => (
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
    </section>
  );
}

export default ProjectSection;
