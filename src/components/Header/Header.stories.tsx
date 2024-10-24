import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta = {
  title: "jui/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    logo: "https://via.placeholder.com/100",
    logoPosition: "left",
    navItems: [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Services", href: "#" },
      { label: "Contact", href: "#" },
    ],
    hasDropdown: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "lg",
    logo: "https://via.placeholder.com/100",
    logoPosition: "center",
    navItems: [
      { label: "Home", href: "#" },
      { label: "Products", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Blog", href: "#" },
    ],
    hasDropdown: true,
  },
};

export const MobileView: Story = {
  args: {
    variant: "tertiary",
    size: "sm",
    hasDropdown: true,
    navItems: [
      { label: "Profile", href: "#" },
      { label: "Messages", href: "#" },
      { label: "Settings", href: "#" },
    ],
  },
};
