import type { Meta, StoryObj } from "astrobook";
import SEO from "./SEO.astro";

const meta: Meta<typeof SEO> = {
  title: "Atom/SEO",
  component: SEO,
  argTypes: {
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    image: { control: { type: "text" } },
    url: { control: { type: "text" } },
    type: { control: { type: "select", options: ['website', 'article'] } },
  },
};

export default meta;

type Story = StoryObj<typeof SEO>;

export const Default: Story = {
  args: {
    title: "Startseite",
    description: "Willkommen auf meiner persönlichen Webseite über Webentwicklung und Blogbeiträge.",
    url: "https://www.jacquelinefranz.de/",
  },
};

export const BlogPost: Story = {
  args: {
    title: "Mein erster Blogpost: Die Reise beginnt",
    description: "Meine Gedanken zum Start dieser neuen Reise in die Webentwicklung.",
    image: "https://www.jacquelinefranz.de/og-image-blog.jpg",
    url: "https://www.jacquelinefranz.de/blog/mein-erster-blogpost",
    type: "article",
  },
};