import type { Meta, StoryObj } from 'astrobook';
import SectionHeading from './SectionHeading.astro';

type Component = typeof SectionHeading;

const meta: Meta<Component> = {
  title: 'Molecules/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Haupttitel der Sektion',
      control: 'text',
    },
    subtitle: {
      description: 'Optionaler Untertitel',
      control: 'text',
    },
    alignment: {
      description: 'Text-Ausrichtung',
      options: ['left', 'center'],
      control: 'select',
    },
  },
  args: {
    title: 'Sektions-Überschrift',
    subtitle: 'Optionale Beschreibung oder Untertitel',
    alignment: 'center',
  },
};

export default meta;
type Story = StoryObj<Component>;

export const Center: Story = {
  name: 'Center Alignment',
  args: {
    title: 'Zentriert ausgerichtet',
    subtitle: 'Mit optional Untertitel',
    alignment: 'center',
  },
};

export const Left: Story = {
  name: 'Left Alignment',
  args: {
    title: 'Links ausgerichtet',
    subtitle: 'Mit Untertitel',
    alignment: 'left',
  },
};

export const WithoutSubtitle: Story = {
  name: 'Ohne Untertitel',
  args: {
    title: 'Nur Überschrift',
    alignment: 'center',
  },
};
