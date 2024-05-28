import type { Meta, ComponentStory } from '@storybook/react';
import { MuvButton, VARIANTS } from '../../../components/molecules/MuvButton';
import React from 'react';
const iconCorp = require('assets/images/icon-briefcase-selected.png');


export default {
  title: 'MuvButton',
  component: MuvButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
} as Meta;

const Template: ComponentStory<typeof MuvButton> = (args) => <MuvButton {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled Button',
  variant: VARIANTS.FILLED,
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Button',
  variant: VARIANTS.OUTLINE,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  variant: VARIANTS.FILLED,
  disabled: true,
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  label: 'Button with Icon',
  variant: VARIANTS.FILLED,
  iconLeft: iconCorp, // replace with actual path to icon
};
export const WithIconRight = Template.bind({});
WithIconRight.args = {
  label: 'Button with Icon',
  variant: VARIANTS.FILLED,
  iconRight: iconCorp, // replace with actual path to icon
};
