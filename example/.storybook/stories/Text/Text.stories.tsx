import type { Meta, ComponentStory } from '@storybook/react';
import { MuvText } from 'muv-ui';
import React from 'react';

export default {
    title: 'MuvText',
    component: MuvText,
} as Meta;

const Template: ComponentStory<typeof MuvText> = (args) => <MuvText {...args} />;

export const Regular = Template.bind({});
Regular.args = {
    children: 'Regular Text',
    size: 'md',
    weight: 'regular',
    color: 'text',
};

export const LargeBold = Template.bind({});
LargeBold.args = {
    children: 'Large Bold Text',
    size: '2xl',
    weight: 'bold',
    color: 'primary',
};

export const SmallItalic = Template.bind({});
SmallItalic.args = {
    children: 'Small Italic Text',
    size: 'sm',
    weight: 'italic',
    color: 'black',
};