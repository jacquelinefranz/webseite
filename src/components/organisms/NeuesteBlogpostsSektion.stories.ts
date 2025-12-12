import NeuesteBlogpostsSektion from "./NeuesteBlogpostsSektion.astro";

export default {
  title: "Organismus/NeuesteBlogpostsSektion",
  component: NeuesteBlogpostsSektion,
};

export const Standard = {};

export const CustomTitle = {
  args: {
    sectionTitle: "Meine allerneuesten Beiträge",
  },
};
