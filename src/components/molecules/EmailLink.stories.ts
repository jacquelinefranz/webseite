import type { Meta, StoryObj } from "astrobook";
import EmailLink from "./EmailLink.astro";

const meta: Meta<typeof EmailLink> = {
  title: "Molekül/EmailLink",
  component: EmailLink,
  argTypes: {
    email: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmailLink>;

export const Standard: Story = {
  args: {
    email: "hi@jacquelinefranz.de",
  },
};
