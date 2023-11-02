import { Story } from "../IStory";
import LynSelect from "./LynSelect.vue";
import { Size } from "./types";

export default {
    title: "LynSelect",
    component: LynSelect,
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
};

const Template = (args: unknown) => ({
    components: { LynSelect },
    setup() {
        return { args };
    },
    template: '<LynSelect v-bind="args" />',
});

export const Default = Template.bind({}) as Story;
Default.args = {
    disabled: false,
    hasError: false,
    options: [
        { value: "option_1", text: "Option 1" },
        { value: "option_2", text: "Option 2" },
        { value: "option_3", text: "Option 3" },
    ],
    placeholder: "Select an option",
    required: false,
    size: Size.medium,
    value: null,
    // id: null,
};

export const DisabledOption = Template.bind({}) as Story;
DisabledOption.args = {
    disabled: false,
    hasError: false,
    options: [
        { value: "option_1", text: "Option 1" },
        { value: "option_2", text: "Option 2", disabled: true },
        { value: "option_3", text: "Option 3" },
    ],
    placeholder: "Select an option",
    required: false,
    size: "medium",
    value: null,
    // id: null,
};

export const Small = Template.bind({}) as Story;
Small.args = {
    disabled: false,
    hasError: false,
    options: [
        { value: "option_1", text: "Option 1" },
        { value: "option_2", text: "Option 2" },
        { value: "option_3", text: "Option 3" },
    ],
    placeholder: "Select an option",
    required: false,
    size: "small",
    value: null,
    // id: null,
};
