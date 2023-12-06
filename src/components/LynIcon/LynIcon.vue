<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Size, Name, Color } from "./types";

export default defineComponent({
    props: {
        size: {
            type: String as PropType<Size>,
            default: "16px",
        },
        name: {
            type: String as PropType<Name>,
            required: true,
        },
        color: {
            type: String as PropType<Color>,
            default: "grey400",
        },
    },
});
</script>

<template>
    <span :class="[`icon-${name}-${size}`, `color-lyn-${color}`]"> </span>
</template>

<style scoped>
@import "../../assets/styles/base/colors.styl";
@import "../../assets/styles/base/icons.styl";
</style>
