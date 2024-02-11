import { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'


const meta = {
    argTypes:{
        variant: {
            options: ['large', 'h1', 'h2', 'h3', 'regular16', 'regularBold16', 'regular14', 'regularMedium14', 'regularBold14', 'small', 'smallSemiBold', 'regularLink', 'smallLink'],
            control: { type: 'radio' }
        }
    },
    component: Typography,
    title: 'Components/Typography'
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
    args: {
        variant: 'large',
        children: 'lorem insput test'
    }
}