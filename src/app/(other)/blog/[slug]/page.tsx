import { MDXContent } from "@/components/mdx-content";
import { posts } from "@/content";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import TagList from "@/components/tag-list";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "@/styles/mdx.css";
import { SortFunctions } from "@/lib/blog";
import PostTOC from "@/components/post-toc";

function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);
  const sortedPosts = posts.sort(SortFunctions.date.desc);
  const previousPost =
    sortedPosts[posts.findIndex((p) => p.slug === post?.slug) - 1];
  const nextPost =
    sortedPosts[posts.findIndex((p) => p.slug === post?.slug) + 1];

  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (!post || !post.published) return notFound();

  return (
    <main className="mb-24 mt-12 flex justify-center">
      <div className="w-full"></div>

      <div className="prose prose-base mx-auto max-w-2xl dark:prose-invert">
        <Link
          href="/blog?by=date&order=desc"
          className="mb-4 flex items-center gap-2 text-sm"
        >
          <FaArrowLeft />
          Back to all posts
        </Link>

        <div className="flex items-center gap-8">
          <p className="mb-2 mt-0">
            {dayjs(post.date).format(siteConfig.dateFormat)}
          </p>
          <p className="mb-2 mt-0">{post.metadata.readingTime} mins</p>
        </div>

        <h1 className="mb-2">{post.title}</h1>

        <p>{post.description}</p>

        {post.tags?.length && (
          <TagList className="mb-2" title={post.title} tags={post.tags} />
        )}

        <Image src={post.banner} alt={`"${post.title}" banner image`} />

        <MDXContent code={post.content} />

        <p className="mb-8 mt-16 text-center text-sm">
          Thank you for reading! Wanna see more?
        </p>

        <div className="grid grid-cols-2 text-sm">
          <Link
            href="/blog?by=date&order=desc"
            className="col-span-2 mb-2 text-center text-sm"
          >
            Back to all posts
          </Link>

          <Link
            className="mr-6 flex w-full items-center justify-start gap-4"
            href={`/blog/${previousPost?.slug}`}
          >
            {previousPost && (
              <>
                <FaArrowLeft /> {previousPost?.title}
              </>
            )}
          </Link>

          <Link
            className="flex w-full items-center justify-end gap-4 border-l-2 pl-6 !text-right"
            href={`/blog/${nextPost?.slug}`}
          >
            {nextPost && (
              <>
                {nextPost?.title} <FaArrowRight />
              </>
            )}
          </Link>
        </div>
      </div>

      <div className="relative w-full">
        <PostTOC post={post} />
      </div>
    </main>
  );
}

export default BlogPostPage;
