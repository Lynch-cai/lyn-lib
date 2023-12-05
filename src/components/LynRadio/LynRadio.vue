<script lang="ts">
import { defineComponent } from "vue";
import LynError from "@/components/LynError/LynError.vue";

export default defineComponent({
    components: { LynError },
    props: {
        hasError: {
            type: Boolean,
            default: false,
        },
        errorMsg: String,
        label: String,
        name: String,
        id: String,
        radioValue: String,
        value: String,
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            checked: false,
        };
    },
    mounted() {
        this.compareValue();
        this.checked && this.updateValue();
    },
    methods: {
        check() {
            this.checked = true;
            this.updateValue();
        },
        focus() {
            (this.$refs.radio as HTMLInputElement).focus();
        },
        updateValue() {
            this.$emit("update:value", this.radioValue);
        },
        compareValue() {
            if (this.value === this.radioValue) this.check();
        },
    },
    watch: {
        value() {
            this.compareValue();
        },
    },
});
</script>

<template>
    <div class="lyn-radio-container">
        <label :for="id" class="lyn-radio" ref="radio" :class="{ 'has-error': hasError }">
            <div class="radio">
                <input :disabled="disabled" :required="required" :checked="checked" :id="id" :name="name" type="radio" :value="radioValue" @change="updateValue()" />
                <div class="circle" :for="id"></div>
            </div>
            <span class="radio-text" v-if="label">{{ label }}</span>
        </label>
        <LynError :hasError="hasError" :errorMsg="errorMsg" />
    </div>
</template>

<style lang="stylus" scoped>
@import "../LynError/lynError.styl"
@import "./lynRadio.styl"
</style>
