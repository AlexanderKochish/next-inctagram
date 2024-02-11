import { Meta, StoryObj } from '@storybook/react';
import { Input } from './TextField';

const meta = {
    tags: ['autodocs'],
    args: {
        variant: 'default',
        control: { type: 'radio' }
    },
    component: Input,
    title: 'Components/Input'
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        variant: 'default'
    }
}
