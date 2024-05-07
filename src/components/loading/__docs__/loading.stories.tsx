import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { LoadingProps } from "../loading";
import Example from "./Example";

const meta: Meta = {
  title: "Components/Loading",
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
    name: "AdjustmentsHorizontalIcon",
  },
};

export default meta;

const Template: StoryFn<LoadingProps> = (args) => <Example {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
