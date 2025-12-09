import type { Meta, StoryObj } from "astrobook";
import Absatz from "./Absatz.astro";

const meta: Meta<typeof Absatz> = {
  title: "Atom/Absatz",
  component: Absatz,
  argTypes: {
    inhalt: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Absatz>;

export const Standard: Story = {
  args: {
    inhalt: "Dies ist ein Standard-Absatztext. Er kann verwendet werden, um längere Textblöcke darzustellen und die Lesbarkeit zu gewährleisten. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};
