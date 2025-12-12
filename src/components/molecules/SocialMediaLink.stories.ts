import SocialMediaLink from "./SocialMediaLink.astro";

const meta = { // Typisierung entfernt
  title: "Molekül/SocialMediaLink",
  component: SocialMediaLink,
  argTypes: {
    icon: {
      control: { type: "text" },
      description: "Name des Icons (z.B. lucide:linkedin)",
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

export const LinkedIn = { // Typisierung entfernt
  args: {
    icon: "lucide:linkedin",
    href: "https://www.linkedin.com/in/jacqueline-franz/",
    text: "LinkedIn",
  },
};

export const GitHub = { // Typisierung entfernt
    args: {
      icon: "lucide:github",
      href: "https://github.com/jacquelinefranz",
      text: "GitHub",
    },
  };
