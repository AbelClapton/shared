import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../../lib/components/Label'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
}

export const Required: Story = {
  args: {
    children: 'Name *',
    htmlFor: 'name-input',
  },
}

export const FormField: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email-input',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Story />
        <input id="email-input" type="email" placeholder="Enter email" />
      </div>
    ),
  ],
}

export const DisabledField: Story = {
  args: {
    children: 'Disabled Field',
    htmlFor: 'disabled-input',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Story />
        <input id="disabled-input" disabled placeholder="Disabled" />
      </div>
    ),
  ],
}

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Styled Label',
    className: 'custom-class',
  },
}
