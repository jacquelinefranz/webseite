import SEO from "./SEO.astro";

export default {
  title: "Atom/SEO",
  component: SEO,
  argTypes: {
    titel: { control: { type: "text" } },
    beschreibung: { control: { type: "text" } },
    bild: { control: { type: "text" } },
    url: { control: { type: "text" } },
    typ: { control: { type: "select", options: ['website', 'article'] } },
  },
};

export const Default = {
  args: {
    titel: "Startseite",
    beschreibung: "Willkommen auf meiner persönlichen Webseite über Webentwicklung und Blogbeiträge.",
    url: "https://www.jacquelinefranz.de/",
  },
};

export const BlogPost = {
  args: {
    titel: "Mein erster Blogpost: Die Reise beginnt",
    beschreibung: "Meine Gedanken zum Start dieser neuen Reise in die Webentwicklung.",
    bild: "https://www.jacquelinefranz.de/og-image-blog.jpg",
    url: "https://www.jacquelinefranz.de/blog/mein-erster-blogpost",
    typ: "article",
  },
};