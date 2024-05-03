"use client";

import { useRef, useState } from "react";
import type { TouchEvent } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { type Skill } from "./skill-section";
import { cn } from "@/lib/utils";

function SkillSlide({ skills, start = 0 }: { skills: Skill[]; start: number }) {
  const [current, setCurrent] = useState(start + 2);

  const [skillsArr] = useState(() => {
    return [
      skills.at(-2),
      skills.at(-1),
      ...skills,
      skills.at(0),
      skills.at(1),
    ] as Skill[];
  });

  const [isChanging, setIsChanging] = useState(false);
  const touchStart = useRef<number>(0);

  function moveRight() {
    setIsChanging(false);
    setCurrent((c) => c + 1);
  }

  function moveLeft() {
    setIsChanging(false);
    setCurrent((c) => c - 1);
  }

  function checkIfInBounds() {
    // If at first element clone
    if (current >= skillsArr.length - 2) {
      setIsChanging(true);
      setCurrent(2);
    }

    // If at last element clone
    if (current < 2) {
      setIsChanging(true);
      setCurrent(skillsArr.length - 3);
    }
  }

  function getSwipeDirection(e: TouchEvent<HTMLDivElement>) {
    if (!e.changedTouches[0]) return;

    const touchEnd = e.changedTouches[0].screenX;
    const touchDistance = touchEnd - touchStart.current;

    if (Math.abs(touchDistance) < 20) return;

    if (touchDistance > 0) moveLeft();

    if (touchDistance < 0) moveRight();
  }

  return (
    <div className="relative">
      <BiLeftArrowAlt
        onClick={moveLeft}
        className="absolute -left-7 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-4xl"
      />
      <BiRightArrowAlt
        onClick={moveRight}
        className="absolute -right-7 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-4xl"
      />

      <div className="flex justify-center overflow-x-clip">
        <div
          className={`${isChanging ? "" : "transition-transform duration-300"} flex w-1/3`}
          onTransitionEnd={checkIfInBounds}
          onTouchStart={(e) =>
            (touchStart.current = e.changedTouches[0]?.screenX ?? 0)
          }
          onTouchEnd={getSwipeDirection}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {skillsArr.map((skill, i) => (
            <div className="flex-shrink-0 flex-grow-0 basis-full" key={i}>
              <SkillCard
                isCurrent={
                  i === current ||
                  (current >= skillsArr.length - 2 && i === 2) ||
                  (current < 2 && i === skillsArr.length - 3)
                }
                skill={skill}
                onClick={
                  current !== i
                    ? current > i
                      ? moveLeft
                      : moveRight
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  skill,
  isCurrent,
  onClick,
}: {
  skill: Skill;
  isCurrent: boolean;
  onClick?: () => void;
}) {
  return (
    <div className={onClick && "cursor-pointer"} onClick={onClick}>
      <div
        className={cn(
          "flex max-w-md scale-100 flex-col divide-y-2 rounded-lg border-4 border-primary/30 bg-secondary/20 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_15px] hover:shadow-violet-500",
          !isCurrent &&
            "pointer-events-none scale-[0.85] cursor-pointer border-secondary opacity-30 hover:border-secondary hover:shadow-none",
        )}
      >
        <div className="flex items-center">
          <div className="border-r-2 p-4 text-5xl">{skill.icon}</div>
          <p className="mx-auto text-3xl font-semibold">{skill.name}</p>
        </div>

        <div className="p-4">
          <p className="mb-4 text-center text-sm text-primary">
            {"// description"}
          </p>
          <p className="mb-6 text-center text-sm">{skill.description}</p>
          <div className="flex items-center justify-around text-sm text-muted-foreground">
            {skill.stats.map((stat) => (
              <span
                key={stat}
                className="transition-colors [word-spacing:-3px] hover:text-foreground"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <p className="mb-4 text-center text-sm text-primary">
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

export default SkillSlide;
