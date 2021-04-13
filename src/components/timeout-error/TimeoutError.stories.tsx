import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TimeoutError, TimeoutErrorProps } from './TimeoutError';

export default {
  title: 'ClosableTimeoutError',
  component: TimeoutError,
  description: `A timeout error!`,
  argTypes: {},
} as Meta;

const Template: Story<TimeoutErrorProps> = (args) => <TimeoutError {...args}/>;

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
