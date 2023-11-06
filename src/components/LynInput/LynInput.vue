<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Type, Background, Size } from "./types";

export default defineComponent({
    props: {
        background: {
            type: String as PropType<Background>,
            default: "lyn-white" as Background,
        },
        autocomplete: String,
        disabled: {
            type: Boolean,
            default: false,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
        id: String,
        maxlength: Number,
        name: String,
        placeholder: String,
        required: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String as PropType<Size>,
            default: "medium" as Size,
        },
        step: Number,
        type: {
            type: String as PropType<Type>,
            default: "text" as Type,
        },
        value: [String, Number],
    },
    data: () => ({
        childValue: undefined as string | number | undefined,
    }),
    mounted() {
        this.childValue = this.value;
    },
    methods: {
        focus() {
            (this.$refs.input as HTMLInputElement).focus();
        },
    },
    watch: {
        childValue() {
            this.$emit("update:value", this.childValue);
        },
        value() {
            this.childValue = this.value;
        },
    },
});
</script>

<template>
    <input
        ref="input"
        class="lyn-input"
        :class="[background, size, { 'has-error': hasError }]"
        :type="type"
        v-model="childValue"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :step="step"
        :maxlength="maxlength"
    />
</template>

<style lang="stylus" scoped>
@import "./lynInput.styl"
</style>
