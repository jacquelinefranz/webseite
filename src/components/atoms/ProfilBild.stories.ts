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
    src: "/jacquelinefranz_profile.jpeg",
    alt: "Profilbild von Jacqueline Franz",
  },
};
