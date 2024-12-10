import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";

const meta = {
  title: "Bruno/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};
