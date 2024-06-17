import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onPress: fn(),
    children: <span>Hello World</span>,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: "info",
  },
};

export const Success: Story = {
  args: {
    type: "success",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
  },
};
