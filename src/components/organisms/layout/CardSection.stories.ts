import type { Meta, StoryObj } from 'astrobook';
import CardSection from './CardSection.astro';

type Component = typeof CardSection;

const meta: Meta<Component> = {
  title: 'Organisms/Layout/CardSection',
  component: CardSection,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      description: 'Padding-Größe',
      options: ['sm', 'md', 'lg', 'xl'],
      control: 'select',
    },
    elevated: {
      description: 'Erhöhter Schatten für Depth-Effekt',
      control: 'boolean',
    },
    background: {
      description: 'Hintergrundfarbe',
      options: ['surface', 'elevated', 'base'],
      control: 'select',
    },
  },
  args: {
    padding: 'lg',
    elevated: false,
    background: 'surface',
  },
};

export default meta;
type Story = StoryObj<Component>;

export const Default: Story = {
  name: 'Standard Card',
  args: {
    padding: 'lg',
    elevated: false,
  },
};

export const Elevated: Story = {
  name: 'Elevated Card',
  args: {
    padding: 'lg',
    elevated: true,
  },
};

export const SmallPadding: Story = {
  name: 'Mit kleinem Padding',
  args: {
    padding: 'sm',
  },
};

export const LargePadding: Story = {
  name: 'Mit großem Padding',
  args: {
    padding: 'xl',
  },
};

export const ElevatedBackground: Story = {
  name: 'Mit erhöhtem Hintergrund',
  args: {
    padding: 'lg',
    background: 'elevated',
  },
};
