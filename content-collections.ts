import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const laws = defineCollection({
  name: "laws",
  directory: "content/laws",
  include: "*.md",
  schema: z.object({
    id: z.string(),
    name: z.string(),
    icon: z.string(),
    summary: z.string(),
    category: z.string(),
    content: z.string(),
    origin: z.object({
      author: z.string(),
      context: z.string(),
      quote: z.string(),
    }),
    takeaways: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    ),
    relatedLaws: z.array(z.string()),
    resources: z
      .array(
        z.object({
          title: z.string(),
          subtitle: z.string(),
          type: z.string(),
          url: z.string(),
        })
      )
      .optional(),
  }),
  transform: (document) => {
    return {
      ...document,
      description: document.content,
    };
  },
});

export default defineConfig({
  collections: [laws],
});
