import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";

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
        title: {
            control: "text",
            description: "모달의 제목",
            defaultValue: "Default Modal Title",
        },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        triggerElement: <Button>Trigger</Button>,
        title: "Sample Modal Title",
    },
};

export const CustomContent: Story = {
    args: {
        triggerElement: <Button>Trigger</Button>,
        title: "Custom Content Modal",
        children: (
            <div>
                <p>Custom modal content</p>
                <button style={{ marginTop: "16px" }}>Custom Button</button>
            </div>
        ),
    },
};
