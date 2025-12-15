import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../lib/components/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Click me',
  },
}

export const Submit: Story = {
  args: {
    children: 'Submit',
    htmlType: 'submit',
  },
}

export const Cancel: Story = {
  args: {
    children: 'Cancel',
    htmlType: 'button',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Styled Button',
    className: 'custom-class',
  },
}
