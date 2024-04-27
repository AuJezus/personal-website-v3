import Project from "@/components/home/project";
import { BiLogoGithub } from "react-icons/bi";

function ProjectSection() {
  return (
    <section id="projects" className="mx-auto mb-44 max-w-[1200px]">
      <div className="text-muted-foreground mb-10 flex items-baseline gap-4">
        <span>
          <span className="text-primary">~</span> W:\AuJezus{">"}
        </span>
        <h2 className="text-primary text-lg">
          projects<span className="animate-blink">_</span>
        </h2>
      </div>
      <h3 className="mb-16 text-center text-5xl font-semibold capitalize">
        Discover my work
      </h3>

      <div className="flex flex-col items-center gap-16 ">
        <Project />
        <div className="bg-secondary h-px w-96"></div>
        <Project left />
        <div className="bg-secondary h-px w-96"></div>
        <Project />
        <div className="bg-secondary h-px w-96"></div>
        <Project left />
        <div className="bg-secondary h-px w-96"></div>
        <Project />
        <div className="bg-secondary h-px w-96"></div>
        <Project left />
        <div className="bg-secondary h-px w-96"></div>
        <a
          href="https://github.com/AuJezus?tab=repositories"
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
