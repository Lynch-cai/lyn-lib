import { Meta, StoryObj } from "@storybook/vue3";
import LynRadio from "./LynRadio.vue";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynRadio>;

const meta: Meta<typeof LynRadio> = {
    title: "LynRadio",
    component: LynRadio,
    tags: ["autodocs"],
    argTypes: {
        hasError: { control: "boolean" },
        errorMsg: {},
        label: {},
        name: {},
        id: {},
        radioValue: {},
        value: {},
        required: { control: "boolean" },
        disabled: { control: "boolean" },
    },
    parameters: {
        docs: {
            source: {
                transform: (src: string) => {
                    src = StorybookSourceUtils.convertValueToModelValue(src, "string");
                    return src;
                },
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        hasError: false,
        errorMsg: "Error message",
        label: "Default",
        radioValue: "customValue1",
        value: "YourVar",
        required: false,
        disabled: false,
        name: "radios",
        id: "radio1",
    },
};

export const Checked: Story = {
    args: {
        hasError: false,
        errorMsg: "Error message",
        label: "Checked",
        radioValue: "customValue2",
        value: "checked",
        required: false,
        disabled: false,
        name: "radios",
        id: "radio2",
    },
    parameters: {
        docs: {
            source: {
                transform: (src: string) => {
                    const yourVar = "const yourVar = 'checked'";
                    src = StorybookSourceUtils.addLineAtStart(src, yourVar);
                    src = StorybookSourceUtils.convertValueToModelValue(src, "string");
                    return src;
                },
            },
        },
    },
};

export const Error: Story = {
    args: {
        hasError: true,
        errorMsg: "Error message",
        label: "Error",
        radioValue: "customValue3",
        value: "YourVar",
        required: false,
        disabled: false,
        name: "radios",
        id: "radio3",
    },
};
