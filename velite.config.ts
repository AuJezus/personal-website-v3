import { defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const posts = {
  name: "Post", // collection type name
  pattern: "blog/**/*.mdx", // content files glob pattern
  schema: s
    .object({
      slug: s.path(), // auto generate slug from file path
      title: s.string().max(99), // Zod primitive type
      banner: s.image(),
      published: s.boolean().default(true),
      date: s.isodate(), // input Date-like string, output ISO Date string.
      tags: s.array(s.string()).optional(),
      description: s.string().max(99), // excerpt of markdown content
      metadata: s.metadata(),
      toc: s.toc({ ordered: true }), // extract markdown reading-time, word-count, etc.
      content: s.mdx(), // transform markdown to html
      pinned: s.boolean().optional(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.split("/").slice(1).join("/"),
    })),
};

const projects = {
  name: "Project", // collection type name
  pattern: "projects/**/*.mdx", // content files glob pattern
  schema: s
    .object({
      slug: s.path(), // auto generate slug from file path
      title: s.string().max(99), // Zod primitive type
      image: s.image(),
      date: s.isodate(), // input Date-like string, output ISO Date string.
      tags: s.array(s.string()).optional(),
      description: s.string().max(99), // excerpt of markdown content
      github: s.string().url(),
      live: s.string().url().optional(),
      toc: s.toc({ ordered: true }),
      content: s.mdx(), // transform markdown to html
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.split("/").slice(1).join("/"),
    })),
};

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, projects },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
