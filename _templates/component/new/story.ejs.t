---
to: src/components/<%= Name %>/<%= Name %>.stories.tsx
---
import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import <%= Name %>, { <%= Name %>Props } from "./<%= Name %>";
 
export default {
  title: "Components/<%= Name %>",
  component: <%= Name %>,
} as Meta;
 
const Template: Story<<%= Name %>Props> = (args) => <<%= Name %> {...args} />;
 
export const Primary = Template.bind({});
Primary.args = {};
