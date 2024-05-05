"use client";

import { type Post } from "@/content";
import useHeadingObserver from "@/lib/useHeadingObserver";
import { cn } from "@/lib/utils";
import Link from "next/link";

function PostTOC({ post }: { post: Post }) {
  const activeId = useHeadingObserver();

  return (
    <div className="sticky top-32 ml-4 mt-12 max-w-md transform border-l-2 py-2 pl-4 transition-colors hover:border-primary">
      <p className="mb-2 font-semibold">{post.title}</p>

      <ol className="flex flex-col gap-2 text-muted-foreground">
        {post.toc.map((entry) => (
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

export default PostTOC;
