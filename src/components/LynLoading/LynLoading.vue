<script lang="ts">
/* 
    Example usage:
    <LynLoading color="lyn-blue" />
*/

import { defineComponent, PropType } from "vue";
import { Color } from "./types";

export default defineComponent({
    props: {
        color: {
            type: String as PropType<Color>,
            default: "lyn-blue" as Color,
        },
    },
});
</script>

<template>
    <div class="lyn-loading" :class="color">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style lang="stylus" scoped>
@import "./lynLoading.styl"
</style>
