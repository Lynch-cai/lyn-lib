<script>
export default {
    props: {
        columns: Number,
        hasError: Boolean,
        id: String,
        maxlength: Number,
        placeholder: String,
        rows: Number,
        value: [String, Number],
    },
    data: () => ({
        childValue: "",
    }),
    mounted() {
        this.childValue = this.value;
    },

    methods: {
        focus() {
            this.$refs.input.focus();
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
};
</script>

<template>
    <textarea ref="textarea" class="lyn-textarea" :class="{ hasError: hasError }" v-model="childValue" :id="id" :placeholder="placeholder" :maxlength="maxlength" :rows="rows" :columns="columns">
    </textarea>
</template>

<style lang="stylus" scoped>
@import "./lynTextarea.styl"
</style>
