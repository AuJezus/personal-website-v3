"use client";

import { posts } from "@/content";
import { SortFunctions, defaultSort, useFilterSearchParams } from "@/lib/blog";
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
    <div className="grid grid-cols-2">
      {sorted.map((post) => (
        <Link className="border p-2" key={post.slug} href={`blog/${post.slug}`}>
          <p className="text-2xl font-semibold">{post.title}</p>
          <p>{new Date(post.date).toString()}</p>
          <p className="text-primary">{post.tags?.join(" ")}</p>
          <p className="text-muted-foreground">{post.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default PostList;
