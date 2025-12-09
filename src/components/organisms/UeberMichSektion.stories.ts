import type { Meta, StoryObj } from "astrobook";
import UeberMichSektion from "./UeberMichSektion.astro";

const meta: Meta<typeof UeberMichSektion> = {
  title: "Organismus/UeberMichSektion",
  component: UeberMichSektion,
};

export default meta;

type Story = StoryObj<typeof UeberMichSektion>;

export const Standard: Story = {};
