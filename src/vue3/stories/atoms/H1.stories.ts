import type { Meta, StoryObj } from '@storybook/vue3';

import AtomH1 from '../../components/atoms/AtomH1.vue';

const meta = {
    title: 'Atoms/AtomH1',
    component: AtomH1,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AtomH1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: () => ({
        components: { AtomH1 },
        template: '<AtomH1>Título</AtomH1>',
    }),
};
