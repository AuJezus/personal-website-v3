import { type Metadata } from "next";

import FilterMenu from "@/components/filter";
import PostList from "@/components/post-list";
import TerminalHeading from "@/components/terminal-heading";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "AuJezus blog",
  description:
    "Welcome to my blog, here I'll be sharing my thoughts, experiences and projects along the way.",
};

function BlogPage() {
  return (
    <main className="mx-auto mb-20 mt-12 max-w-[1200px] px-4 xl:mb-28 xl:p-0">
      <TerminalHeading level="h1" className="mb-6">
        blog
      </TerminalHeading>

      <h2 className="mb-4 text-3xl font-semibold">All things web dev</h2>

      <p className="mb-4 border-b-2 pb-4 text-sm text-muted-foreground sm:text-base">
        Welcome to my blog, here I&apos;ll be sharing my thoughts, experiences
        and projects along the way.
      </p>

      <Suspense>
        <FilterMenu className="mb-4" />
      </Suspense>

      <Suspense>
        <PostList />
      </Suspense>
    </main>
  );
}

export default BlogPage;
