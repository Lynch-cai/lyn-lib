import { Meta, StoryObj } from "@storybook/vue3";
import { Source } from "@storybook/blocks";
import LynLoading from "./LynLoading.vue";
import { Color } from "./types";

type Story = StoryObj<typeof LynLoading>;

const meta: Meta<typeof LynLoading> = {
    title: "LynLoading",
    component: LynLoading,
    tags: ["autodocs"],
    argTypes: {
        color: { options: Color },
    },
    parameters: {
        docs: {
            source: Source,
        },
    },
};

export default meta;

export const Blue: Story = {
    args: {
        color: Color["lyn-blue"],
    },
};
export const White: Story = {
    args: {
        color: Color["lyn-white"],
    },
};
export const Black: Story = {
    args: {
        color: Color["lyn-black"],
    },
};
