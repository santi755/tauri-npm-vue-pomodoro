import type { Meta, StoryObj } from "@storybook/vue3";

import RangeSlider from "../../components/atoms/RangeSlider.vue";

const meta = {
  title: "Atoms/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
