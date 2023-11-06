<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouterLink } from "vue-router";
import { FontWeight, Size, Color } from "./types";

export default defineComponent({
    props: {
        href: String,
        target: String,
        size: {
            type: String as PropType<Size>,
            default: "medium" as Size,
        },
        fontWeight: {
            type: String as PropType<FontWeight>,
            default: "normal" as FontWeight,
        },
        hasUnderline: {
            type: Boolean,
            default: false,
        },
        isRouterLink: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String as PropType<Color>,
            default: "lyn-blue" as Color,
        },
    },
    components: { RouterLink },
});
</script>

<template>
    <a v-if="!isRouterLink" class="lyn-link" :href="href" :target="target" :class="[color, fontWeight, size, { hasUnderline: hasUnderline === true }]">
        <slot></slot>
    </a>
    <RouterLink v-else class="lyn-link" :to="{ name: href }" :target="target" :class="[color, fontWeight, size, { hasUnderline: hasUnderline === true }]">
        <slot></slot>
    </RouterLink>
</template>

<style lang="stylus" scoped>
@import "./lynLink.styl"
</style>
