import type { Meta, StoryObj } from "astrobook";
import KontaktSektion from "./KontaktSektion.astro";
import SocialMediaLink from '../molecules/SocialMediaLink.astro'; // Import for use in story

const meta: Meta<typeof KontaktSektion> = {
  title: "Organismus/KontaktSektion",
  component: KontaktSektion,
  argTypes: {
    email: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof KontaktSektion>;

export const Standard: Story = {
  args: {
    email: "hi@jacquelinefranz.de",
    slots: {
      default: `
        <SocialMediaLink icon="🐦" href="https://twitter.com/digitalerPanda" text="X/Twitter: @digitalerPanda" />
        <SocialMediaLink icon="💼" href="https://www.linkedin.com/in/jacqueline-franz/" text="LinkedIn: Jacqueline Franz" />
      `,
    },
  },
};
