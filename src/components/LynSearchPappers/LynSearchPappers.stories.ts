import { Meta } from "@storybook/vue3";
import LynSearchPappers from "./LynSearchPappers.vue";
import { Source } from "@storybook/blocks";
import { Item } from "../LynSearch/types";

const meta: Meta<typeof LynSearchPappers> = {
    title: "LynSearchPappers",
    component: LynSearchPappers,
    tags: ["autodocs"],
    argTypes: {
        items: {},
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
    components: { LynSearchPappers },
    setup() {
        return { args };
    },
    data: () => ({
        itemsVariable: [] as Item[],
    }),
    watch: {
        itemsVariable() {
            // @ts-ignore
            if (this.itemsVariable[0]) this.itemsVariable[0].tag = "New client";
            // @ts-ignore
            if (this.itemsVariable[1]) this.itemsVariable[1].tag = "CRM";
        },
    },
    template: `
        <script>
            // add your logic to add tag, example below: 
        </script>
        
        <script>
            watch: {
                itemsVariable() {
                    if (this.itemsVariable[0]) { this.itemsVariable[0].tag = "New client" }
                    if (this.itemsVariable[1]) { this.itemsVariable[1].tag = "CRM" }
                }
            }
        </script>

        <LynSearchPappers v-model:select="companyVariable" v-model:search="companiesVariable" v-model:items="itemsVariable" :max-result="args.maxResult" />
    `,
});

export const Default = Template.bind({});
Default.args = {
    select: {},
    search: [],
    items: [],
    maxResult: 7,
};
