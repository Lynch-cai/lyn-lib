import { Story } from "../IStory";
import LynTextarea from "./LynTextarea.vue";

export default {
    title: "LynTextarea",
    component: LynTextarea,
    argTypes: {
        columns: {},
        hasError: {},
        id: {},
        maxlength: {},
        placeholder: {},
        rows: {},
        type: {},
        value: {},
    },
};

const Template = (args: unknown) => ({
    components: { LynTextarea },
    setup() {
        return { args };
    },
    template: '<LynTextarea v-bind="args" />',
});

export const Default = Template.bind({}) as Story;
Default.args = {
    hasError: false,
    placeholder: "Placeholder",
    value: "Default",
    // rows: null,
    // id: null,
    // columns: null,
    // maxlength: null,
};
