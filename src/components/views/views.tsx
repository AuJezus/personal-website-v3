import { type Post, posts, type Project } from "@/content";
import { siteConfig } from "@/lib/site";
import dayjs from "dayjs";
import TagList from "../tag-list";
import Image from "next/image";
import { MDXContent } from "../mdx-content";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SortFunctions } from "@/lib/blog";
import { BiLogoGithub } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";

export function ViewPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-3 mb-24 mt-12 flex justify-center xl:mx-0">
      {children}
    </main>
  );
}

export function ProjectView({ project }: { project: Project }) {
  return (
    <ProseWrapper>
      <div className="!mb-2 flex flex-wrap items-center gap-x-8">
        <ViewDate date={project.date} />

        <a
          href={project.github}
          className="flex items-center gap-2 !text-primary"
        >
          <BiLogoGithub /> Github
        </a>

        {project.live && (
          <a
            href={project.live}
            className="flex items-center gap-2 !text-primary"
          >
            <CgWebsite /> Live
          </a>
        )}
      </div>

      <h1 className="!mb-4 !mt-0">{project.title}</h1>

      <p className="!mt-0">{project.description}</p>

      {project.tags?.length && (
        <TagList className="mb-2" title={project.title} tags={project.tags} />
      )}

      <Image
        src={project.image}
        alt={`"${project.title}" banner image`}
        priority
      />

      <MDXContent code={project.content} />
    </ProseWrapper>
  );
}

export function PostView({ post }: { post: Post }) {
  const sortedPosts = posts.sort(SortFunctions.date.desc);
  const previousPost =
    sortedPosts[posts.findIndex((p) => p.slug === post?.slug) - 1];
  const nextPost =
    sortedPosts[posts.findIndex((p) => p.slug === post?.slug) + 1];

  return (
    <ProseWrapper>
      <Link
        href="/blog?by=date&order=desc"
        className="mb-4 flex items-center gap-2 text-sm"
      >
        <FaArrowLeft />
        Back to all posts
      </Link>

      <div className="mb-2 flex items-center gap-8">
        <ViewDate date={post.date} />
        <p className="!my-0">{post.metadata.readingTime} mins</p>
      </div>

      <h1 className="!mb-4 !mt-0">{post.title}</h1>

      <p>{post.description}</p>

      {post.tags?.length && (
        <TagList className="mb-2" title={post.title} tags={post.tags} />
      )}

      <Image src={post.banner} alt={`"${post.title}" banner image`} priority />

      <MDXContent code={post.content} />

      <p className="!mt-16 mb-8 text-center text-sm">
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
          className="mr-3 flex w-full items-center justify-start gap-4 sm:mr-6"
          href={`/blog/${previousPost?.slug}`}
        >
          {previousPost && (
            <>
              <FaArrowLeft className="flex-shrink-0" /> {previousPost?.title}
            </>
          )}
        </Link>

        <Link
          className="flex w-full items-center justify-end gap-4 border-l-2 pl-3 !text-right sm:pl-6"
          href={`/blog/${nextPost?.slug}`}
        >
          {nextPost && (
            <>
              {nextPost?.title} <FaArrowRight className="flex-shrink-0" />
            </>
          )}
        </Link>
      </div>
    </ProseWrapper>
  );
}

export function ProseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-sm mx-0 w-full max-w-2xl dark:prose-invert lg:prose-base lg:ml-auto">
      {children}
    </div>
  );
}

export function ViewDate({ date }: { date: string }) {
  return <p className="!my-0">{dayjs(date).format(siteConfig.dateFormat)}</p>;
}
