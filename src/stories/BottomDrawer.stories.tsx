import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

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
        isOpen: {
            control: "boolean",
            description: "Bottom Drawer의 열림/닫힘 상태를 제어",
            defaultValue: false,
        },
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
        children: {
            control: "text",
            description: "BottomDrawer 내부의 컨텐츠",
            defaultValue: "This is the default BottomDrawer content.",
        },
        onOpenChange: {
            action: "onOpenChange",
            description: "BottomDrawer 상태 변경 시 호출되는 콜백 함수",
        },
    },
    args: { onOpenChange: fn() },
} satisfies Meta<typeof BottomDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        title: "Sample BottomDrawer Title",
        description: "Sample BottomDrawer description",
        children: "This is a sample BottomDrawer contents.",
    },
};

export const EmptyHeader: Story = {
    args: {
        isOpen: true,
        children: (
            <div>
                <Button variant="destructive">Custom Button</Button>
            </div>
        ),
    },
};

export const CustomContent: Story = {
    args: {
        isOpen: true,
        title: "Custom Content BottomDrawer",
        children: (
            <div>
                <p>Custom BottomDrawer content</p>
                <Button variant="destructive">Custom Button</Button>
            </div>
        ),
    },
};
