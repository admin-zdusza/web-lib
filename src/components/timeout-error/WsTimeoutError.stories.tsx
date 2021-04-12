import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { WsTimeoutError, WsTimeoutErrorProps } from './WsTimeoutError';

export default {
  title: 'ClosableTimeoutError',
  component: WsTimeoutError,
  description: `A timeout error!`,
  argTypes: {},
} as Meta;

const Template: Story<WsTimeoutErrorProps> = (args) => <WsTimeoutError {...args}/>;

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
