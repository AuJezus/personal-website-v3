import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { BiServer, BiWrench } from "react-icons/bi";
import {
  SiCss3,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import SkillSlide from "./skill-slide";
import TerminalHeading from "../terminal-heading";
import Section from "./section";

export interface Skill {
  icon: React.ReactNode;
  name: string;
  description: string;
  stats: string[];
  skills: React.ReactNode;
}

function SkillSection() {
  return (
    <Section id="skills" className="max-w-full p-0">
      <TerminalHeading className="mx-auto max-w-[1200px] px-4 xl:p-0">
        skills
      </TerminalHeading>

      <div className="w-full border-y">
        <div className="mx-auto max-w-[1200px] py-8">
          <h3 className="mb-8 text-center text-3xl font-semibold sm:mb-12 sm:text-5xl">
            My wizard wands
          </h3>

          <p className="mb-2 text-center sm:hidden">
            {"<"} Swipe for more {">"}
          </p>

          <SkillSlide
            start={1}
            skills={[
              {
                icon: <BiServer />,
                name: "Back End Wand",
                description: `Unleash server-side sorcery with this mighty wand. Infused with Node.js, Express, and Next.js, it offers scalable solutions with Postgres, Supabase, and Firebase, all backed by TypeScript for reliability.`,
                stats: ["+92 power", "+94 Stability", "+87 Versatility"],
                skills: (
                  <>
                    <Skill className="hover:bg-green-700">
                      <SiNodedotjs /> Node.js
                    </Skill>
                    <Skill className="hover:bg-neutral-500">
                      <SiNextdotjs /> Next.js
                    </Skill>
                    <Skill className="hover:bg-blue-700">
                      <SiPostgresql /> Postgres
                    </Skill>
                    <Skill className="hover:bg-green-700">
                      <SiSupabase /> Supabase
                    </Skill>
                    <Skill className="hover:bg-orange-600">
                      <SiFirebase /> Firebase
                    </Skill>
                    <Skill className="hover:bg-red-700">
                      <SiExpress /> Express
                    </Skill>
                    <Skill className="hover:bg-blue-700">
                      <SiTypescript /> Typescript
                    </Skill>
                    <Skill className="hover:bg-emerald-700">
                      <SiDrizzle /> Drizzle
                    </Skill>
                  </>
                ),
              },
              {
                icon: <CgWebsite />,
                name: "Front End Wand",
                description: `Craft captivating UIs effortlessly with this wand. Powered by TypeScript, HTML, and CSS, it integrates seamlessly with React and Tailwind for stunning visuals and interactivity`,
                stats: ["+95 power", "+87 interactivity", "+93 agility"],
                skills: (
                  <>
                    <Skill className="hover:bg-blue-700">
                      <SiTypescript /> Typescript
                    </Skill>
                    <Skill className="hover:bg-orange-600">
                      <SiHtml5 /> HTML
                    </Skill>
                    <Skill className="hover:bg-cyan-700">
                      <SiCss3 /> CSS
                    </Skill>
                    <Skill className="hover:bg-sky-700">
                      <SiReact /> React
                    </Skill>
                    <Skill className="hover:bg-red-700">
                      <SiReactquery /> React Query
                    </Skill>
                    <Skill className="hover:bg-neutral-700">
                      <SiShadcnui /> Shadcn/ui
                    </Skill>
                    <Skill className="hover:bg-cyan-700">
                      <SiTailwindcss /> Tailwind
                    </Skill>
                  </>
                ),
              },
              {
                icon: <BiWrench />,
                name: "Tools Wand",
                description: `Equip yourself with this versatile wand for your coding journey. From VS Code to Figma, it provides essential tools, while Vercel, Docker, and Vite ensure speed and efficiency in your projects.`,
                stats: ["+97 power", "+90 efficiency", "+91 deployment"],
                skills: (
                  <>
                    <Skill className="hover:bg-sky-700">
                      <SiVisualstudiocode /> VS Code
                    </Skill>
                    <Skill className="hover:bg-neutral-700">
                      <SiGithub /> GitHub
                    </Skill>
                    <Skill className="hover:bg-red-700">
                      <SiFigma /> Figma
                    </Skill>
                    <Skill className="hover:bg-neutral-500">
                      <SiVercel /> Vercel
                    </Skill>
                    <Skill className="hover:bg-blue-700">
                      <SiDocker /> Docker
                    </Skill>
                    <Skill className="hover:bg-amber-700">
                      <SiVite /> Vite
                    </Skill>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

function Skill({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-1.5 transition-all",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default SkillSection;
