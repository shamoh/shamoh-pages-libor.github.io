export const site = {
  name: 'Libor Kramoliš',
  tagline: 'Independent software developer · Scala, functional and event-driven systems',
  description: 'Libor Kramoliš: independent software developer from Prague, Scala, functional and event-driven systems.',
  url: 'https://libor.kramolis.cz',
  picture: '/assets/img/shamoh-400.jpg',
  locale: 'en_US',
  /** Google Analytics 4 measurement ID; empty = no analytics */
  analytics: 'G-W86CVR7EJM',
  // HTML entities of the address, so spam robots do not read it (http://wbwip.com/wbw/emailencoder.html)
  email: '&#108;&#105;&#098;&#111;&#114;&#064;&#107;&#114;&#097;&#109;&#111;&#108;&#105;&#115;&#046;&#099;&#122;',
  navigation: [
    { title: 'About', url: '/about/' },
    { title: 'CV', url: '/cv/' },
    { title: 'Blog', url: 'https://blog.kramolis.cz' },
  ],
  links: [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/liborkramolis/', handle: 'liborkramolis' },
    { title: 'GitHub', url: 'https://github.com/shamoh', handle: 'shamoh' },
    { title: 'Stack Overflow', url: 'https://stackoverflow.com/users/957021/shamoh', handle: 'shamoh' },
    { title: 'Blog', url: 'https://blog.kramolis.cz', handle: 'blog.kramolis.cz' },
  ],
};

/** "2013 – 2017", "2018", "2024 – present" */
export function period(start: number, end?: number): string {
  if (end === undefined) return `${start} – present`;
  return start === end ? String(start) : `${start} – ${end}`;
}
