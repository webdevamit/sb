import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const meta = {
  title: "Bruno/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState<"secondary" | "default">("secondary");

  // Sets a click handler to change the label's value
  const handleOnClick = () => {
    if (value === "secondary") {
      setValue("default");
    } else {
      setValue("secondary");
    }
  };
  return (
    <Button variant={value} onClick={handleOnClick}>
      {value}
    </Button>
  );
};

export const ButtonWithHook: Story = {
  render: () => <ButtonWithHooks />,
};
