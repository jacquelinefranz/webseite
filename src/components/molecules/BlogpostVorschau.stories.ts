import BlogpostVorschau from "./BlogpostVorschau.astro";

export default {
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

export const Standard = {
  args: {
    titel: "Mein erster Blogpost über die Webentwicklung",
    url: "/blog/erster-post",
  },
};
