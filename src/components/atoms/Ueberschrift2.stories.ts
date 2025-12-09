import type { Meta, StoryObj } from "astrobook";
import Ueberschrift2 from "./Ueberschrift2.astro";

const meta: Meta<typeof Ueberschrift2> = {
  title: "Atom/Ueberschrift (H2)",
  component: Ueberschrift2,
  argTypes: {
    inhalt: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Ueberschrift2>;

export const Standard: Story = {
  args: {
    inhalt: "Dies ist eine Unterüberschrift (H2)",
  },
};
