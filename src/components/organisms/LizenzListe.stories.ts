import LizenzListe from './LizenzListe.astro';

const meta = {
  title: 'Organisms/LizenzListe',
  component: LizenzListe,
  tags: ['autodocs'],
};

export default meta;

// Mock Daten für Storybook
const mockLicenses = [
  {
    name: 'astro',
    version: '5.0.0',
    author: 'Fred K. Schott',
    licenseType: 'MIT',
    licenseUrl: 'https://github.com/withastro/astro/blob/main/LICENSE',
    description: 'The web framework that scales with you.',
  },
  {
    name: 'react',
    version: '18.3.0',
    author: 'Meta',
    licenseType: 'MIT',
    licenseUrl: 'https://github.com/facebook/react',
    description: 'A JavaScript library for building user interfaces',
  },
   {
    name: '@iconify-json/mingcute',
    version: '1.2.6',
    author: 'Richard Hor',
    licenseType: 'Apache-2.0',
    licenseUrl: 'https://github.com/Richard9394/MingCute',
    description: 'MingCute Icon',
  }
];

export const Standard = {
  args: {
    licenses: mockLicenses,
  },
};

export const Leer = {
  args: {
    licenses: [],
  },
};