import type { Meta, StoryObj } from "astrobook";
import BlogpostVorschau from "./BlogpostVorschau.astro";

const meta: Meta<typeof BlogpostVorschau> = {
  title: "Molekül/BlogpostVorschau",
  component: BlogpostVorschau,
  argTypes: {
    titel: {
      control: { type: "text" },
    },
    url: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BlogpostVorschau>;

export const Standard: Story = {
  args: {
    titel: "Mein erster Blogpost über die Webentwicklung",
    url: "/blog/erster-post",
  },
};
