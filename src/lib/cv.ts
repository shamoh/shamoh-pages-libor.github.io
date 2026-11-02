import { getCollection } from 'astro:content';

// getCollection does not keep the order of the YAML file: entries are sorted here by their years,
// the newest first (a lasting one first of all), then by the order of the file.
type Dated = { data: { start: number; end?: number } };
const newestFirst = <T extends Dated>(entries: T[]): T[] =>
  entries
    .map((entry, index) => ({ entry, index }))
    .sort(
      (a, b) =>
        (b.entry.data.end ?? Infinity) - (a.entry.data.end ?? Infinity) ||
        b.entry.data.start - a.entry.data.start ||
        a.index - b.index,
    )
    .map(({ entry }) => entry);

export const getPositions = async () => newestFirst(await getCollection('positions'));
export const getProjects = async () => newestFirst(await getCollection('projects'));
export const getEducation = async () => newestFirst(await getCollection('education'));

export const getCertifications = async () =>
  (await getCollection('certifications')).sort(
    (a, b) => b.data.year - a.data.year || (b.data.month ?? 0) - (a.data.month ?? 0) || a.data.name.localeCompare(b.data.name),
  );
