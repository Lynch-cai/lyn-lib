import { Meta, StoryObj } from "@storybook/vue3";
import LynInput from "./LynInput.vue";
import { Background, Size, Type } from "./types";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynInput>;

const meta: Meta<typeof LynInput> = {
    title: "LynInput",
    component: LynInput,
    tags: ["autodocs"],
    argTypes: {
        autocomplete: {},
        background: { options: Background },
        disabled: {},
        hasError: { control: "boolean" },
        errorMsg: {},
        id: {},
        maxlength: {},
        name: {},
        placeholder: {},
        required: { control: "boolean" },
        size: { options: Size },
        step: {},
        type: { options: Type },
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

export const Text: Story = {
    args: {
        value: "Text",
        background: Background["lyn-white"],
        disabled: false,
        hasError: false,
        errorMsg: "Error message",
        placeholder: "Placeholder",
        required: false,
        size: Size.medium,
        type: Type.text,
        // step: null,
        // id: null,
        // name: null,
        // autocomplete: null,
        // maxlength: null,
    },
};

export const Number: Story = {
    args: {
        value: 0,
        background: Background["lyn-white"],
        disabled: false,
        hasError: false,
        errorMsg: "Error message",
        placeholder: "Placeholder",
        required: false,
        size: Size.medium,
        type: Type.number,
        step: 1,
        // id: null,
        // name: null,
        // autocomplete: null,
        // maxlength: null,
    },
    parameters: {
        docs: {
            source: {
                transform: (src: string) => {
                    src = StorybookSourceUtils.convertValueToModelValue(src, "number");
                    return src;
                },
            },
        },
    },
};

export const Email: Story = {
    args: {
        value: "Email@email.com",
        autocomplete: "email",
        background: Background["lyn-white"],
        disabled: false,
        hasError: false,
        errorMsg: "Error message",
        placeholder: "Placeholder",
        required: false,
        size: Size.medium,
        type: Type.email,
        // step: null,
        // id: null,
        // name: null,
        // maxlength: null,
    },
};

export const Password: Story = {
    args: {
        value: "password",
        autocomplete: "current-password",
        background: Background["lyn-white"],
        disabled: false,
        hasError: false,
        errorMsg: "Error message",
        placeholder: "Placeholder",
        required: false,
        size: Size.medium,
        type: Type.password,
        // step: null,
        // id: null,
        // name: null,
        // maxlength: null,
    },
};

export const Small: Story = {
    args: {
        background: Background["lyn-white"],
        disabled: false,
        hasError: false,
        errorMsg: "Error message",
        placeholder: "Placeholder",
        required: false,
        size: Size.small,
        type: Type.text,
        value: "Text",
        // step: null,
        // id: null,
        // name: null,
        // autocomplete: null,
        // maxlength: null,
    },
};

export const Error: Story = {
    args: {
        background: Background["lyn-white"],
        disabled: false,
        hasError: true,
        errorMsg: "Error message",
        placeholder: "Placeholder",
        required: false,
        size: Size.small,
        type: Type.text,
        value: "Text",
        // step: null,
        // id: null,
        // name: null,
        // autocomplete: null,
        // maxlength: null,
    },
};

const TemplateIconLeft: any = (args: any) => ({
    components: { LynInput },
    setup() {
        return { args };
    },
    template: `
        <LynInput
            :autocomplete="args.autocomplete"
            :background="args.background"
            :disabled="args.disabled"
            :hasError="args.hasError"
            :id="args.id"
            :maxlength="args.maxlength"
            :name="args.name"
            :placeholder="args.placeholder"
            :required="args.required"
            :size="args.size"
            :step="args.step"
            :type="args.type"
            :value="args.value"
        >
            <template #icon-left><span class="icon-search-16px color-lyn-grey300"></span></template>
        </LynInput>
    `,
});

export const LeftIcon = TemplateIconLeft.bind({});
LeftIcon.args = {
    value: "",
    background: Background["lyn-white"],
    disabled: false,
    hasError: false,
    errorMsg: "Error message",
    placeholder: "Placeholder",
    required: false,
    size: Size.medium,
    type: Type.text,
    // step: null,
    // id: null,
    // name: null,
    // autocomplete: null,
    // maxlength: null,
};
