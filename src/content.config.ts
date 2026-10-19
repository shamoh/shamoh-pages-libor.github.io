import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// The CV: one YAML file per collection in src/content/cv/, a list of entries, each with a unique id.
const cv = (name: string) => file(`src/content/cv/${name}.yaml`);
const year = z.number().int().min(1990).max(2100);

const positions = defineCollection({
  loader: cv('positions'),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    start: year,
    /** the last year; none while the position lasts */
    end: year.optional(),
    highlights: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: cv('projects'),
  schema: z.object({
    client: z.string(),
    name: z.string(),
    start: year,
    end: year.optional(),
    summary: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
  }),
});

const education = defineCollection({
  loader: cv('education'),
  schema: z.object({
    degree: z.string(),
    school: z.string(),
    start: year,
    end: year,
    thesis: z.string().optional(),
    note: z.string().optional(),
  }),
});

const languages = defineCollection({
  loader: cv('languages'),
  schema: z.object({ name: z.string(), level: z.string() }),
});

const skills = defineCollection({
  loader: cv('skills'),
  schema: z.object({ name: z.string(), note: z.string().optional() }),
});

const certifications = defineCollection({
  loader: cv('certifications'),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    year,
    month: z.number().int().min(1).max(12).optional(),
    /** e.g. the courses of a series */
    note: z.string().optional(),
  }),
});

export const collections = { positions, projects, education, languages, skills, certifications };
