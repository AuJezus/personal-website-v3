import { posts } from "@/content";
import { SortFunctions } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import TerminalHeading from "../terminal-heading";
import Section from "./section";

function BlogSection() {
  const sortedPosts = posts.sort(SortFunctions.date.desc);
  const pinnedPosts = sortedPosts.filter((p) => p.pinned);
  const otherPosts = sortedPosts
    .filter((p) => !p.pinned)
    .slice(0, Math.floor(pinnedPosts.length * 2.5));

  return (
    <Section>
      <TerminalHeading>blog</TerminalHeading>

      <h3 className="mb-8 text-3xl font-semibold sm:mb-12 sm:text-4xl">
        Check out my blog posts!
      </h3>

      <div className="relative z-0 flex flex-col gap-8 bg-border/20 transition-all duration-500 hover:bg-primary/15 lg:flex-row">
        <div className="absolute -z-20 h-full w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-transparent from-10% to-background to-70%"></div>
        <div className="to-red-transparent absolute -z-10 h-full w-full bg-[linear-gradient(to_left,_var(--tw-gradient-stops))] from-background to-20%"></div>

        <div className="flex w-full flex-col gap-4">
          {pinnedPosts.map((post) => (
            <Link
              key={post.title}
              href={`/blog/${post.slug}`}
              className="group flex flex-col items-center gap-2 rounded-md border-2 p-2 transition-colors hover:border-primary/60 sm:flex-row"
            >
              <Image
                className="h-28 w-52 shrink-0 object-cover"
                src={post.banner}
                alt={`"${post.title}" banner image`}
              />
              <div className="flex w-full flex-col gap-1 pl-2 transition-colors group-hover:border-primary/60 sm:border-l-2">
                <p className="text-muted-foreground">
                  {dayjs(post.date).format(siteConfig.dateFormat)}
                </p>
                <p className="line-clamp-2 text-lg font-semibold">
                  {post.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="lg:w-[45%]">
          <p className="mb-4 text-xl font-semibold">Other posts:</p>

          <ul className="flex flex-col gap-2 text-sm text-muted-foreground sm:text-base">
            {otherPosts.map((post) => (
              <li key={post.title} className="flex gap-2">
                -
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-foreground"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default BlogSection;
