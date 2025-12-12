import EmailLink from "./EmailLink.astro";

export default {
  title: "Molekül/EmailLink",
  component: EmailLink,
  argTypes: {
    email: {
      control: { type: "text" },
    },
  },
};

export const Standard = {
  args: {
    email: "hi@jacquelinefranz.de",
  },
};
