import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { UnexpectedError, UnexpectedErrorProps } from './UnexpectedError';

export default {
  title: 'UnexpectedError',
  component: UnexpectedError,
  description: `An unexpected error!`,
  argTypes: {},
} as Meta;

const Template: Story<UnexpectedErrorProps> = (args) => <UnexpectedError {...args}/>;

export const Closable = Template.bind({});
Closable.parameters = {
  viewMode: 'canvas',
  docs: {
    page: null
  }
};

Closable.args = {
  closable: true,
};

export const NonClosable = Template.bind({});
NonClosable.parameters = {
  viewMode: 'canvas',
  docs: {
    page: null
  }
};

NonClosable.args = {
  closable: false,
};
