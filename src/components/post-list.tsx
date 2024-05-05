"use client";

import { posts } from "@/content";
import { SortFunctions, defaultSort, useFilterSearchParams } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";

function PostList() {
  const { tags, by, order, query } = useFilterSearchParams();

  const filteredForTags =
    tags.length > 0
      ? posts.filter((p) => tags.every((tag) => p.tags?.includes(tag)))
      : posts;

  const filteredForQuery = query
    ? filteredForTags.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      )
    : filteredForTags;

  const sorted = filteredForQuery.sort(
    SortFunctions[by ?? defaultSort.by][order ?? defaultSort.order],
  );

  return (
    <div className="flex flex-col gap-6">
      {sorted.map((post) => (
        <Link
          key={post.title}
          href={`/blog/${post.slug}`}
          className="group flex items-center divide-x-2 rounded-md border-2 p-2 transition-colors hover:border-primary/60"
        >
          <Image
            className="h-[200px] w-[500px] object-cover"
            src={post.banner}
            alt={`"${post.title}" banner image`}
          />
          <div className="ml-4 flex w-full flex-col gap-1 pl-4 transition-colors group-hover:border-primary/60">
            <p className="text-muted-foreground">2023-02-31</p>
            <p className="line-clamp-2 text-xl font-semibold">{post.title}</p>
            <p className="text-muted-foreground">{post.description}</p>
            {post.tags?.length && (
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <div
                    key={post.title + tag}
                    className="text-nowrap rounded-sm border px-1.5 py-0.5 text-sm text-muted-foreground"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostList;
