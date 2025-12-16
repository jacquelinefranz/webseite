import ProfilBild from "./ProfilBild.astro";

export default {
  title: "Atom/ProfilBild",
  component: ProfilBild,
  argTypes: {
    src: { control: { type: "text" } },
    alt: { control: { type: "text" } },
  },
};

export const Default = {
  args: {
    alt: "Profilbild von Jacqueline Franz",
  },
};
