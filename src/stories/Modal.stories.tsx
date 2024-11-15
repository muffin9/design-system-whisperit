import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Modal } from "@/components/Modal";

const meta = {
    title: "Modal",
    component: Modal,
    parameters: {
        layout: "centered",
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
            description: "모달의 열림/닫힘 상태를 제어",
            defaultValue: false,
        },
        title: {
            control: "text",
            description: "모달의 제목",
            defaultValue: "Default Modal Title",
        },
        children: {
            control: "text",
            description: "모달 내부의 컨텐츠",
            defaultValue: "This is the default modal content.",
        },
        onOpenChange: {
            action: "onOpenChange",
            description: "모달 상태 변경 시 호출되는 콜백 함수",
        },
    },
    args: { onOpenChange: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        title: "Sample Modal Title",
        children: "This is a sample modal content.",
    },
};

export const CustomContent: Story = {
    args: {
        isOpen: true,
        title: "Custom Content Modal",
        children: (
            <div>
                <p>Custom modal content</p>
                <button style={{ marginTop: "16px" }}>Custom Button</button>
            </div>
        ),
    },
};
