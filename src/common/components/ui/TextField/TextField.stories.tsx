import { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'

const meta = {
  tags: ['autodocs'],
  args: {
    variant: 'default',
    control: { type: 'radio' },
  },
  component: TextField,
  title: 'Components/Input',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}
