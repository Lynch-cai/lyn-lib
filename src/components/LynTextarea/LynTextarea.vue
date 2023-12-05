<script lang="ts">
import { defineComponent } from "vue";
import LynError from "../LynError/LynError.vue";

export default defineComponent({
    components: { LynError },
    props: {
        columns: Number,
        hasError: {
            type: Boolean,
            default: false,
        },
        errorMsg: String,
        id: String,
        maxlength: Number,
        placeholder: String,
        rows: Number,
        value: [String, Number],
    },
    data: () => ({
        childValue: "" as string | number | undefined,
    }),
    mounted() {
        this.childValue = this.value;
    },
    methods: {
        focus() {
            (this.$refs.textarea as HTMLTextAreaElement).focus();
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
    <div class="lyn-textarea-container">
        <textarea
            ref="textarea"
            class="lyn-textarea"
            :class="{ hasError: hasError }"
            v-model="childValue"
            :id="id"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :rows="rows"
            :columns="columns"
        ></textarea>
        <LynError :hasError="hasError" :errorMsg="errorMsg" />
    </div>
</template>

<style lang="stylus" scoped>
@import "../LynError/lynError.styl"
@import "./lynTextarea.styl"
</style>
