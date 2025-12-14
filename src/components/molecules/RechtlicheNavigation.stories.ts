import RechtlicheNavigation from './RechtlicheNavigation.astro';

const meta = {
  title: 'Molecules/RechtlicheNavigation',
  component: RechtlicheNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Standard = {
  args: {},
};

export const NurImpressumUndDatenschutz = {
  args: {
    links: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
};