export interface Skill {
  label: string;
  category: 'product' | 'design' | 'tech' | 'mindset';
  icon: string;
}

export const skillsData: Skill[] = [
  {
    label: 'Product Management',
    category: 'product',
    icon: 'mingcute:target-line'
  },
  {
    label: 'UX Design',
    category: 'design',
    icon: 'mingcute:pencil-line'
  },
  {
    label: 'Motion Graphics',
    category: 'design',
    icon: 'mingcute:movie-line'
  },
  {
    label: 'Visual Storytelling',
    category: 'design',
    icon: 'mingcute:palette-line'
  },
  {
    label: 'Agile/Scrum',
    category: 'product',
    icon: 'mingcute:refresh-2-line'
  },
  {
    label: 'JIRA',
    category: 'tech',
    icon: 'mingcute:tool-line'
  },
  {
    label: 'Figma',
    category: 'tech',
    icon: 'mingcute:polygon-line'
  },
  {
    label: 'Systematisches Denken',
    category: 'mindset',
    icon: 'mingcute:grid-line'
  },
  {
    label: 'Continuous Learning',
    category: 'mindset',
    icon: 'mingcute:book-6-line'
  }
];
