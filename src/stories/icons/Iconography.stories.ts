import type { Meta, StoryObj } from '@storybook/vue3';

import Iconography from '../../components/icons/Iconography.vue';

const meta = {
    title: 'Icons/Iconography',
    component: Iconography,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Iconography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
