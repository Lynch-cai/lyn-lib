<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        value: Boolean,
        id: String,
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
    <button @click.prevent="toggle" class="lyn-switch-container" :class="{ active: childValue }" :id="id">
        <div class="switch"></div>
    </button>
</template>

<style lang="stylus" scoped>
@import "./lynSwitch.styl"
</style>
