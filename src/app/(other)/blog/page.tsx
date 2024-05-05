import FilterMenu from "@/components/filter";
import PostList from "@/components/post-list";

function BlogPage() {
  return (
    <main className="mx-auto mb-28 mt-12 max-w-[1200px]">
      <div className="mb-6 flex items-baseline gap-4 text-muted-foreground">
        <span>
          <span className="text-primary">~</span> W:\AuJezus{">"}
        </span>
        <h1 className="text-lg text-primary">
          blog<span className="animate-blink">_</span>
        </h1>
      </div>

      <h2 className="mb-4 text-3xl font-semibold">All things web dev</h2>

      <p className="mb-4 border-b-2 pb-4 text-muted-foreground">
        Hello people on the internet! Welcome to my corner of the web. Here,
        I&apos;ll be sharing all sorts of goodies about web development, from
        handy tips to passionate rants. Let&apos;s dive into the exciting world
        of coding together!
      </p>

      <FilterMenu className="mb-4" />

      <PostList />
    </main>
  );
}

export default BlogPage;
