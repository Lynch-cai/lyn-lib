import { Meta, StoryObj } from "@storybook/vue3";
import LynSelect from "./LynSelect.vue";
import { Size } from "./types";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynSelect>;

const meta: Meta<typeof LynSelect> = {
    title: "LynSelect",
    component: LynSelect,
    tags: ["autodocs"],
    argTypes: {
        disabled: { control: "boolean" },
        hasError: { control: "boolean" },
        id: {},
        options: {},
        placeholder: {},
        required: { control: "boolean" },
        size: { options: Size },
        value: {},
    },
    parameters: {
        docs: {
            source: {
                transform: (src: string) => {
                    src = StorybookSourceUtils.convertValueToModelValue(src, "string");
                    src = StorybookSourceUtils.convertValueToNewValue(src, "options", 'options="yourOptionsVariable"');
                    return src;
                },
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        value: undefined,
        disabled: false,
        hasError: false,
        options: [
            { value: "option_1", label: "Option 1" },
            { value: "option_2", label: "Option 2" },
            { value: "option_3", label: "Option 3" },
        ],
        placeholder: "Select an option",
        required: false,
        size: Size.medium,
        // id: null,
    },
};

export const DisabledOption: Story = {
    args: {
        value: undefined,
        disabled: false,
        hasError: false,
        options: [
            { value: "option_1", label: "Option 1" },
            { value: "option_2", label: "Option 2", disabled: true },
            { value: "option_3", label: "Option 3" },
        ],
        placeholder: "Select an option",
        required: false,
        size: Size.medium,
        // id: null,
    },
};

export const Small: Story = {
    args: {
        value: undefined,
        disabled: false,
        hasError: false,
        options: [
            { value: "option_1", label: "Option 1" },
            { value: "option_2", label: "Option 2" },
            { value: "option_3", label: "Option 3" },
        ],
        placeholder: "Select an option",
        required: false,
        size: Size["small"],
        // id: null,
    },
};
