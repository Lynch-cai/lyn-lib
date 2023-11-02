<script lang="ts">
import LynButton from "@/components/LynButton/LynButton.vue";
import { Type as LynButtonType } from "@/components/LynButton/types";

import LynInput from "@/components/LynInput/LynInput.vue";
import LynCheckbox from "@/components/LynCheckbox/LynCheckbox.vue";
import LynLoading from "@/components/LynLoading/LynLoading.vue";

export default {
    components: { LynButton, LynInput, LynCheckbox, LynLoading },
    data() {
        return {
            LynButtonType,
        };
    },
};
</script>

<template>
    <h2 class="lyn-h2-font">Button</h2>
    <LynButton :type="LynButtonType.secondary">test</LynButton>
    <!-- <lyn-button>test</lyn-button>
    <lyn-button type="primary">test</lyn-button>
    <lyn-button type="primary" :is-loading="true">testttt</lyn-button>
    <lyn-button type="secondary">test</lyn-button>
    <lyn-button type="tertiary" :has-icon-only="true">test</lyn-button>
    <lyn-input type="number" />
    <lyn-input type="text" placeholder="test" />
    <lyn-loading color="lyn-blue" />
    <lyn-loading color="lyn-white" />
    <lyn-loading color="lyn-black" />
    <lyn-checkbox label="test" /> -->
    <lyn-loading></lyn-loading>
</template>

<style lang="stylus">
@import "./assets/styles/all.styl"
</style>
