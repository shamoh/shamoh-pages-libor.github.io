// The texts of the CV proposal (/cv-2026/, /cv-2026/history/), to compare with the current CV (/cv/). Plain text:
// the pages explain the abbreviations (src/lib/abbr.ts).
export const cv2026 = {
  headline: 'Senior Scala Engineer · Functional & event-driven backend systems · Fintech',
  /** location, way of work, languages: the facts a recruiter filters by */
  facts: ['Prague, Czech Republic (CET)', 'Freelance (B2B)', 'Hybrid / remote', 'English, Czech'],
  summary: [
    'Independent software engineer with 27 years of building backend systems on the JVM, the last five of them in Scala. I own services end to end: technical design, implementation and testing.',
    'I am most at home with functional programming, the actor model and event-driven architecture, and I keep learning.',
    'Banking and fintech have been my domain since 2006: from the core systems of Komerční banka through a SaaS core banking platform at Leveris to a payment gateway with crypto payments at Carpentum.',
  ],
  strengths: [
    { title: 'Scala & functional programming', text: 'Scala as my main language since 2021, after more than 20 years of Java.' },
    { title: 'Event-driven & reactive systems', text: 'Akka actors, Kafka and asynchronous APIs; Lightbend certified in Akka and Reactive Architecture.' },
    { title: 'Banking & fintech', text: 'Payments and crypto (Tron, EVM chains), core banking, loans; in banks and fintechs since 2006.' },
    { title: 'Software for developers', text: 'Frameworks and APIs other developers build on: NetBeans IDE, the KB Java EE framework, Jersey (JAX-RS RI), the Helidon configuration API.' },
  ],
  /** the freelance positions (2018 –) are grouped under one heading */
  freelance: { title: 'Independent software engineer', subtitle: 'Freelance (B2B) for fintech clients' },
};
