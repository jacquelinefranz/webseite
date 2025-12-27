export interface JourneyStation {
  period: string;
  title: string;
  description: string;
  category: 'technical' | 'creative' | 'product';
}

export const journeyData: JourneyStation[] = [
  {
    period: '2009–2013',
    title: 'KFZ-Mechanik',
    description: 'Ausbildung und Berufserfahrung in der Werkstatt. Hier habe ich gelernt, komplexe Systeme zu verstehen, strukturiert zu arbeiten und Probleme systematisch zu lösen.',
    category: 'technical'
  },
  {
    period: '2018–2021',
    title: 'Elternzeit & Haus-Sanierung',
    description: 'Zeit für Familie und ein Großprojekt: die komplette Sanierung unseres Hauses. Projektmanagement in der Praxis – von der Planung bis zur Umsetzung.',
    category: 'product'
  },
  {
    period: '2020–2021',
    title: 'Boostprint',
    description: 'Einstieg ins Digitale mit WordPress und E-Commerce. Erste Berührung mit UX Design, User Flows und digitalem Storytelling.',
    category: 'creative'
  },
  {
    period: '2021–2024',
    title: 'Notion Freelancing',
    description: 'Entwicklung von Templates, Landingpages und digitalen Workflows. Fokus auf Nutzerzentrierung, visuelle Kommunikation und systematisches Design.',
    category: 'creative'
  },
  {
    period: '2023–heute',
    title: 'Product Owner @ microtech',
    description: 'Verantwortung für Produktentwicklung im agilen Umfeld. Von User Research über Prototyping bis zur Umsetzung – mit JIRA, Figma und einem crossfunktionalen Team.',
    category: 'product'
  }
];
