import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { BiServer } from "react-icons/bi";
import {
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
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
        "text-primary-foreground flex items-center gap-2 rounded-md px-3 py-1.5 transition-all",
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
    <div onClick={onClick}>
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
          <div className="text-muted-foreground flex justify-around text-sm">
            {skill.stats.map((stat) => (
              <span
                key={stat}
                className="hover:text-primary-foreground transition-colors"
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
    <section>
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
          <h3 className="mb-12 text-5xl font-semibold">My wizard wands</h3>

          <SkillSlide
            skills={[
              {
                icon: <BiServer />,
                name: "Back End Wand",
                description: `Unleash server-side sorcery with this mighty wand. Infused with
            Node.js, Express, and Next.js, it offers scalable solutions with
            Postgres, Supabase, and Firebase, all backed by TypeScript for
            reliability.`,
                stats: ["+92 power", "+87 interactivity", "+93 agility"],
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
                  </>
                ),
              },
              {
                icon: <BiServer />,
                name: "Back End Wand",
                description: `Unleash server-side sorcery with this mighty wand. Infused with
            Node.js, Express, and Next.js, it offers scalable solutions with
            Postgres, Supabase, and Firebase, all backed by TypeScript for
            reliability.`,
                stats: ["+92 power", "+87 interactivity", "+93 agility"],
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
                  </>
                ),
              },
              {
                icon: <BiServer />,
                name: "Back End Wand",
                description: `Unleash server-side sorcery with this mighty wand. Infused with
            Node.js, Express, and Next.js, it offers scalable solutions with
            Postgres, Supabase, and Firebase, all backed by TypeScript for
            reliability.`,
                stats: ["+92 power", "+87 interactivity", "+93 agility"],
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
