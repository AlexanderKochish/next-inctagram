import { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta = {
  component: Card,
  title: 'Components/Card',
  argTypes: {
    children: {
      defaultValue: 'some text',
      description: 'card children element',
      control: 'text',
    },
    as: {
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Card>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    as: 'div',
  },
  parameters: {
    layout: 'centered',
  },
}
