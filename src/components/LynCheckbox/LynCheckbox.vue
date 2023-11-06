<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: undefined,
        },
        id: {
            type: String,
            default: undefined,
        },
        required: {
            type: Boolean,
            default: false,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        childValue: false,
    }),
    emits: ["update:value"],
    mounted() {
        this.childValue = this.value;
    },
    methods: {
        focus() {
            (this.$refs.checkbox as HTMLInputElement).focus();
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
    <label class="lyn-checkbox-container" :class="{ 'has-error': hasError }">
        <div class="checkbox">
            <input ref="checkbox" class="checkbox" type="checkbox" v-model="childValue" :id="id" :required="required" />
            <label :for="id">
                <span class="icon-check-12px color-lyn-white"></span>
            </label>
        </div>
        <span class="checkbox-text" v-if="label">{{ label }}</span>
    </label>
</template>

<style lang="stylus" scoped>
@import "./lynCheckbox.styl"
</style>
