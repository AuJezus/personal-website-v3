import { type Metadata } from "next";

import { posts } from "@/content";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import TOC from "@/components/views/toc";
import { PostView, ViewPageLayout } from "@/components/views/views";
import { siteConfig } from "@/lib/site";

interface BlogPostPageProps {
  params: { slug: string };
}

function getPostFromParams(params: BlogPostPageProps["params"]) {
  return posts.find((post) => post.slug === params.slug);
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("type", "blog");
  ogSearchParams.set("title", post.title);
  ogSearchParams.set("description", post.description);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams() {
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostFromParams(params);

  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (!post || !post.published) return notFound();

  return (
    <ViewPageLayout>
      <div className="w-full"></div>

      <PostView post={post} />

      <div className="w-full">
        <TOC title={post.title} toc={post.toc} />
      </div>
    </ViewPageLayout>
  );
}

export default BlogPostPage;
