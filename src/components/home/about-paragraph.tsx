"use client";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { atom, useAtom } from "jotai";
import { cn } from "@/lib/utils";

// Need global state so the glow clone of this element also has the same state
const showAtom = atom(false);

function AboutParagraph({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [showMore, setShowMore] = useAtom(showAtom);

  return (
    <div className={cn("flex flex-col gap-4 opacity-80 ", className)}>
      {!showMore && (
        <>
          <p>
            I&apos;m Augustas. I build full stack websites that look good and
            work smoothly. I love clean, animated UIs, and I&apos;m also
            comfortable with complex backend logic to keep things fast and
            modern.
          </p>
          <p>
            I care about doing great and meaningful work. My dream is to build
            something used by millions. If you need a passionate developer on
            your team, let&apos;s chat and bring you idea to life.
          </p>
        </>
      )}
      {showMore && (
        <>
          <p>
            I&apos;m Augustas. I build full stack websites that look good and
            work smoothly. I love clean, animated UIs, and I&apos;m also
            comfortable with complex backend logic to keep things fast and
            modern.
          </p>
          <p>
            My coding journey began playing web flash games, that my grandmother
            showed me. That opened my eyes to computers and I realized that with
            code, I can build whole worlds. So I started learning, to build
            games, apps and finally websites on my free time.
          </p>
          <p>
            While coding occupies much of my time, I also enjoy cars, I like
            fixing and modding them. My favorite is the Audi S3 8L 1.8T. I also
            like to work out and drink good coffee to keep my mind sharp.
          </p>
          <p>
            I care about doing great and meaningful work. My dream is to build
            something used by millions. If you need a passionate developer on
            your team, let&apos;s chat and bring you idea to life.
          </p>
        </>
      )}

      <button
        className="flex w-fit items-center gap-1 text-sm text-muted-foreground"
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
