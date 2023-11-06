import { Meta, StoryObj } from "@storybook/vue3";
import LynSwitch from "./LynSwitch.vue";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynSwitch>;

const meta: Meta<typeof LynSwitch> = {
    title: "LynSwitch",
    component: LynSwitch,
    tags: ["autodocs"],
    argTypes: {
        value: { control: "boolean" },
        id: String,
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
        // id: null,
    },
};

export const Checked: Story = {
    args: {
        value: true,
        // id: null,
    },
};
