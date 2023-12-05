<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Size } from "./types";

export default defineComponent({
    props: {
        hasError: {
            type: Boolean,
            default: false,
        },
        errorMsg: String,
        size: {
            type: String as PropType<Size>,
            default: "medium" as Size,
        },
    },
});
</script>

<template>
    <div v-if="errorMsg && errorMsg.length > 0" :class="[size, { show: hasError }]" class="lyn-error">{{ errorMsg }}</div>
</template>

<style lang="stylus" scoped>
@import "./lynError.styl"
</style>
