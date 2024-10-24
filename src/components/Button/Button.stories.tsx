import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./Button";

const meta = {
  title: "jui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Hello World",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Click Me",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete",
    variant: "danger",
  },
};

export const LargeRoundedPrimary: Story = {
  args: {
    label: "Large Button",
    variant: "primary",
    size: "lg",
    rounded: "lg",
  },
};

export const CustomColorBoldShadow: Story = {
  args: {
    label: "Custom Button",
    color: "#ff5733",
    fontColor: "#ffffff",
    fontWeight: "bold",
    dropShadow: true,
  },
};

export const StrokeAll: Story = {
  args: {
    label: "Button with Stroke",
    variant: "secondary",
    stroke: "all",
  },
};

export const FullRoundedXLarge: Story = {
  args: {
    label: "Full Rounded Button",
    variant: "primary",
    size: "xl",
    rounded: "full",
  },
};
