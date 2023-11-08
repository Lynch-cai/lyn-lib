import { Meta } from "@storybook/vue3";
import LynButtonDropdown from "./LynButtonDropdown.vue";
import LynButton from "@/components/LynButton/LynButton.vue";
import { Source } from "@storybook/blocks";
import { Type, DropdownType } from "./types";

const meta: Meta<typeof LynButtonDropdown> = {
    title: "LynButtonDropdown",
    component: LynButtonDropdown,
    tags: ["autodocs"],
    argTypes: {
        type: { options: Type },
        dropdownType: { options: DropdownType },
        iconOnly: { control: "boolean" },
    },
    parameters: {
        docs: {
            source: Source,
        },
    },
};

export default meta;

// Writed in Storybook 6.x.x way because vue slot with html element is not supported in 7.x.x yet
const DropdownTemplate = `
    <template #dropdown>
        <LynButton type="tertiary" @click="log('You clicked on Action 1')"><span class="icon-save-16px"></span>Action 1</LynButton>
        <LynButton type="tertiary" @click="log('You clicked on Action 2')"><span class="icon-download-16px"></span>Action 2</LynButton>
        <LynButton type="tertiary" @click="log('You clicked on Action 3')"><span class="icon-printer-16px"></span>Action 3</LynButton>
    </template>
`;

const TemplateSingle: any = (args: any) => ({
    components: { LynButtonDropdown, LynButton },
    setup() {
        return { args };
    },
    template: `
        <LynButtonDropdown
            :type="args.type"
            :dropdownType="args.dropdownType"
            :iconOnly="args.iconOnly"
        >
        My Button
        ${DropdownTemplate}
        </LynButtonDropdown>
    `,
    methods: {
        log(string: string) {
            console.log(string);
        },
    },
});

export const Single = TemplateSingle.bind({});
Single.args = {
    type: Type.primary,
    dropdownType: DropdownType.single,
};

const TemplateSingleIcon: any = (args: any) => ({
    components: { LynButtonDropdown, LynButton },
    setup() {
        return { args };
    },
    template: `
        <LynButtonDropdown
            :type="args.type"
            :dropdownType="args.dropdownType"
            :iconOnly="args.iconOnly"
        >
        <span class="icon-plus-16px color-lyn-white"></span>
        ${DropdownTemplate}
        </LynButtonDropdown>
    `,
    methods: {
        log(string: string) {
            console.log(string);
        },
    },
});

export const SingleIcon = TemplateSingleIcon.bind({});
SingleIcon.args = {
    type: Type.primary,
    dropdownType: DropdownType.single,
    iconOnly: true,
};

const TemplateSplit: any = (args: any) => ({
    components: { LynButtonDropdown, LynButton },
    setup() {
        return { args };
    },
    template: `
        <LynButtonDropdown
            :type="args.type"
            :dropdownType="args.dropdownType"
            :iconOnly="args.iconOnly"
            @click="log('You clicked on the main button')"
        >
        My Button
        ${DropdownTemplate}
        </LynButtonDropdown>
    `,
    methods: {
        log(string: string) {
            console.log(string);
        },
    },
});

export const Split = TemplateSplit.bind({});
Split.args = {
    type: Type.primary,
    dropdownType: DropdownType.split,
};
