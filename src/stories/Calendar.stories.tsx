import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@/components/calendar";
import { useState } from "react";

const meta = {
    title: "Calendar",
    component: Calendar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        className: {
            control: "text",
            description: "Custom Style to className",
        },
        showOutsideDays: {
            control: "boolean",
            description:
                "해당 월의 포함되지 않는 일자를 표시할건지에 대한 여부",
            defaultValue: true,
        },
    },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

const SingleCalendarWrapper = (args: React.ComponentProps<typeof Calendar>) => {
    const [selectedDate, setSelectedDate] = useState<Date>();

    return (
        <Calendar
            {...args}
            mode="single"
            selected={selectedDate}
            onSelect={(date) => setSelectedDate(date as Date)}
        />
    );
};

export const Default: Story = {
    render: (args) => <SingleCalendarWrapper {...args} />,
    args: {
        showOutsideDays: true,
    },
};