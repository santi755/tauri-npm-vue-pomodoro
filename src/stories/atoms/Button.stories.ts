import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "../../components/atoms/Button.vue";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    text: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
