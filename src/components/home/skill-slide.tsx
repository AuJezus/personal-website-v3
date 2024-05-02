"use client";

import { useRef, useState } from "react";
import type { TouchEvent } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { SkillCard, type Skill } from "./skill-section";
import uniqid from "uniqid";

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

export default SkillSlide;
