import { MDXContent } from "@/components/mdx-content";
import { posts } from "@/content";
import { notFound } from "next/navigation";

function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="flex-col py-24">
      <div className="prose dark:prose-invert prose-base mx-auto">
        <h1 className="">{post.title}</h1>
        <MDXContent code={post.content} />
      </div>
    </div>
  );
}

export default BlogPostPage;
