import { type CollectionEntry, getCollection } from 'astro:content';
import { getPositions, getProjects } from './cv';

// Data helpers of the CV proposal (/cv-2026/): the same collections as /cv/, only grouped differently.

type Position = CollectionEntry<'positions'>['data'];
type Project = CollectionEntry<'projects'>['data'];

export const isFreelance = (position: Position) => /freelance/i.test(position.location ?? '');

/** Consecutive positions at one company (three at Komerční banka) as one employer, with its projects. */
export interface Employer {
  company: string;
  context?: string;
  location?: string;
  start: number;
  end?: number;
  /** the newest first */
  roles: Position[];
  projects: Project[];
}

export async function getEmployers(): Promise<Employer[]> {
  const projects = await getProjects();
  const employers: Employer[] = [];
  for (const { data } of await getPositions()) {
    const last = employers.at(-1);
    if (last && last.company === data.company) {
      last.roles.push(data);
      last.start = data.start;
    } else {
      employers.push({ company: data.company, context: data.context, location: data.location, start: data.start, end: data.end, roles: [data], projects: [] });
    }
  }
  // a project belongs to the first employer its client names ("Sun Microsystems / NetBeans" → Sun Microsystems)
  for (const { data } of projects) {
    const employer = employers.find((e) => data.client === e.company || data.client.includes(e.company));
    employer?.projects.push(data);
  }
  return employers;
}

/** Skills of a group in their order: by rank, then alphabetically. */
export async function getSkills(group: 'language' | 'approach' | 'tool') {
  return (await getCollection('skills'))
    .map((skill) => skill.data)
    .filter((skill) => skill.group === group)
    .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99) || a.name.localeCompare(b.name));
}
