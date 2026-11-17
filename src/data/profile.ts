export const profile = {
  name: 'Shreyansh',
  fullName: 'Shreyansh H.',
  role: 'Computer Science & Cybersecurity Student',
  university: 'VIT Chennai',
  graduationYear: 2030,
  location: 'India',

  hero: {
    eyebrow: 'COMPUTER SCIENCE / CYBERSECURITY / ENGINEERING',
    heading: 'Building things.\nUnderstanding how they work.',
    description: `I'm Shreyansh, a Computer Science student at VIT Chennai, exploring software engineering, systems programming, and cybersecurity. I enjoy understanding technology from the ground up and turning ideas into working software.`,
  },

  about: {
    heading: 'A little about me.',
    paragraphs: [
      `I'm a Computer Science and Engineering student at VIT Chennai, specializing in Cybersecurity. My journey in technology began with curiosity about how systems work at a fundamental level — from operating systems to low-level programming.`,
      `I'm particularly interested in software engineering, systems programming, and the intersection of development and security. Linux and open-source development have taught me the value of understanding tools rather than just using them.`,
      `My approach to learning is project-driven: I believe in building real software, solving actual problems, and understanding the "why" behind technologies. This portfolio itself is part of that philosophy — built from scratch with modern tools to create something genuinely useful.`,
    ],
    philosophy: {
      heading: 'Engineering Philosophy',
      items: [
        'Mastery over shortcuts',
        'Understanding over memorization',
        'Building over consuming tutorials',
        'Consistency over temporary motivation',
      ],
    },
  },

  contact: {
    heading: 'Have something interesting in mind?',
    description: "I'm always open to discussing interesting projects, collaboration opportunities, or just chatting about technology.",
    email: 'shreyansh@example.com', // UPDATE THIS
    github: 'https://github.com/shreyanshmisra1027',
    linkedin: 'https://www.linkedin.com/in/shreyansh-misra-0840323a1/',
  },

  social: {
    github: 'shreyanshmisra1027',
    linkedin: 'shreyansh-misra-0840323a1',
  },
};

export type Profile = typeof profile;
