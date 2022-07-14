import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button as AppButton } from '.'

export default {
  title: 'Components/Primitive/Button',
  component: AppButton,
  args: {
    children: 'Button',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof AppButton>

const Template: ComponentStory<typeof AppButton> = args => (
  <AppButton {...args} />
)

export const Button = Template.bind({})
