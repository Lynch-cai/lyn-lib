<script lang="ts">
import { defineComponent } from "vue";
import LynError from "@/components/LynError/LynError.vue";

export default defineComponent({
    components: { LynError },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        label: String,
        id: String,
        required: {
            type: Boolean,
            default: false,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
        errorMsg: String,
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
    <div class="lyn-checkbox-container">
        <label class="lyn-checkbox" :class="{ 'has-error': hasError }">
            <div class="checkbox">
                <input ref="checkbox" class="checkbox" type="checkbox" v-model="childValue" :id="id" :required="required" />
                <label :for="id">
                    <span class="icon-check-12px color-lyn-white"></span>
                </label>
            </div>
            <span class="checkbox-text" v-if="label">{{ label }}</span>
        </label>
        <LynError :hasError="hasError" :errorMsg="errorMsg" />
    </div>
</template>

<style lang="stylus" scoped>
@import "../LynError/lynError.styl"
@import "./lynCheckbox.styl"
</style>
