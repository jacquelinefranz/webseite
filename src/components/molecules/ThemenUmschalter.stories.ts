import ThemenUmschalter from "./ThemenUmschalter.astro";

const meta = {
  title: "Molekül/ThemenUmschalter",
  component: ThemenUmschalter,
  argTypes: {
    aktuellesThema: {
      control: { type: "select" },
      options: ['light', 'dark', 'system'],
      description: "Der aktuell aktive Theme-Modus",
    },
  },
};

export default meta;

export const System = {
  args: {
    aktuellesThema: 'system',
  },
};

export const Light = {
  args: {
    aktuellesThema: 'light',
  },
};

export const Dark = {
  args: {
    aktuellesThema: 'dark',
  },
};