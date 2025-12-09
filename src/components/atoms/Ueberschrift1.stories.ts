import type { Meta, StoryObj } from "astrobook";
import Ueberschrift1 from "./Ueberschrift1.astro";

const meta: Meta<typeof Ueberschrift1> = {
  title: "Atom/Ueberschrift (H1)",
  component: Ueberschrift1,
  argTypes: {
    inhalt: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Ueberschrift1>;

export const Standard: Story = {
  args: {
    inhalt: "Dies ist eine Hauptüberschrift (H1)",
  },
};
