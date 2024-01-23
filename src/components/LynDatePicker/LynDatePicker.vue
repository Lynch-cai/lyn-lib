<template>
    <div class="lyn-datepicker-container" :class="{ 'has-error': hasError, disabled: disabled }">
        <ElConfigProvider :locale="locale">
            <ElDatePicker
                :id="id"
                @change="$emit('change', childValue)"
                :placeholder="placeholder || childPlaceholder"
                v-model="childValue"
                :format="format || 'DD/MM/YYYY'"
                :disabledDate="disabledDate"
            />
        </ElConfigProvider>
        <LynError :hasError="hasError" :errorMsg="errorMsg" />
    </div>
</template>
<script lang="ts">
import { ElDatePicker, ElConfigProvider } from "element-plus";
// @ts-ignore
import langFr from 'element-plus/dist/locale/fr.mjs';
import { defineComponent } from "vue";
import LynError from "@/components/LynError/LynError.vue";
import "element-plus/es/components/date-picker/style/css"

export default defineComponent({
    emits: ["change", "update:value"],
    components: { ElDatePicker, ElConfigProvider, LynError },
    props: {
        placeholder: String,
        value: Date,
        disabled: {
            type: Boolean,
            default: false,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
        errorMsg: String,
        id: String,
        disabledDate: Function,
        format: String,
    },
    setup() {
        return {
            locale: langFr
        }
    },
    data() {
        return {
            childValue: undefined as Date | undefined,
            childPlaceholder: new Date().toLocaleDateString("fr-FR"),
        };
    },
    mounted() {
        const date = this.value;
        this.childValue = date;
    },
    watch: {
        childValue() {
            this.$emit("update:value", this.childValue);
        },
        value() {
            if (!this.value || !this.childValue) {
                this.childValue = new Date();
            } else if (this.value.toString() !== this.childValue.toString()) {
                this.childValue = this.value;
            }
        },
    },
});
</script>

<style lang="stylus">
@import './lynDatePicker.styl'
</style>
