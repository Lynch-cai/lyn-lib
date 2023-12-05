<script lang="ts">
import { defineComponent } from "vue";
import LynError from "@/components/LynError/LynError.vue";

export default defineComponent({
    components: { LynError },
    props: {
        value: Boolean,
        id: String,
        hasError: {
            type: Boolean,
            default: false,
        },
        errorMsg: String,
    },
    data: () => ({
        childValue: false,
    }),
    mounted() {
        this.childValue = this.value;
    },
    methods: {
        toggle() {
            this.childValue = !this.childValue;
            this.$emit("update:value", this.childValue);
        },
    },
    watch: {
        value() {
            if (this.childValue !== this.value) this.childValue = this.value;
        },
    },
});
</script>

<template>
    <div class="lyn-switch-container">
        <button @click.prevent="toggle" class="lyn-switch" :class="{ active: childValue, 'has-error': hasError }" :id="id">
            <div class="switch"></div>
        </button>
        <LynError :hasError="hasError" :errorMsg="errorMsg" />
    </div>
</template>

<style lang="stylus" scoped>
@import "../LynError/lynError.styl"
@import "./lynSwitch.styl"
</style>
