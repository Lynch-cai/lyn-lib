import { Meta, StoryObj } from "@storybook/vue3";
import LynError from "./LynError.vue";
import { Source } from "@storybook/blocks";
import { Size } from "./types";

type Story = StoryObj<typeof LynError>;

const meta: Meta<typeof LynError> = {
    title: "LynError",
    component: LynError,
    tags: ["autodocs"],
    argTypes: {
        hasError: { control: "boolean" },
        errorMsg: {},
        size: { options: Size },
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
        hasError: true,
        errorMsg: "Error message",
        size: Size.medium,
    },
};

export const Small: Story = {
    args: {
        hasError: true,
        errorMsg: "Error message",
        size: Size.small,
    },
};
