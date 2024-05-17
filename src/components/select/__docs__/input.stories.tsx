import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Example from "./Example";
import { SelectProps } from "../Select";

const meta: Meta = {
  title: "Components/Select",
  component: Example,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  args: {
    options: [
      { label: "Option 1", value: "option 1" },
      { label: "Option 2", value: "option 2" },
      { label: "Option 3", value: "option 3" },
      { label: "Option 4", value: "option 4" },
      { label: "Option 5", value: "option 5" },
    ],
  },
};

export default meta;

const Template: StoryFn<SelectProps> = (args) => <Example {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
