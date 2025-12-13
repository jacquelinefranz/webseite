import KontaktSektion from "./KontaktSektion.astro";

export default {
  title: "Organismus/KontaktSektion",
  component: KontaktSektion,
  argTypes: {
    email: { control: { type: "text" } },
  },
};

export const Standard = {
  args: {
    email: "hi@jacquelinefranz.de",
    slots: {
      default: `
        <div class="social-links">
          <!-- Placeholder content for slot -->
          <p>X/Twitter: @digitalerPanda</p>
          <p>LinkedIn: Jacqueline Franz</p>
        </div>
      `,
    },
  },
};
