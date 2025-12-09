import type { Meta, StoryObj } from "astrobook";
import Link from "./Link.astro";

const meta: Meta<typeof Link> = {
  title: "Atom/Link",
  component: Link,
  argTypes: {
    href: {
      control: { type: "text" },
    },
    text: {
      control: { type: "text" },
    },
    ziel: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Intern: Story = {
  args: {
    href: "/interne-seite",
    text: "Interner Link",
  },
};

export const Extern: Story = {
  args: {
    href: "https://astro.build/",
    text: "Externer Link zu Astro",
    ziel: "_blank",
  },
};
