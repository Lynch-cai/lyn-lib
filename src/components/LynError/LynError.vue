<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        hasError: {
            type: Boolean,
            default: false,
        },
        errorMsg: String,
    },
});
</script>

<template>
    <div v-if="errorMsg && errorMsg.length > 0" :class="{ show: hasError }" class="lyn-error">{{ errorMsg }}</div>
</template>

<style lang="stylus" scoped>
@import "./lynError.styl"
</style>
