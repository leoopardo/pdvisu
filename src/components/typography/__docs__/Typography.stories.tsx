import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { TypographyProps } from "../typography";
import Example from "./Example";

const meta: Meta = {
  title: "Base/Typography",
  component: Example,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "Texto",
    theme: "light",
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<TypographyProps> = (args) => <Example {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
