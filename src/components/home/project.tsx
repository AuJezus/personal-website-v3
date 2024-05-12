"use client";

import { type Project } from "@/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

function Project({ left, project }: { left?: boolean; project: Project }) {
  return (
    <div
      className={cn(
        "group relative z-0 flex max-w-xl flex-col-reverse items-center gap-8 bg-border/20 transition-all duration-500 hover:bg-primary/15 lg:max-w-4xl lg:flex-row lg:gap-12 lg:self-start",
        left && "lg:flex-row-reverse lg:self-end",
      )}
    >
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-0% to-background to-70%"></div>

      <Link
        className="w-full lg:w-auto"
        href={`/project/${project.slug}`}
        scroll={false}
      >
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          perspective={1000}
        >
          <Image
            className="w-full rounded-lg border-2 object-cover p-2 transition-colors hover:border-primary lg:max-h-[300px] lg:w-screen lg:max-w-[500px]"
            src={project.image}
            alt="Image"
          />
        </Tilt>
      </Link>

      <div>
        <p className="mb-4 text-2xl font-semibold">{project.title}</p>
        <p className="text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default Project;
