import { defineCollection, z } from 'astro:content';

export const cheatsheetSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum([
    'programming',
    'dsa',
    'tools',
    'databases',
    'computer-science',
    'cybersecurity',
    'web',
    'math',
  ]),
  subcategory: z.string(),
  tags: z.array(z.string()).default([]),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
  dateCreated: z.string().or(z.date()).optional(),
  dateUpdated: z.string().or(z.date()).optional(),
  order: z.number().default(0),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  related: z.array(z.string()).default([]),
  aliases: z.array(z.string()).default([]),
});

export const collections = {
  cheatsheets: defineCollection({
    type: 'content',
    schema: cheatsheetSchema,
  }),
};