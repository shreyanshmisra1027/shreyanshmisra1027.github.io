export interface SkillCategory {
  category: string;
  skills: Array<{
    name: string;
    level: 'established' | 'learning' | 'exploring';
  }>;
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 'established' },
      { name: 'C', level: 'established' },
      { name: 'C++', level: 'established' },
      { name: 'Java', level: 'learning' },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML', level: 'established' },
      { name: 'CSS', level: 'established' },
      { name: 'JavaScript', level: 'learning' },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', level: 'established' },
      { name: 'Linux / Arch Linux', level: 'established' },
      { name: 'PostgreSQL', level: 'established' },
      { name: 'VS Code', level: 'established' },
      { name: 'Docker', level: 'learning' },
    ],
  },
  {
    category: 'Currently Exploring',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'learning' },
      { name: 'Systems Programming', level: 'exploring' },
      { name: 'Cybersecurity', level: 'exploring' },
      { name: 'Operating Systems', level: 'exploring' },
      { name: 'Networking', level: 'exploring' },
    ],
  },
];
