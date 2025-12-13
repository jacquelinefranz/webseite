import HauptNavigation from "./HauptNavigation.astro";

export default {
  title: "Organismus/HauptNavigation",
  component: HauptNavigation,
};

export const Standard = {
  args: {
    slots: {
      default: `
        <a href="/">Startseite</a>
        <a href="/blog">Blog</a>
        <a href="/kontakt">Kontakt</a>
      `,
    },
  },
};