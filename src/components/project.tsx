"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

function Project(props: { left?: boolean }) {
  return (
    <div
      className={`${props.left ? "flex-row-reverse self-end" : "self-start"} hover:bg-primary/15 bg-border/20 group relative z-0 flex max-w-4xl items-center gap-12 transition-all duration-500`}
    >
      <div className="to-background absolute -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-0% to-70%"></div>

      <Link href="lol">
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          perspective={1000}
        >
          <Image
            className="hover:border-primary min-w-0 rounded-lg border-2 p-2 transition-colors"
            src={"/aujezus-play.webp"}
            alt="Image"
            width={1919}
            height={920}
          />
        </Tilt>
      </Link>

      <div className="w-full">
        <p className="mb-4 text-2xl">aujezus-play</p>
        <p className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-500">
          A simple music listening app, that fetches songs from your favourite
          youtube playlist.
        </p>
      </div>
    </div>
  );
}

export default Project;
