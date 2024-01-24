import type { Meta, StoryObj } from '@storybook/vue3';

import AtomTag from '../../components/atoms/AtomTag.vue';

const meta = {
    title: 'Atoms/Tag',
    component: AtomTag,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        tag: 'Tag',
        tagType: 2,
    },
} satisfies Meta<typeof AtomTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
