import type { Meta, StoryObj } from '@storybook/vue3';

import AtomH2 from '../../components/atoms/AtomH2.vue';

const meta = {
    title: 'Atoms/AtomH2',
    component: AtomH2,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AtomH2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: () => ({
        components: { AtomH2 },
        template: '<AtomH2>Subtítulo</AtomH2>',
    }),
};
