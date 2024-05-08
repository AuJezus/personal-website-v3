import { posts } from "@/content";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import TOC from "@/components/views/toc";
import { PostView, ViewPageLayout } from "@/components/views/views";

export async function generateStaticParams() {
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

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
