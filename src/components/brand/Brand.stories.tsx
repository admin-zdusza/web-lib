import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Brand, BrandProps } from "./Brand";

export default {
  title: "Brand",
  component: Brand,
  description: `A brand!`,
  argTypes: {
    appName: { control: "string" },
  },
} as Meta;

const Template: Story<BrandProps> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  viewMode: "canvas",
  docs: {
    page: null,
  },
};
Default.args = {
  appName: "Monitoring",
};
