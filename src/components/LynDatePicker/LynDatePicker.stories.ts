import { Meta, StoryObj } from "@storybook/vue3";
import { StorybookSourceUtils } from "@/utils/storybook.utils";
import LynDatePicker from "./LynDatePicker.vue";

type Story = StoryObj<typeof LynDatePicker>;

const meta: Meta<typeof LynDatePicker> = {
    title: "LynDatePicker",
    component: LynDatePicker,
    tags: ["autodocs"],
    argTypes: {
        disabled: { control: "boolean" },
        hasError: { control: "boolean" },
        errorMsg: {},
        id: {},
        placeholder: {},
        value: {},
        disabledDate: {},
        format: {},
    },
    parameters: {
        docs: {
            source: {
                transform: (src: string) => {
                    src = StorybookSourceUtils.convertValueToModelValue(src, "date");
                    return src;
                },
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        disabled: false,
        hasError: false,
        errorMsg: "Error message",
        id: "",
        placeholder: new Date().toLocaleDateString("FR-fr"),
        value: new Date(),
        disabledDate: () => {},
        format: "DD/MM/YYYY",
    },
};

export const DisabledPastDate: Story = {
    args: {
        disabled: false,
        hasError: false,
        errorMsg: "Error message",
        id: "",
        placeholder: new Date().toLocaleDateString("FR-fr"),
        value: new Date(),
        disabledDate: (time: any) => {
            return time.getTime() < new Date().setDate(new Date().getDate() - 1);
        },
        format: "DD/MM/YYYY",
    },
};

export const DisabledFutureDate: Story = {
    args: {
        disabled: false,
        hasError: false,
        errorMsg: "Error message",
        id: "",
        placeholder: new Date().toLocaleDateString("FR-fr"),
        value: new Date(),
        disabledDate: (time: any) => {
            return time.getTime() > new Date();
        },
        format: "DD/MM/YYYY",
    },
};

export const Error: Story = {
    args: {
        disabled: false,
        hasError: true,
        errorMsg: "Error message",
        id: "",
        placeholder: new Date().toLocaleDateString("FR-fr"),
        value: new Date(),
        disabledDate: () => {},
        format: "DD/MM/YYYY",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        hasError: false,
        errorMsg: "Error message",
        id: "",
        placeholder: new Date().toLocaleDateString("FR-fr"),
        value: new Date(),
        disabledDate: () => {},
        format: "DD/MM/YYYY",
    },
};
