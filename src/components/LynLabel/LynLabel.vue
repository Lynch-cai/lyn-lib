<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Size } from "./types";

export default defineComponent({
    props: {
        for: String,
        required: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String as PropType<Size>,
            default: "medium" as Size,
        },
        padding: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            childFor: "" as string | undefined,
        };
    },
    mounted() {
        this.childFor = this.for;
    },
    watch: {
        for() {
            if (this.childFor !== this.for) this.childFor = this.for;
        },
    },
});
</script>

<template>
    <label class="lyn-label" :for="childFor" :class="[size, { 'no-padding': padding === false }]">
        <span v-if="required" class="label-star">*</span>
        <slot></slot>
    </label>
</template>

<style lang="stylus" scoped>
@import "./lynLabel.styl"
</style>
