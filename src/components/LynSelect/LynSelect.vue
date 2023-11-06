<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Size, Option } from "./types";

export default defineComponent({
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
        id: String,
        options: Array as PropType<Option[]>,
        placeholder: String,
        required: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String as PropType<Size>,
            default: "medium" as Size,
        },
        value: [String, Number],
    },
    data: () => ({
        childValue: null as string | number | null,
    }),
    mounted() {
        if (this.value) {
            this.childValue = this.value;
        }
    },
    watch: {
        value() {
            if (this.value) {
                this.childValue = this.value;
            }
        },
        childValue() {
            this.$emit("update:value", this.childValue);
        },
    },
});
</script>

<template>
    <div class="lyn-select-container" :class="[size, { hasError: hasError }]">
        <div class="select">
            <span class="icon-chevron-down-16px angle-down"></span>
            <select ref="select" :class="{ 'no-selection': !childValue }" v-model="childValue" :id="id" :required="required" :disabled="disabled">
                <option :value="null" disabled selected>{{ placeholder }}</option>
                <option v-for="(option, index) in options" :value="option.value" :disabled="option.disabled" :key="index">{{ option.label }}</option>
            </select>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
@import "./lynSelect.styl"
</style>