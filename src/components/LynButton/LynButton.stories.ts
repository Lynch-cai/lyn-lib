import { Meta, StoryObj } from "@storybook/vue3";
import LynButton from "./LynButton.vue";
import { DefaultSlot } from "@/interfaces/DefaultSlot";
import { Type, Size } from "./types";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynButton> & DefaultSlot;

const meta: Meta<typeof LynButton> = {
    title: "LynButton",
    component: LynButton,
    tags: ["autodocs"],
    argTypes: {
        type: { options: Type },
        size: { options: Size },
        isLoading: { control: "boolean" },
        isDisabled: { control: "boolean" },
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

export const Primary: Story = {
    args: {
        type: Type.primary,
        size: Size.medium,
        isLoading: false,
        isDisabled: false,
        default: "Primary",
    },
};

export const Secondary: Story = {
    args: {
        type: Type.secondary,
        size: Size.medium,
        isLoading: false,
        isDisabled: false,
        default: "Secondary",
    },
};

export const Tertiary: Story = {
    args: {
        type: Type.tertiary,
        size: Size.medium,
        isLoading: false,
        isDisabled: false,
        default: "Tertiary",
    },
};
