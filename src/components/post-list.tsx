"use client";

import { posts } from "@/content";
import { SortFunctions, defaultSort } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import TagList from "./tag-list";
import useFilterSearchParams from "@/lib/hooks/use-filter-seach-params";

function PostList() {
  const { tags, by, order, query } = useFilterSearchParams();

  const filteredForPrivate = posts.filter((p) => p.published);

  const filteredForTags =
    filteredForPrivate.length > 0
      ? filteredForPrivate.filter((p) =>
          tags.every((tag) => p.tags?.includes(tag)),
        )
      : filteredForPrivate;

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
          className="group flex flex-col items-center gap-4 rounded-md border-2 p-2 transition-colors hover:border-primary/60 md:flex-row md:gap-0 md:divide-x-2"
        >
          <Image
            className="h-[200px] w-full object-cover md:w-[500px]"
            src={post.banner}
            alt={`"${post.title}" banner image`}
          />

          <div className="flex w-full flex-col gap-1 pl-4 transition-colors group-hover:border-primary/60 md:ml-4">
            <div className="mr-8 flex items-center justify-between text-muted-foreground">
              <p>{dayjs(post.date).format(siteConfig.dateFormat)}</p>

              <p className="text-sm">{post.metadata.readingTime} mins</p>
            </div>

            <p className="text-xl font-semibold">{post.title}</p>

            <p className="text-muted-foreground">{post.description}</p>

            {post.tags?.length && (
              <TagList title={post.title} tags={post.tags} className="mt-2" />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostList;
