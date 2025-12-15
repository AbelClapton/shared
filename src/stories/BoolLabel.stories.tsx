import type { Meta, StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import { BoolLabel } from '../../lib/components/BoolLabel'
import { BoolLabelType } from '../../lib/constants'
import { defaultLocale, getMessages } from '../../lib/i18n'

const messages = getMessages(defaultLocale)

const meta = {
  title: 'Components/BoolLabel',
  component: BoolLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: [BoolLabelType.YesNo, BoolLabelType.PassFail],
    },
    value: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <IntlProvider locale={defaultLocale} messages={messages}>
        <Story />
      </IntlProvider>
    ),
  ],
} satisfies Meta<typeof BoolLabel>

export default meta
type Story = StoryObj<typeof meta>

export const YesNo: Story = {
  args: {
    type: BoolLabelType.YesNo,
    value: true,
  },
}

export const YesNoFalse: Story = {
  args: {
    type: BoolLabelType.YesNo,
    value: false,
  },
  name: 'YesNo - False',
}

export const PassFail: Story = {
  args: {
    type: BoolLabelType.PassFail,
    value: true,
  },
}

export const PassFailFalse: Story = {
  args: {
    type: BoolLabelType.PassFail,
    value: false,
  },
  name: 'PassFail - False',
}

export const Undefined: Story = {
  args: {
    value: undefined,
  },
  name: 'Undefined Value',
}
