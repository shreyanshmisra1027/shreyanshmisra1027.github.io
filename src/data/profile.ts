export const profile = {
  name: 'Shreyansh',
  brandName: 'SHREYAN.SH',
  fullName: 'Shreyansh',
  role: 'Computer Science & Engineering Student',
  specialization: 'Cybersecurity',
  university: 'VIT Chennai',
  graduationYear: 2030,
  location: 'India',

  hero: {
    eyebrow: 'COMPUTER SCIENCE · CYBERSECURITY · ENGINEERING',
    heading: 'Building things.\nUnderstanding how they work.',
    description: "I'm Shreyansh, a Computer Science student at VIT Chennai, exploring software engineering, systems programming, and cybersecurity. I enjoy understanding technology from the ground up and turning ideas into working software.",
  },

  about: {
    heading: 'A little about me.',
    paragraphs: [
      "I'm a B.Tech Computer Science & Engineering student at VIT Chennai, with a specialized focus on Cybersecurity. My fascination lies in how computing systems operate at their lowest levels — from kernel internals and process isolation to binary exploitation and network protocols.",
      "Rather than taking shortcuts or superficially consuming tutorials, I focus on building practical software from first principles. I spend significant time working in Linux environments (Arch Linux / Omarchy) and writing code in C, C++, and Python.",
      "My long-term ambition is to become an exceptional software engineer at a leading global technology company, pairing rigorous systems-level software craftsmanship with defense-in-depth security engineering.",
    ],
    philosophy: {
      heading: 'Engineering Philosophy',
      items: [
        'Mastery over shortcuts.',
        'Understanding over memorization.',
        'Building over merely consuming tutorials.',
        'Consistency over temporary motivation.',
        'Writing code to solve actual problems.',
      ],
    },
  },

  contact: {
    heading: 'Have something interesting in mind?',
    description: "Whether you want to discuss systems engineering, cybersecurity research, collaboration opportunities, or simply share ideas — my inbox is open.",
    email: 'shreyanshmisra1027@gmail.com',
    github: 'https://github.com/shreyanshmisra1027',
    linkedin: 'https://www.linkedin.com/in/shreyansh-misra-0840323a1/',
  },

  social: {
    github: 'shreyanshmisra1027',
    linkedin: 'shreyansh-misra-0840323a1',
  },
};

export type Profile = typeof profile;
