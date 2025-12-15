import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../lib/components/Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
    type: 'text',
  },
}

export const WithValue: Story = {
  args: {
    placeholder: 'Enter text here',
    value: 'Sample text',
    readOnly: true,
  },
}

export const Email: Story = {
  args: {
    placeholder: 'Enter your email',
    type: 'email',
  },
}

export const Password: Story = {
  args: {
    placeholder: 'Enter your password',
    type: 'password',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const Number: Story = {
  args: {
    placeholder: 'Enter a number',
    type: 'number',
    min: 0,
    max: 100,
  },
}
