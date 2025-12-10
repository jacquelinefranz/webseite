import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    image: z.string().optional(), // Add image field
  }),
});

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Add other relevant fields if needed, e.g., an ID or a specific type for filtering
  }),
});

export const collections = {
  blog: blogCollection,
  sections: sectionsCollection,
};