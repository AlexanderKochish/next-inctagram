import { Meta, StoryObj } from "@storybook/react";
import {SignInForm} from "./SignInForm";

const meta = {
    component: SignInForm,
    title: 'feature/auth/SignInForm',
    tags: ['autodocs'],
    argTypes: {
        onSubmit: {
            action: 'submit form',
            description: 'submit sign in form to server'
        },
        disabled: {
            control: 'boolean'
        }
    }
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => <SignInForm {...args}/>
}