import { Story } from "../IStory";
import LynLoading from "./LynLoading.vue";
import { Color } from "./types";

export default {
    title: "LynLoading",
    component: LynLoading,
    argTypes: {
        color: { options: Color },
    },
};

const Template = (args: unknown) => ({
    components: { LynLoading },
    setup() {
        return { args };
    },
    template: '<LynLoading v-bind="args" />',
});

export const Blue = Template.bind({}) as Story;
Blue.args = {
    color: "lyn-blue",
};

export const White = Template.bind({}) as Story;
White.args = {
    color: "lyn-white",
};

export const Black = Template.bind({}) as Story;
Black.args = {
    color: "lyn-black",
};
