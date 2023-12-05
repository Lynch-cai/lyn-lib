import { Meta, StoryObj } from "@storybook/vue3";
import LynCheckbox from "./LynCheckbox.vue";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynCheckbox>;

const meta: Meta<typeof LynCheckbox> = {
    title: "LynCheckbox",
    component: LynCheckbox,
    tags: ["autodocs"],
    argTypes: {
        value: { control: "boolean" },
        label: {},
        id: {},
        required: { control: "boolean" },
        hasError: { control: "boolean" },
        errorMsg: {},
    },
    parameters: {
        docs: {
            source: {
                transform: (src: string) => {
                    src = StorybookSourceUtils.convertValueToModelValue(src, "boolean");
                    return src;
                },
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        value: false,
        label: "Default",
        id: "default",
        required: false,
        hasError: false,
        errorMsg: "Error message",
    },
};

export const Checked: Story = {
    args: {
        value: true,
        label: "Default",
        id: "default",
        required: false,
        hasError: false,
        errorMsg: "Error message",
    },
};

export const Error: Story = {
    args: {
        value: false,
        label: "Error",
        id: "error",
        required: false,
        hasError: true,
        errorMsg: "Error message",
    },
};
