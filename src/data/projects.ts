export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  status: 'active' | 'in-progress' | 'completed';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'crankview',
    name: 'CrankView',
    description: 'An interactive single-cylinder four-stroke engine simulator built with React, Three.js, and Web Audio. Features real-time 3D visualization, physics-based animation, and offline PWA support.',
    technologies: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Vite', 'Zustand'],
    github: 'https://github.com/shreyanshmisra1027/CrankView',
    status: 'in-progress',
    featured: true,
  },
  {
    id: 'problemsolving',
    name: 'ProblemSolving',
    description: 'Coding challenges and algorithm implementations from LeetCode, CodeWars, and other platforms. Solutions in Python and C++ with a focus on optimization and readability.',
    technologies: ['Python', 'C++', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/shreyanshmisra1027/ProblemSolving',
    status: 'active',
  },
  {
    id: 'webdev',
    name: 'WebDev',
    description: 'A collection of web development projects and experiments. Building practical applications while learning modern web technologies and best practices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/shreyanshmisra1027/WebDev',
    status: 'active',
  },
  {
    id: 'arduino',
    name: 'Arduino Projects',
    description: 'Hardware experiments and embedded systems projects using Arduino. Exploring the intersection of software and hardware through practical builds.',
    technologies: ['C++', 'Arduino', 'Electronics'],
    github: 'https://github.com/shreyanshmisra1027/Arduino-Projects',
    status: 'active',
  },
];

export const featuredProjects = projects.filter(p => p.featured);
