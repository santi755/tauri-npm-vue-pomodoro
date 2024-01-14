import type { Meta, StoryObj } from '@storybook/vue3';

import AtomRangeSlider from '../../components/atoms/AtomRangeSlider.vue';

const meta = {
    title: 'Atoms/RangeSlider',
    component: AtomRangeSlider,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AtomRangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
