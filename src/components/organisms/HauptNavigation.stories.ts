import type { Meta, StoryObj } from "astrobook";
import HauptNavigation from "./HauptNavigation.astro";
import Link from '../../atoms/Link.astro'; // Import Link here for use in the story

const meta: Meta<typeof HauptNavigation> = {
  title: "Organismus/HauptNavigation",
  component: HauptNavigation,
};

export default meta;

type Story = StoryObj<typeof HauptNavigation>;

export const Standard: Story = {
  args: {
    slots: {
      default: `
        <Link href="/">Startseite</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/kontakt">Kontakt</Link>
      `,
    },
  },
};