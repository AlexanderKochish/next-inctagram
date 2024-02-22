import { Meta, StoryObj } from '@storybook/react'
import Dialog from './Dialog'
import { Button } from '../Button/Button'
import { DialogClose } from './DialogClose/DialogClose'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    title: 'Email Sent',
    children: (
      <>
        <p>Some text shvepsolek@gmail.com</p>
        <DialogClose>
          <Button>OK</Button>
        </DialogClose>
      </>
    ),
  },
}
