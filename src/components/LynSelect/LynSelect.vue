<script lang="ts">
/* 
    Example usage:
    <LynSelect 
        id="select"
        placeholder="Select an option"
        :required="true"
        options=[
            {
                text: "Option 1",
                value: "option_1",
            },
            {
                text: "Option 2",
                value: "option_2",
                disabled: true,
            },
                    {
                text: "Option 3",
                value: "option_3",
            },
        ]
    />
*/

import { PropType, defineComponent } from "vue";
import { Size, Option } from "./types";

export default defineComponent({
    props: {
        disabled: Boolean,
        hasError: Boolean,
        id: String,
        options: Array as PropType<Option[]>,
        placeholder: String,
        required: Boolean,
        size: String as PropType<Size>,
        value: String || Number,
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
                <option v-for="(option, index) in options" :value="option.value" :disabled="option.disabled" :key="index">{{ option.text }}</option>
            </select>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
@import "./lynSelect.styl"
</style>
