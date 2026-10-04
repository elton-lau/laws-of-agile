import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const laws = defineCollection({
  name: "laws",
  directory: "content/laws",
  include: "**/*.md",
  schema: z.object({
    id: z.string(),
    name: z.string().optional(),
    title: z.string().optional(),
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
    axiom: z.string().optional(),
    pathology: z.string().optional(),
    defenseScript: z
      .object({
        executive: z.string(),
        team: z.string(),
      })
      .optional(),
    balancingLaw: z
      .object({
        id: z.string(),
        name: z.string(),
        relationshipNote: z.string(),
      })
      .optional(),
    tags: z
      .array(
        z.enum([
          "delivery-delays",
          "metric-gaming",
          "org-friction",
          "codebase-rot",
        ])
      )
      .optional(),
    retroPrompt: z.string().optional(),
  }),
  transform: (document) => {
    const pathParts = document._meta.filePath.split('/');
    const locale = pathParts.length > 1 ? pathParts[0] : 'en';
    const slug = document.id;
    const resolvedName = document.title || document.name || document.id;
    
    return {
      ...document,
      name: resolvedName,
      title: resolvedName,
      description: document.content,
      locale,
      slug,
    };
  },
});

export default defineConfig({
  collections: [laws],
});
