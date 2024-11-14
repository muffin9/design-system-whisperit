import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../components/button";

const meta = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div style={{ width: "360px" }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        className: {
            control: "text",
            description: "Custom Style to className",
        },
        variant: {
            control: { type: "select" },
            options: [
                "default",
                "destructive",
                "outline",
                "secondary",
                "ghost",
                "link",
                "grey",
            ],
            description: "The button style variant",
        },
        size: {
            control: { type: "select" },
            options: ["default", "sm", "lg", "icon", "xl"],
            description: "The size of the button",
        },
        children: {
            control: "text",
            description: "버튼 텍스트",
            defaultValue: "Button",
        },
        asChild: {
            control: "boolean",
            description: "Render as a child element (used for custom elements)",
            defaultValue: false,
        },
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "ghost",
        size: "sm",
        children: "Default Button",
        className: "text-blue",
        asChild: false,
    },
};
