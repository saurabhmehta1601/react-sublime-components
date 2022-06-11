import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NeonGlowText } from '../components/NeonGlowText'
export default {
  title: 'Text/NeonGlowText',
  component: NeonGlowText,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof NeonGlowText>

const Template: ComponentStory<typeof NeonGlowText> = (args) => (
  <NeonGlowText {...args}>Hello</NeonGlowText>
)

export const Basic = Template.bind({})
