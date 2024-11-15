import type { Meta, StoryObj } from "@storybook/react";

import { BottomDrawer } from "@/components/BottomDrawer";
import { Button } from "@/components/Button";

const meta = {
    title: "BottomDrawer",
    component: BottomDrawer,
    parameters: {
        layout: "full",
        docs: { disable: true },
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        title: {
            control: "text",
            description: "Bottom Drawer의 제목",
            defaultValue: "Default BottomDrawer Title",
        },
        description: {
            control: "text",
            description: "Bottom Drawer의 des",
            defaultValue: "Default BottomDrawer Description",
        },
    },
} satisfies Meta<typeof BottomDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        triggerElement: <Button>Show Drawer</Button>,
        title: "Sample BottomDrawer Title",
        description: "Sample BottomDrawer description",
        children: "This is a sample BottomDrawer contents.",
    },
};

export const EmptyHeader: Story = {
    args: {
        triggerElement: <Button>Show Drawer</Button>,
        children: (
            <div>
                <p>Contents........</p>
                <Button variant="destructive">Custom Button</Button>
            </div>
        ),
    },
};

export const CustomContent: Story = {
    args: {
        triggerElement: <Button>Show Drawer</Button>,
        children: (
            <div>
                <p>Custom BottomDrawer content</p>
                <Button variant="destructive">Custom Button</Button>
            </div>
        ),
    },
};
