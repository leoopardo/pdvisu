import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Example from "./Example";
import { SiderProps } from "../sider";
import { Icon } from "../../icons";

const meta: Meta = {
  title: "Layout/Sider",
  component: Example,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    open: true,
    routes: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: <Icon name="HomeIcon" />,
        disabled: true,
      },
      {
        key: "franquias",
        label: "Franquias",
        icon: <Icon name="BuildingStorefrontIcon" />,
      },
      {
        key: "terminais",
        label: "Terminais",
        icon: <Icon name="CalculatorIcon" />,
        childrens: [
          {
            key: "geral",
            label: "Geral",
          },
          {
            key: "pending",
            label: "Pendentes",
          },
        ],
      },
      {
        key: "usuarios",
        label: "Usuários",
        icon: <Icon name="UserIcon" />,
        childrens: [
          {
            key: "user-geral",
            label: "Geral",
          },
        ],
      },
    ],
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<SiderProps> = (args) => <Example {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
