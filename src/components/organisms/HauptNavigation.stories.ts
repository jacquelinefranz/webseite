import type { Meta, StoryObj } from "astrobook";
import HauptNavigation from "./HauptNavigation.astro";

const meta: Meta<typeof HauptNavigation> = {
  title: "Organismus/HauptNavigation",
  component: HauptNavigation,
};

export default meta;

type Story = StoryObj<typeof HauptNavigation>;

export const Standard: Story = {};
