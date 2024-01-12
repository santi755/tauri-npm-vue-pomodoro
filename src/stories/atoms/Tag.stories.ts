import type { Meta, StoryObj } from "@storybook/vue3";

import Tag from "../../components/atoms/Tag.vue";

const meta = {
  title: "Atoms/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    tag: "Tag",
    tagType: 2,
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
