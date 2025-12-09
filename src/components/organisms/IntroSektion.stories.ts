import type { Meta, StoryObj } from "astrobook";
import IntroSektion from "./IntroSektion.astro";

const meta: Meta<typeof IntroSektion> = {
  title: "Organismus/IntroSektion",
  component: IntroSektion,
};

export default meta;

type Story = StoryObj<typeof IntroSektion>;

export const Standard: Story = {};
