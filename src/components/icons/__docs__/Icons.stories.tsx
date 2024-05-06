import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Icon, { IconProps } from "../icons";
import { ThemeProvider } from "../../../themeProvider";

const meta: Meta = {
  title: "Components/Icon",
  component: Icon,
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
  decorators: [
    (Story) => (
      <ThemeProvider theme={{ theme: Story().props.theme }}>
        {Story()}
      </ThemeProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
