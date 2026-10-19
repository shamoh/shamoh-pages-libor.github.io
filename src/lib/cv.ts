import YAML from 'yaml';

const files = import.meta.glob<string>('../data/cv/*.yml', { eager: true, query: '?raw', import: 'default' });

/** A list from src/data/cv/<name>.yml (an empty file, or one with everything commented out, is an empty list). */
function load<T>(name: string): T[] {
  const source = files[`../data/cv/${name}.yml`];
  if (source === undefined) throw new Error(`src/data/cv/${name}.yml neexistuje.`);
  return YAML.parse(source) ?? [];
}

export const educations = load<{ degree: string; university: string; time: string }>('educations');
export const experiences = load<{ role: string; time: string; company: string; details?: string }>('experiences');
export const interests = load<{ item: string }>('interests');
export const languages = load<{ idiom: string; level: string }>('languages');
export const skills = load<{ name: string; level?: string }>('skills');
export const projects = load<{
  name: string;
  projects: { name: string; time: string; details?: string; responsibilities?: string[]; technologies?: string }[];
}>('projects');
