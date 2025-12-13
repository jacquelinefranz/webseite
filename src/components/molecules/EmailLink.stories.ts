import EmailLink from "./EmailLink.astro";

const meta = { // Typisierung entfernt
  title: "Molekül/EmailLink",
  component: EmailLink,
  argTypes: {
    email: {
      control: { type: "text" },
    },
  },
};

export default meta;

export const Standard = { // Typisierung entfernt
  args: {
    email: "hi@jacquelinefranz.de",
  },
};
