import Project from "@/components/home/project";
import { projects } from "@/content";
import { links } from "@/lib/site";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";

function ProjectSection() {
  return (
    <section id="projects" className="mx-auto mb-44 max-w-[1200px]">
      <div className="mb-10 flex items-baseline gap-4 text-muted-foreground">
        <span>
          <span className="text-primary">~</span> W:\AuJezus{">"}
        </span>
        <h2 className="text-lg text-primary">
          projects<span className="animate-blink">_</span>
        </h2>
      </div>
      <h3 className="mb-16 text-center text-5xl font-semibold capitalize">
        Discover my work
      </h3>

      <div className="flex flex-col items-center gap-16 ">
        {projects.map((project, i) => (
          <React.Fragment key={project.slug}>
            <Project left={i % 2 !== 0} project={project} />
            <div className="h-px w-96 bg-secondary"></div>
          </React.Fragment>
        ))}

        <a
          href={links.githubRepositories}
          target="_blank"
          className="flex items-center gap-2 hover:underline"
        >
          View all projects <BiLogoGithub />
        </a>
      </div>
    </section>
  );
}

export default ProjectSection;
