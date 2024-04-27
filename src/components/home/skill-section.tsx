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

export interface Skill {
  icon: React.ReactNode;
  name: string;
  description: string;
  stats: string[];
  skills: React.ReactNode;
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

export function SkillCard({
  skill,
  isCurrent,
  onClick,
}: {
  skill: Skill;
  isCurrent: boolean;
  onClick?: () => void;
}) {
  return (
    <div id="skills" className={onClick && "cursor-pointer"} onClick={onClick}>
      <div
        className={cn(
          "bg-secondary/20 border-primary/30 hover:border-primary/60 flex max-w-md scale-100 flex-col divide-y-2 rounded-lg border-4 transition-all duration-300 hover:shadow-[0_0_15px] hover:shadow-violet-500",
          !isCurrent &&
            "hover:border-secondary border-secondary pointer-events-none scale-[0.85] cursor-pointer opacity-30 hover:shadow-none",
        )}
      >
        <div className="flex items-center">
          <div className="border-r-2 p-4 text-5xl">{skill.icon}</div>
          <p className="mx-auto text-3xl font-semibold">{skill.name}</p>
        </div>

        <div className="p-4">
          <p className="text-primary mb-4 text-center text-sm">
            {"// description"}
          </p>
          <p className="mb-6 text-center text-sm">{skill.description}</p>
          <div className="text-muted-foreground flex items-center justify-around text-sm">
            {skill.stats.map((stat) => (
              <span
                key={stat}
                className="hover:text-foreground transition-colors [word-spacing:-3px]"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <p className="text-primary mb-4 text-center text-sm">
            {"// magic spells"}
          </p>
          <div className="flex flex-wrap justify-around gap-4 text-lg font-semibold">
            {skill.skills}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillSection() {
  return (
    <section className="mb-44">
      <div className="text-muted-foreground mx-auto mb-10 flex max-w-[1200px] items-baseline gap-4">
        <span>
          <span className="text-primary">~</span> W:\AuJezus{">"}
        </span>
        <h2 className="text-primary text-lg">
          skills<span className="animate-blink">_</span>
        </h2>
      </div>

      <div className="w-full border-y">
        <div className="mx-auto max-w-[1200px] py-8">
          <h3 className="mb-12 text-center text-5xl font-semibold">
            My wizard wands
          </h3>

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
    </section>
  );
}

export default SkillSection;
