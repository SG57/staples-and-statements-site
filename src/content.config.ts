import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    price: z.string(),
    duration: z.string().optional(),
    perfectFor: z.string(),
    shortDescription: z.string().optional(),
    order: z.number(),
    priceNote: z.string().optional(),
    priceAlt: z.string().optional(),
    status: z.enum(['active', 'suspended', 'coming-soon']).default('active'),
    featured: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/testimonial.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    service: z.string().optional(),
    date: z.coerce.date(),
    hasPhoto: z.boolean().default(false),
  }),
});

const archetypes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archetypes' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    order: z.number(),
    gender: z.enum(['feminine', 'masculine']),
    icon: z.string().optional(),
    color: z.string().optional(),

    image: z.string().optional(),
  }),
});

export const collections = { services, testimonials, archetypes };
