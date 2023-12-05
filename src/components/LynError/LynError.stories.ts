import { Meta, StoryObj } from "@storybook/vue3";
import LynError from "./LynError.vue";
import { Source } from "@storybook/blocks";

type Story = StoryObj<typeof LynError>;

const meta: Meta<typeof LynError> = {
    title: "LynError",
    component: LynError,
    tags: ["autodocs"],
    argTypes: {
        hasError: { control: "boolean" },
        errorMsg: {},
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
    },
};
