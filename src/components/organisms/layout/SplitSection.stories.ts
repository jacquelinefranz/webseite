import type { Meta, StoryObj } from 'astrobook';
import SplitSection from './SplitSection.astro';

type Component = typeof SplitSection;

const meta: Meta<Component> = {
  title: 'Organisms/Layout/SplitSection',
  component: SplitSection,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      description: 'Spalten-Verhältnis',
      options: ['50-50', '60-40', '40-60'],
      control: 'select',
    },
    reverse: {
      description: 'Spalten umkehren',
      control: 'boolean',
    },
    gap: {
      description: 'Abstand zwischen Spalten',
      options: ['sm', 'md', 'lg', 'xl'],
      control: 'select',
    },
  },
  args: {
    ratio: '50-50',
    reverse: false,
    gap: 'lg',
  },
};

export default meta;
type Story = StoryObj<Component>;

export const Equal: Story = {
  name: '50-50 Split',
  args: {
    ratio: '50-50',
  },
};

export const SixtyForty: Story = {
  name: '60-40 Split',
  args: {
    ratio: '60-40',
  },
};

export const FortySixty: Story = {
  name: '40-60 Split',
  args: {
    ratio: '40-60',
  },
};

export const Reversed: Story = {
  name: 'Reversed Layout',
  args: {
    ratio: '60-40',
    reverse: true,
  },
};

export const WithSmallGap: Story = {
  name: 'Mit kleinem Abstand',
  args: {
    gap: 'sm',
  },
};
