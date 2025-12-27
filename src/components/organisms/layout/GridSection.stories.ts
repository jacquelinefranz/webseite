import type { Meta, StoryObj } from 'astrobook';
import GridSection from './GridSection.astro';

type Component = typeof GridSection;

const meta: Meta<Component> = {
  title: 'Organisms/Layout/GridSection',
  component: GridSection,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: 'Spalten-Konfiguration',
      options: ['auto', 2, 3, 4, 12],
      control: 'select',
    },
    gap: {
      description: 'Abstand zwischen Items',
      options: ['sm', 'md', 'lg', 'xl'],
      control: 'select',
    },
    minWidth: {
      description: 'Minimale Item-Breite für auto-fit',
      control: 'text',
    },
  },
  args: {
    columns: 'auto',
    gap: 'lg',
    minWidth: 'clamp(280px, 100%, 350px)',
  },
};

export default meta;
type Story = StoryObj<Component>;

export const Auto: Story = {
  name: 'Auto-fit Layout',
  args: {
    columns: 'auto',
  },
};

export const TwoColumns: Story = {
  name: '2 Spalten',
  args: {
    columns: 2,
  },
};

export const ThreeColumns: Story = {
  name: '3 Spalten',
  args: {
    columns: 3,
  },
};

export const FourColumns: Story = {
  name: '4 Spalten',
  args: {
    columns: 4,
  },
};

export const TwelveColumns: Story = {
  name: '12-Column System',
  args: {
    columns: 12,
  },
};

export const SmallGap: Story = {
  name: 'Mit kleinem Abstand',
  args: {
    columns: 3,
    gap: 'sm',
  },
};
