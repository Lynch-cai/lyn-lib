import { Meta, StoryObj } from "@storybook/vue3";
import LynIcon from "./LynIcon.vue";
import { Name, Size, Color } from "./types";
import { Source } from "@storybook/blocks";

type Story = StoryObj<typeof LynIcon>;

const meta: Meta<typeof LynIcon> = {
    title: "LynIcon",
    component: LynIcon,
    tags: ["autodocs"],
    argTypes: {
        name: { options: Name },
        size: { options: Size },
        color: { options: Color },
    },
    parameters: {
        docs: {
            source: Source,
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        size: Size["16px"],
        name: Name["arrow-down"],
        color: Color["grey400"],
    },
};

export const Small: Story = {
    args: {
        size: Size["12px"],
        name: Name["arrow-down"],
        color: Color["grey400"],
    },
};

export const Big: Story = {
    args: {
        size: Size["24px"],
        name: Name["arrow-down"],
        color: Color["grey400"],
    },
};

export const Blue: Story = {
    args: {
        size: Size["16px"],
        name: Name["arrow-down"],
        color: Color["primary-blue"],
    },
};
