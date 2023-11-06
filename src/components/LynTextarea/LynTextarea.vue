<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        columns: Number,
        hasError: {
            type: Boolean,
            default: false,
        },
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
    <textarea ref="textarea" class="lyn-textarea" :class="{ hasError: hasError }" v-model="childValue" :id="id" :placeholder="placeholder" :maxlength="maxlength" :rows="rows" :columns="columns">
    </textarea>
</template>

<style lang="stylus" scoped>
@import "./lynTextarea.styl"
</style>
