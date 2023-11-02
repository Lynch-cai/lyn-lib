import { Story } from "../IStory";
import LynInput from "./LynInput.vue";
import { Background, Size, Type } from "./types";

export default {
    title: "LynInput",
    component: LynInput,
    argTypes: {
        autocomplete: {},
        background: { options: Background },
        disabled: {},
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
};

const Template = (args: unknown) => ({
    components: { LynInput },
    setup() {
        return { args };
    },
    template: '<LynInput v-bind="args">{{ args.slotContent }}</LynInput>',
});

export const Text = Template.bind({}) as Story;
Text.args = {
    background: "lyn-white",
    disabled: false,
    hasError: false,
    placeholder: "Placeholder",
    required: false,
    size: "medium",
    type: "text",
    value: "Text",
    // step: null,
    // id: null,
    // name: null,
    // autocomplete: null,
    // maxlength: null,
};

export const Number = Template.bind({}) as Story;
Number.args = {
    background: "lyn-white",
    disabled: false,
    hasError: false,
    placeholder: "Placeholder",
    required: false,
    size: "medium",
    step: 1,
    type: "number",
    value: 0,
    // id: null,
    // name: null,
    // autocomplete: null,
    // maxlength: null,
};

export const Email = Template.bind({}) as Story;
Email.args = {
    background: "lyn-white",
    disabled: false,
    hasError: false,
    placeholder: "Placeholder",
    required: false,
    size: "medium",
    step: 1,
    type: "email",
    value: "Email@email.com",
    // id: null,
    // name: null,
    // autocomplete: null,
    // maxlength: null,
};

export const Password = Template.bind({}) as Story;
Password.args = {
    background: "lyn-white",
    disabled: false,
    hasError: false,
    placeholder: "Placeholder",
    required: false,
    size: "medium",
    type: "password",
    value: "mypassword",
    // step: null,
    // id: null,
    // name: null,
    // autocomplete: null,
    // maxlength: null,
};

export const Small = Template.bind({}) as Story;
Small.args = {
    background: "lyn-white",
    disabled: false,
    hasError: false,
    placeholder: "Placeholder",
    required: false,
    size: "small",
    type: "text",
    value: "small",
    // step: null,
    // id: null,
    // name: null,
    // autocomplete: null,
    // maxlength: null,
};
