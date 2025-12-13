import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titel: z.string(),
    beschreibung: z.string().optional(),
    datum: z.date(),
    bild: z.string().optional(), // Add image field
  }),
});

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titel: z.string(),
    // Add other relevant fields if needed, e.g., an ID or a specific type for filtering
  }).passthrough(),
});

export const collections = {
  blog: blogCollection,
  sections: sectionsCollection,
};