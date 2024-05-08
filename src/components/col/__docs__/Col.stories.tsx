import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Example from "./Example";
import { ColProps } from "../col";

const meta: Meta = {
  title: "Layout/Col",
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
};

export default meta;

const Template: StoryFn<ColProps> = (args) => <Example {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
