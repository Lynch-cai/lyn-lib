import { Meta, StoryObj } from "@storybook/vue3";
import LynLink from "./LynLink.vue";
import { Color, Size, FontWeight } from "./types";
import { DefaultSlot } from "@/interfaces/DefaultSlot";
import { StorybookSourceUtils } from "@/utils/storybook.utils";

type Story = StoryObj<typeof LynLink> & DefaultSlot;

const meta: Meta<typeof LynLink> = {
    title: "LynLink",
    component: LynLink,
    tags: ["autodocs"],
    argTypes: {
        href: {},
        target: {},
        size: { options: Size },
        fontWeight: { options: FontWeight },
        hasUnderline: { control: "boolean" },
        isRouterLink: { control: "boolean" },
        color: { options: Color },
    },
    parameters: {
        docs: {
            source: {
                transform: (src: string) => {
                    src = StorybookSourceUtils.removeDefaultSlotTemplate(src);
                    return src;
                },
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        href: "https://www.google.com",
        target: "_blank",
        size: Size.medium,
        fontWeight: FontWeight.normal,
        color: Color["lyn-blue"],
        hasUnderline: false,
        isRouterLink: false,
        default: "LynLink",
    },
};

export const Bold: Story = {
    args: {
        href: "https://www.google.com",
        target: "_blank",
        size: Size.medium,
        fontWeight: FontWeight.bold,
        color: Color["lyn-blue"],
        hasUnderline: false,
        isRouterLink: false,
        default: "LynLink",
    },
};

export const Small: Story = {
    args: {
        href: "https://www.google.com",
        target: "_blank",
        size: Size.small,
        fontWeight: FontWeight.normal,
        color: Color["lyn-blue"],
        hasUnderline: false,
        isRouterLink: false,
        default: "LynLink",
    },
};

export const SmallBold: Story = {
    args: {
        href: "https://www.google.com",
        target: "_blank",
        size: Size.small,
        fontWeight: FontWeight.bold,
        color: Color["lyn-blue"],
        hasUnderline: false,
        isRouterLink: false,
        default: "LynLink",
    },
};

export const White: Story = {
    args: {
        href: "https://www.google.com",
        target: "_blank",
        size: Size.medium,
        fontWeight: FontWeight.normal,
        color: Color["lyn-white"],
        hasUnderline: false,
        isRouterLink: false,
        default: "LynLink",
    },
};
