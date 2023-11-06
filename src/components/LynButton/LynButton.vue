<script lang="ts">
import { defineComponent, PropType } from "vue";
import LynLoading from "@/components/LynLoading/LynLoading.vue";
import { Type, Size } from "./types";
import { Color as LynLoadingColor } from "../LynLoading/types";

export default defineComponent({
    components: { LynLoading },
    props: {
        type: {
            type: String as PropType<Type>,
            default: "primary" as Type,
        },
        size: {
            type: String as PropType<Size>,
            default: "medium" as Size,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        LynLoadingColor,
    }),
    methods: {
        focus() {
            (this.$refs.button as HTMLButtonElement).focus();
        },
    },
});
</script>

<template>
    <button ref="button" class="lyn-button" :class="[type, size]" :disabled="isLoading || isDisabled">
        <span class="button-text" :class="{ hide: isLoading }">
            <slot></slot>
        </span>
        <LynLoading
            v-if="isLoading"
            :color="type === 'primary' ? LynLoadingColor['lyn-white'] : type === 'secondary' || type === 'tertiary' ? LynLoadingColor['lyn-blue'] : LynLoadingColor['lyn-black']"
        />
    </button>
</template>

<style lang="stylus" scoped>
@import './lynButton.styl'
</style>
