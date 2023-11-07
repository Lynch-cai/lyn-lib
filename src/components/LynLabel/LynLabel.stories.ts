import { Meta, StoryObj } from "@storybook/vue3";
import LynLabel from "./LynLabel.vue";
import { Size } from "./types";
import { DefaultSlot } from "@/interfaces/DefaultSlot";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynLabel> & DefaultSlot;

const meta: Meta<typeof LynLabel> = {
    title: "LynLabel",
    component: LynLabel,
    tags: ["autodocs"],
    argTypes: {
        for: {},
        required: { control: "boolean" },
        size: { options: Size },
        padding: { control: "boolean" },
    },
    parameters: {
        docs: {
            source: {
                transform: (src: string) => {
                    src = StorybookSourceUtils.removeDefaultSlotTemplate(src);
                    return src;
                },
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        for: "exampleInput",
        required: false,
        size: Size.medium,
        padding: true,
        default: "Label",
    },
};

export const Required: Story = {
    args: {
        for: "exampleInput",
        required: true,
        size: Size.medium,
        padding: true,
        default: "Label",
    },
};

export const Small: Story = {
    args: {
        for: "exampleInput",
        required: false,
        size: Size.small,
        padding: true,
        default: "Label",
    },
};
