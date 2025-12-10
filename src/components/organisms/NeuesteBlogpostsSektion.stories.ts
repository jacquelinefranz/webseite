import type { Meta, StoryObj } from "astrobook";
import NeuesteBlogpostsSektion from "./NeuesteBlogpostsSektion.astro";

const meta: Meta<typeof NeuesteBlogpostsSektion> = {
  title: "Organismus/NeuesteBlogpostsSektion",
  component: NeuesteBlogpostsSektion,
};

export default meta;

type Story = StoryObj<typeof NeuesteBlogpostsSektion>;

export const Standard: Story = {};

export const CustomTitle: Story = {
  args: {
    sectionTitle: "Meine allerneuesten Beiträge",
  },
};
