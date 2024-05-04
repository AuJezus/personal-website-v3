import FilterMenu from "@/components/filter";
import { posts } from "@/content";
import Link from "next/link";

function BlogPage() {
  return (
    <main className="mx-auto max-w-[1200px]">
      <h1 className="mb-2 text-4xl font-semibold">Blog</h1>
      <p className="mb-4 border-b-2 py-4 text-sm text-muted-foreground">
        Hello people on the internet! Welcome to my corner of the web. Here,
        I&apos;ll be sharing all sorts of goodies about web development, from
        handy tips to passionate rants. Let&apos;s dive into the exciting world
        of coding together!
      </p>

      <FilterMenu />

      {/* <div>
        {posts.map((post) => (
          <Link key={post.slug} href={`blog/${post.slug}`}>
            {post.title}
          </Link>
        ))}
      </div> */}
      <div></div>
    </main>
  );
}

export default BlogPage;
