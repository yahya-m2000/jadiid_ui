import type { Meta, StoryObj } from "@storybook/react";
import Header from "../Header"; // Adjust the import path accordingly
import { ThemeProvider, defaultTheme } from "./context/ThemeProvider";
import React from "react";

const meta: Meta<typeof Header> = {
  title: "jui/Theme",
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "xl",
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

export const DarkTheme: Story = {
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
  decorators: [
    (Story) => (
      <ThemeProvider
        initialTheme={{
          ...defaultTheme,
          colors: {
            ...defaultTheme.colors,
            background: "#333333",
            text: "#ffffff",
          },
        }}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const SecondaryVariant: Story = {
  args: {
    variant: "secondary",
    size: "lg",
    logo: "https://via.placeholder.com/100",
    logoPosition: "right",
    navItems: [
      { label: "Home", href: "#" },
      { label: "Portfolio", href: "#" },
      { label: "Contact", href: "#" },
    ],
    hasDropdown: false,
  },
};

export const MobileView: Story = {
  args: {
    variant: "primary",
    size: "sm",
    logo: "https://via.placeholder.com/100",
    logoPosition: "left",
    navItems: [
      { label: "Profile", href: "#" },
      { label: "Messages", href: "#" },
      { label: "Notifications", href: "#" },
    ],
    hasDropdown: true,
  },
};
