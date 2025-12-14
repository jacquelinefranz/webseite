import ThemeSchalter from "./ThemeSchalter.astro";

const meta = {
  title: "Molekül/ThemeSchalter",
  component: ThemeSchalter,
  argTypes: {
    aktuellesThema: {
      control: { type: "select" },
      options: ['light', 'dark'],
      description: "Der aktuell aktive Theme-Modus",
    },
  },
};

export default meta;

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