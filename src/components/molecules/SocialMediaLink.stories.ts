import SocialMediaLink from "./SocialMediaLink.astro";

export default {
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

export const LinkedIn = {
  args: {
    icon: "💼",
    href: "https://www.linkedin.com/in/jacqueline-franz/",
    text: "LinkedIn",
  },
};

export const GitHub = {
    args: {
      icon: "💻",
      href: "https://github.com/jacquelinefranz",
      text: "GitHub",
    },
  };
