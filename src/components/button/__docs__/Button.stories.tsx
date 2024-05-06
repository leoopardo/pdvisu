import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../../../themeProvider";
import Button, { ButtonProps } from "../button";
import Icon from "../../icons/icons";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
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
    variant: "filled",
    iconPosition: "right",
    size: "medium",
    style: { width: "200px" },
    text: "button",
    icon: <Icon name="ArrowRightIcon" />,
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={{ theme: "dark" }}>{Story()}</ThemeProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
