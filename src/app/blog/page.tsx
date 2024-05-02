import { posts } from "@/content";
import Link from "next/link";

function BlogPage() {
  return (
    <div className="my-16 min-h-screen">
      {posts.map((post) => (
        <Link key={post.slug} href={`blog/${post.slug}`}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}

export default BlogPage;
