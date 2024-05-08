"use client";

import { type Project } from "@/content";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

function Project({ left, project }: { left?: boolean; project: Project }) {
  return (
    <div
      className={`${left ? "flex-row-reverse self-end" : "self-start"} group relative z-0 flex max-w-4xl items-center gap-12 bg-border/20 transition-all duration-500 hover:bg-primary/15`}
    >
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-0% to-background to-70%"></div>

      <Link href={`/project/${project.slug}`} scroll={false}>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          perspective={1000}
        >
          <Image
            className="max-h-[300px] max-w-[500px] rounded-lg border-2 object-cover p-2 transition-colors hover:border-primary"
            src={project.image}
            alt="Image"
          />
        </Tilt>
      </Link>

      <div className="w-full">
        <p className="mb-4 text-2xl font-semibold">{project.title}</p>
        <p className="text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default Project;
