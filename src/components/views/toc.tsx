"use client";

import useHeadingObserver from "@/lib/hooks/use-heading-observer";
import { cn } from "@/lib/utils";
import Link from "next/link";

function TOC({ title, toc }: { title: string; toc: TocEntry[] }) {
  const activeId = useHeadingObserver();

  return (
    <div className="sticky top-32 ml-4 mt-12 max-w-sm transform border-l-2 py-2 pl-4 text-sm transition-colors hover:border-primary">
      <p className="mb-2 font-semibold">{title}</p>

      <ol className="flex flex-col gap-2 text-muted-foreground">
        {toc.map((entry) => (
          <TOCList activeId={activeId} key={entry.url} entry={entry} />
        ))}
      </ol>
    </div>
  );
}

interface TocEntry {
  title: string;
  url: string;
  items: TocEntry[];
}

function TOCList({
  activeId,
  entry,
  level = 1,
}: {
  activeId: string;
  entry: TocEntry;
  level?: number;
}) {
  return (
    <>
      <li>
        <Link
          className={cn(
            "transition-colors hover:text-primary-foreground",
            entry.url.slice(1) === activeId && "text-primary",
          )}
          href={`${entry.url}`}
        >
          - {entry.title}
        </Link>
      </li>
      {entry.items.length > 0 && (
        <ol
          className="flex flex-col gap-2"
          style={{ marginLeft: `${16 * level}px` }}
        >
          {entry.items.map((item) => (
            <TOCList
              activeId={activeId}
              key={item.url}
              entry={item}
              level={level + 1}
            />
          ))}
        </ol>
      )}
    </>
  );
}

export default TOC;
