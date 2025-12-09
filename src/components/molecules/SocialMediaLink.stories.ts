import type { Meta, StoryObj } from "astrobook";
import SocialMediaLink from "./SocialMediaLink.astro";

const meta: Meta<typeof SocialMediaLink> = {
  title: "Molekül/SocialMediaLink",
  component: SocialMediaLink,
  argTypes: {
    icon: {
      control: { type: "text" },
    },
    href: {
      control: { type: "text" },
    },
    text: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SocialMediaLink>;

export const LinkedIn: Story = {
  args: {
    icon: "💼",
    href: "https://www.linkedin.com/in/jacqueline-franz/",
    text: "LinkedIn",
  },
};

export const GitHub: Story = {
    args: {
      icon: "💻",
      href: "https://github.com/jacquelinefranz",
      text: "GitHub",
    },
  };
