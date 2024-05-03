import { defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const posts = {
  name: "Post", // collection type name
  pattern: "blog/**/*.mdx", // content files glob pattern
  schema: s
    .object({
      slug: s.path(), // auto generate slug from file path
      title: s.string().max(99), // Zod primitive type
      published: s.boolean().default(true),
      date: s.isodate(), // input Date-like string, output ISO Date string.
      tags: s.array(s.string()).optional(),
      description: s.string().max(99).optional(), // excerpt of markdown content
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
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
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
