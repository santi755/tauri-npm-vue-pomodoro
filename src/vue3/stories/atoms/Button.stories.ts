import type { Meta, StoryObj } from '@storybook/vue3';

import AtomButton from '../../components/atoms/AtomButton.vue';

const meta = {
    title: 'Atoms/Button',
    component: AtomButton,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AtomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: () => ({
        components: { AtomButton },
        template: '<AtomButton class="bg-slate-500">Click!</AtomButton>',
    }),
};
