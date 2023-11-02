import { Story } from "../IStory";
import LynButton from "./LynButton.vue";
import { Type, Size } from "./types";

export default {
    title: "LynButton",
    component: LynButton,
    argTypes: {
        type: { options: Type },
        size: { options: Size },
        isLoading: { control: "boolean" },
        isDisabled: { control: "boolean" },
    },
};

const Template = (args: unknown) => ({
    components: { LynButton },
    setup() {
        return { args };
    },
    template: '<LynButton v-bind="args">{{ args.slotContent }}</LynButton>',
});

export const Primary = Template.bind({}) as Story;
Primary.args = {
    type: "primary",
    size: "medium",
    isLoading: false,
    isDisabled: false,
    slotContent: "Primary",
};

export const Secondary = Template.bind({}) as Story;
Secondary.args = {
    type: "secondary",
    size: "medium",
    isLoading: false,
    isDisabled: false,
    slotContent: "Secondary",
};

export const Tertiary = Template.bind({}) as Story;
Tertiary.args = {
    type: "tertiary",
    size: "medium",
    isLoading: false,
    isDisabled: false,
    slotContent: "Tertiary",
};
