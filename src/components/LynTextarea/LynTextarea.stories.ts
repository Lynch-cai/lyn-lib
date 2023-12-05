import { Meta, StoryObj } from "@storybook/vue3";
import LynTextarea from "./LynTextarea.vue";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynTextarea>;

const meta: Meta<typeof LynTextarea> = {
    title: "LynTextarea",
    component: LynTextarea,
    tags: ["autodocs"],
    argTypes: {
        columns: {},
        hasError: { control: "boolean" },
        errorMsg: {},
        id: {},
        maxlength: {},
        placeholder: {},
        rows: {},
        value: {},
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
        value: "Default",
        placeholder: "Placeholder",
        // columns: 300,
        // rows: 5,
        // maxlength: 3000,
        // hasError: false,
        // id: null,
    },
};
