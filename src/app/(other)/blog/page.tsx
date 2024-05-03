import { posts } from "@/content";
import Link from "next/link";

function BlogPage() {
  return (
    <main className="">
      <div>
        {posts.map((post) => (
          <Link key={post.slug} href={`blog/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default BlogPage;
