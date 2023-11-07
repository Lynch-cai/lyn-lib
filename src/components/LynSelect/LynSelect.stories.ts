import { Meta } from "@storybook/vue3";
import LynSelect from "./LynSelect.vue";
import { Size } from "./types";
import { Source } from "@storybook/blocks";

const meta: Meta<typeof LynSelect> = {
    title: "LynSelect",
    component: LynSelect,
    tags: ["autodocs"],
    argTypes: {
        disabled: { control: "boolean" },
        hasError: { control: "boolean" },
        id: {},
        placeholder: {},
        required: { control: "boolean" },
        size: { options: Size },
        value: {},
    },
    parameters: {
        docs: {
            source: Source,
        },
    },
};

export default meta;

// Writed in Storybook 6.x.x way because vue slot with html element inside is not supported in 7.x.x yet
const Template: any = (args: any) => ({
    components: { LynSelect },
    setup() {
        return { args };
    },
    template: `
        <LynSelect
            v-model:value="yourVariable"
            :disabled="args.disabled"
            :hasError="args.hasError"
            :placeholder="args.placeholder"
            :required="args.required"
            :size="args.size"
            :id="args.id"
        >
            <option value="option_1">Option 1</option>
            <option value="option_2">Option 2</option>
            <option value="option_3">Option 3</option>
        </LynSelect>
    `,
});

export const Default = Template.bind({});
Default.args = {
    value: undefined,
    disabled: false,
    hasError: false,
    placeholder: "Select an option",
    required: false,
    size: Size.medium,
    id: null,
};

export const Small = Template.bind({});
Small.args = {
    value: undefined,
    disabled: false,
    hasError: false,
    placeholder: "Select an option",
    required: false,
    size: Size.small,
    id: null,
};
