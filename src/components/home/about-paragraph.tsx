"use client";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { atom, useAtom } from "jotai";
import { cn } from "@/lib/utils";

// Need global state so the glow clone of this element also has the same state
const showAtom = atom(false);

function AboutParagraph({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [showMore, setShowMore] = useAtom(showAtom);

  return (
    <div
      className={cn(
        "glow:text-glow/5 flex flex-col gap-4 opacity-80",
        className,
      )}
    >
      {!showMore && (
        <>
          <p>
            I&apos;m Augustas, a full-stack developer specializing in creating
            seamless websites with captivating designs. My journey into coding
            began with web flash games, sparking a passion for development.
            Inspired by innovation and fueled by self-guided learning, I bring
            creativity and expertise to every project.
          </p>
          <p>
            Driven by a dedication to excellence, I create websites that exceed
            expectations. Let&apos;s collaborate to bring your vision to life.
          </p>
        </>
      )}
      {showMore && (
        <>
          <p>
            I&apos;m Augustas, a passionate developer with a knack for crafting
            captivating online experiences. Specializing in full-stack websites,
            I merge seamless backend functionality with captivating UI designs
            to deliver optimized solutions that captivate audiences.
          </p>
          <p>
            My journey into coding began with the enchanting world of web flash
            games, that my grandmother put on. Entranced by the boundless
            possibilities of this virtual realm, I embarked on a quest to become
            a developer. Countless hours of self-guided learning fueled my
            ambition, propelling me toward my goal.
          </p>
          <p>
            While coding occupies much of my time, I also find joy in working on
            older cars, indulging in anime, and savoring a good cup of coffee.
            These interests not only provide balance but also inspire creativity
            in my work.
          </p>
          <p>
            Driven by a passion for innovation and a dedication to excellence, I
            strive to create websites that not only meet client needs but exceed
            expectations. Let&apos;s collaborate to bring your vision to life.
          </p>
        </>
      )}

      <button
        className="text-muted-foreground flex w-fit items-center gap-1 text-sm"
        onClick={() => setShowMore((show) => !show)}
      >
        {!showMore && (
          <>
            <span>Show More</span>
            <BiChevronDown />
          </>
        )}
        {showMore && (
          <>
            <span>Show Less</span>
            <BiChevronUp />
          </>
        )}
      </button>
    </div>
  );
}

export default AboutParagraph;
