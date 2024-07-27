import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button/button";

import React, { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  component: Button,
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
  },
  render: (args) => {
    return <Button {...args}>Test</Button>;
  },
};

export default meta;
