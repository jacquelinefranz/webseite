import type { Meta, StoryObj } from "astrobook";
import KontaktSektion from "./KontaktSektion.astro";

const meta: Meta<typeof KontaktSektion> = {
  title: "Organismus/KontaktSektion",
  component: KontaktSektion,
};

export default meta;

type Story = StoryObj<typeof KontaktSektion>;

export const Standard: Story = {};
