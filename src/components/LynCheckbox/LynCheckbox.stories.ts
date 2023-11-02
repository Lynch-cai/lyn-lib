import { Story } from "../IStory";
import LynCheckbox from "./LynCheckbox.vue";

export default {
    title: "LynCheckbox",
    component: LynCheckbox,
    argTypes: {
        value: { control: "boolean" },
        label: {},
        id: {},
        required: { control: "boolean" },
        hasError: { control: "boolean" },
    },
};

const Template = (args: unknown) => ({
    components: { LynCheckbox },
    setup() {
        return { args };
    },
    template: '<LynCheckbox v-bind="args" />',
});

export const Default = Template.bind({}) as Story;
Default.args = {
    value: false,
    label: "Default",
    id: "default",
    required: false,
    hasError: false,
};

export const Checked = Template.bind({}) as Story;
Checked.args = {
    value: true,
    label: "Default",
    id: "default",
    required: false,
    hasError: false,
};
