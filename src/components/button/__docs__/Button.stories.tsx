import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../../../themeProvider";
import { ButtonProps } from "../button";
import Example from "./Example";

const meta: Meta = {
  title: "Components/Button",
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
    children: "Button",
    text: "button",
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {Story()}
      </ThemeProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Example {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
