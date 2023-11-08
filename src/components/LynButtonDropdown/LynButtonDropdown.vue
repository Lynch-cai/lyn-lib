<script lang="ts">
import { defineComponent, PropType } from "vue";

import LynButton from "@/components/LynButton/LynButton.vue";
import { Type as LynButtonType } from "@/components/LynButton/types";
import { Type, DropdownType } from "./types";
import { ComponentsUtils } from "@/utils/components.utils";

export default defineComponent({
    components: { LynButton },
    props: {
        type: {
            type: String as PropType<Type>,
            default: "primary",
        },
        dropdownType: {
            type: String as PropType<DropdownType>,
            default: "single",
        },
        iconOnly: Boolean,
    },
    emits: ["click"],
    data() {
        return {
            LynButtonType,
            showDropdown: false,
            dropdownDirection: "",
            isMounted: false,
        };
    },
    mounted() {
        this.handleSlotClick();
        document.addEventListener("click", this.handleClick);
        document.addEventListener("keydown", this.handleKeydown);
        window.addEventListener("resize", this.checkDropdownDirection);
        this.checkDropdownDirection();
        this.isMounted = true;
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleClick);
        document.removeEventListener("keydown", this.handleKeydown);
        window.removeEventListener("resize", this.checkDropdownDirection);
        this.isMounted = false;
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        handleClick(event: MouseEvent) {
            if (!(this.$refs.buttonDropdownContainer as HTMLDivElement).contains(event.target as Node)) {
                this.showDropdown = false;
            }
        },
        handleKeydown(event: KeyboardEvent) {
            if (event.key === "Escape" && this.showDropdown) {
                this.showDropdown = false;
            }
        },
        handleSlotClick() {
            (this.$refs.buttonDropdown as HTMLDivElement).addEventListener("click", (event: MouseEvent) => {
                if (!(event.target as HTMLElement).classList.contains("button-dropdown")) {
                    this.showDropdown = false;
                }
            });
        },
        checkDropdownDirection() {
            const rect = (this.$refs.buttonDropdown as HTMLDivElement).getBoundingClientRect();
            const isExceedingTop = rect.top + (this.$refs.buttonDropdown as HTMLDivElement).scrollHeight + 40 < 0;
            const isExceedingRight = rect.right > (window.innerWidth || document.documentElement.clientWidth);
            const isExceedingBottom = rect.bottom + (this.$refs.buttonDropdown as HTMLDivElement).scrollHeight + 40 > (window.innerHeight || document.documentElement.clientHeight);
            const isExceedingLeft = rect.left < 40;

            if (this.dropdownType === "single") {
                this.dropdownDirection = "bottom-left";
                if (!isExceedingTop && !isExceedingRight && !isExceedingBottom && !isExceedingLeft) {
                    // Do nothing
                } else if (!isExceedingBottom || isExceedingTop) {
                    if (!isExceedingLeft || isExceedingRight) {
                        this.dropdownDirection = "bottom-left";
                    } else if (!isExceedingRight || isExceedingLeft) {
                        this.dropdownDirection = "bottom-right";
                    }
                } else {
                    if (isExceedingBottom) {
                        if (!isExceedingLeft || isExceedingRight) {
                            this.dropdownDirection = "top-left";
                        } else if (!isExceedingRight || isExceedingLeft) {
                            this.dropdownDirection = "top-right";
                        }
                    }
                }
            } else if (this.dropdownType === "split") {
                this.dropdownDirection = "bottom";
                if (isExceedingBottom) {
                    (this.$refs.buttonDropdown as HTMLDivElement).style.bottom = `${(this.$refs.buttonDropdownSplitLeft as HTMLButtonElement).getBoundingClientRect().height / 16}rem`;
                    this.dropdownDirection = "top";
                } else if (isExceedingTop) {
                    (this.$refs.buttonDropdown as HTMLDivElement).style.top = `${(this.$refs.buttonDropdownSplitLeft as HTMLButtonElement).getBoundingClientRect().height / 16}rem`;
                    this.dropdownDirection = "bottom";
                }
            }
        },
        updateZIndex(ref: string) {
            (this.$refs[ref] as HTMLElement).style.zIndex = ComponentsUtils.getZIndex().toString();
            ComponentsUtils.incrementZIndex();
        },
    },
    watch: {
        dropdownType() {
            this.$nextTick(() => {
                this.checkDropdownDirection();
            });
        },
    },
});
</script>

<template>
    <div v-if="dropdownType === 'single'" ref="buttonDropdownContainer" class="lyn-button-dropdown-single-container" :class="{ active: showDropdown, 'icon-only': iconOnly }">
        <LynButton
            @click="
                toggleDropdown();
                updateZIndex('buttonDropdownContainer');
                $emit('click');
            "
            :type="type"
            :class="{ active: showDropdown }"
        >
            <slot></slot>
        </LynButton>
        <div
            :class="{
                active: showDropdown,
                'active-bottom-right': dropdownDirection === 'bottom-right',
                'active-bottom-left': dropdownDirection === 'bottom-left',
                'active-top-right': dropdownDirection === 'top-right',
                'active-top-left': dropdownDirection === 'top-left',
            }"
            class="button-dropdown"
            ref="buttonDropdown"
        >
            <slot name="dropdown"></slot>
        </div>
    </div>
    <div
        v-if="dropdownType === 'split'"
        ref="buttonDropdownContainer"
        class="lyn-button-dropdown-split-container"
        :class="{ active: showDropdown, primary: type === 'primary', secondary: type === 'secondary', hide: !isMounted }"
    >
        <button
            class="button-dropdown-split-left"
            :class="{
                primary: type === 'primary',
                secondary: type === 'secondary',
                'active-bottom': dropdownDirection === 'bottom',
                'active-top': dropdownDirection === 'top',
            }"
            @click="$emit('click')"
            ref="buttonDropdownSplitLeft"
        >
            <slot></slot>
        </button>
        <button
            class="button-dropdown-split-right"
            ref="buttonDropdownSplitRight as HTMLButtonElement"
            :class="type"
            @click="
                toggleDropdown();
                updateZIndex('buttonDropdownContainer');
            "
        >
            <div class="button-dropdown-icon" :class="{ active: showDropdown }">
                <span class="icon-chevron-up-16px angle-up" v-if="dropdownDirection === 'top'"></span>
                <span class="icon-chevron-down-16px angle-down" v-if="dropdownDirection === 'bottom'"></span>
            </div>
        </button>
        <div
            :class="{
                active: showDropdown,
                'active-bottom': dropdownDirection === 'bottom',
                'active-top': dropdownDirection === 'top',
            }"
            class="button-dropdown"
            ref="buttonDropdown"
        >
            <slot name="dropdown"></slot>
        </div>
    </div>
</template>

<style lang="stylus">
@import "../LynButton/lynButton.styl"
@import "./lynButtonDropdown.styl"
</style>
