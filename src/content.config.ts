import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { rssSchema } from "@astrojs/rss";

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    extend: z.object({
      giscus: z.boolean().optional().default(true),
    }),
  }),
});

const blog = defineCollection({
  schema: rssSchema,
});

export const collections = {
  docs,
  blog,
};
