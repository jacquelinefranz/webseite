import LizenzEintrag from './LizenzEintrag.astro';

const meta = {
  title: 'Molecules/LizenzEintrag',
  component: LizenzEintrag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const MITLizenz = {
  args: {
    lizenz: {
      name: 'astro',
      author: 'Fred K. Schott',
      licenseType: 'MIT',
      licenseUrl: 'https://github.com/withastro/astro/blob/main/LICENSE',
      description: 'The web framework that scales with you.',
    },
  },
};

export const ApacheLizenz = {
  args: {
    lizenz: {
      name: 'mingcute-icon',
      author: 'Richard Hor',
      licenseType: 'Apache-2.0',
      licenseUrl: 'https://github.com/Richard9394/MingCute/blob/main/LICENSE',
      description: 'A simple and exquisite open-source icon library.',
    },
  },
};
