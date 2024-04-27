import Link from "next/link";

function BlogSection() {
  return (
    <section className="mx-auto mb-28 max-w-[1200px]">
      <div className="text-muted-foreground mb-10 flex items-baseline gap-4">
        <span>
          <span className="text-primary">~</span> W:\AuJezus{">"}
        </span>
        <h2 className="text-primary text-lg">
          blog<span className="animate-blink">_</span>
        </h2>
      </div>

      <h3 className="mb-12 text-4xl font-semibold">Check out my blog posts!</h3>

      <div className="hover:bg-primary/15 bg-border/20 relative z-0 flex gap-8 transition-all duration-500">
        <div className="to-background absolute -z-20 h-full w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-transparent from-10% to-70%"></div>
        <div className="to-red-transparent from-background absolute -z-10 h-full w-full bg-[linear-gradient(to_left,_var(--tw-gradient-stops))] to-20%"></div>

        <div className="flex w-full flex-col gap-4">
          <Link
            href={"/blog/1"}
            className="hover:border-primary/60 group flex items-center gap-2 rounded-md border-2 p-2 transition-colors"
          >
            <img
              className="h-26 w-52 object-cover"
              src="aujezus-play.webp"
              alt="Blog image"
            />
            <div className="group-hover:border-primary/60 flex w-full flex-col gap-1 border-l-2 pl-2 transition-colors">
              <p className="text-muted-foreground">2023-02-31</p>
              <p className="line-clamp-2 text-lg font-semibold">
                The joy of programming
              </p>
            </div>
          </Link>

          <Link
            href={"/blog/1"}
            className="hover:border-primary/60 group flex items-center gap-2 rounded-md border-2 p-2 transition-colors"
          >
            <img
              className="h-26 w-52 object-cover"
              src="aujezus-play.webp"
              alt="Blog image"
            />
            <div className="group-hover:border-primary/60 flex w-full flex-col gap-1 border-l-2 pl-2 transition-colors">
              <p className="text-muted-foreground">2023-02-31</p>
              <p className="line-clamp-2 text-lg font-semibold">
                How to make an interactive and responsive carousel
              </p>
            </div>
          </Link>
        </div>

        <div className="w-[45%]">
          <p className="mb-4 text-xl font-semibold">Other posts:</p>

          <ul className="text-muted-foreground flex flex-col gap-2">
            <li className="flex gap-2">
              -
              <Link
                href={"/blog/1"}
                className="hover:text-foreground transition-colors"
              >
                Infra I&apos;m Building On In 2024
              </Link>
            </li>

            <li className="flex gap-2">
              -
              <Link
                href={"/blog/1"}
                className="hover:text-foreground transition-colors"
              >
                Getting my dream job
              </Link>
            </li>

            <li className="flex gap-2">
              -
              <Link
                href={"/blog/1"}
                className="hover:text-foreground transition-colors"
              >
                An Inconsistent Truth: Next.js and Type Safety
              </Link>
            </li>

            <li className="flex gap-2">
              -
              <Link
                href={"/blog/1"}
                className="hover:text-foreground transition-colors"
              >
                How to make an interactive and responsive carousel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
