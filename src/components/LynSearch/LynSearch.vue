<script lang="ts">
import { PropType, defineComponent } from "vue";
import LynLoading from "@/components/LynLoading/LynLoading.vue";
import LynInput from "@/components/LynInput/LynInput.vue";
import { Color as LynLoadingColor } from "@/components/LynLoading/types";
import { Size as LynInputSize, Background as LynInputBackground, Type as LynInputType } from "@/components/LynInput/types";
import { Item, SearchDropdownItem } from "./types";

export default defineComponent({
    components: { LynInput, LynLoading },
    props: {
        background: {
            type: String as PropType<LynInputBackground>,
            default: "lyn-white",
        },
        items: {
            type: Array as PropType<Item[]>,
            default: () => [],
        },
        id: String,
        name: String,
        placeholder: String,
        q: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        isDropdownDisabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String as PropType<LynInputSize>,
            default: "medium",
        },
        maxResult: {
            type: Number,
            default: 7,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        LynLoadingColor,
        LynInputType,

        childQ: "" as string,
        isTyping: false,
        showDropdown: false,
        childItems: [] as SearchDropdownItem[],
        timeout: null as any,
        lastSelectedItem: { data: {}, label: "" } as Item,
    }),
    emits: ["search", "select", "focus"],
    mounted() {
        this.copyItemsLocally();
        document.addEventListener("click", this.handleClick);
        document.addEventListener("keydown", this.handleKeydown);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleClick);
        document.removeEventListener("keydown", this.handleKeydown);
    },
    methods: {
        focus() {
            (this.$refs.input as HTMLInputElement).focus();
        },
        copyItemsLocally() {
            this.childItems = JSON.parse(JSON.stringify(this.items));
        },
        handleClick(event: MouseEvent) {
            if (!(this.$refs.searchDropdownContainer as HTMLDivElement).contains(event.target as Node)) {
                this.showDropdown = false;
            }
        },
        handleKeydown(event: KeyboardEvent) {
            if (event.key === "Escape" && this.showDropdown) {
                this.showDropdown = false;
            }
        },
        handledSelect(index: number) {
            this.showDropdown = false;
            this.lastSelectedItem = this.items[index];
            this.$emit("select", this.lastSelectedItem);
        },
        // Gère le marquage des valeurs qui se trouve à la fois dans la valeur de recherche et à la fois dans les items
        highlightDropdownItem() {
            if (this.childItems.length && !this.childQ) {
                for (const item of this.childItems) {
                    item.dropdownLabel = [{ found: false, subLabel: item.label.substring(0) }];
                }
            } else if (typeof this.childQ === "string" && this.childQ.length > 0) {
                for (const item of this.childItems) {
                    const res = [];
                    const lowerText = item.label.toLowerCase();
                    const lowerValue = typeof this.childQ === "string" ? this.childQ.toLowerCase().trim() : "";
                    let startIndex = 0;
                    while (startIndex < lowerText.length) {
                        const index = lowerText.indexOf(lowerValue, startIndex);
                        if (index === -1) {
                            res.push({ found: false, subLabel: item.label.substring(startIndex) });
                            break;
                        } else {
                            res.push({ found: false, subLabel: item.label.substring(startIndex, index) });
                            res.push({ found: true, subLabel: item.label.substring(index, index + this.childQ.length) });
                            startIndex = index + this.childQ.length;
                        }
                    }

                    item.dropdownLabel = res;
                }
            }
        },
        onFocus() {
            if (this.childQ) this.showDropdown = true;
            else this.showDropdown = false;
        },
    },

    watch: {
        childQ() {
            this.highlightDropdownItem();
            if (this.childQ) this.showDropdown = true;
            else {
                this.showDropdown = false;
                return;
            }

            // Regarde si la valeur de recherche est la même que une des valeurs dans data de la dernière valeur sélectionnée, ça permet d'éviter de refetch
            if (this.lastSelectedItem && this.lastSelectedItem.data) {
                const data = this.lastSelectedItem.data;
                const dataValues = Object.values(data);
                const found = dataValues.find((value) => {
                    if (typeof value === "string") return value.toLowerCase() === this.childQ.toLowerCase();
                    return false;
                });
                if (found) {
                    this.showDropdown = false;
                    return;
                }
            }

            this.isTyping = true;
            this.lastSelectedItem = { data: {}, label: "" };
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.$emit("search", this.childQ);
                this.isTyping = false;
            }, 250); // Temps avant validation de l'input
        },
        q() {
            if (this.q !== this.childQ) {
                this.childQ = this.q;
            }
        },
        items() {
            this.copyItemsLocally();
            this.highlightDropdownItem();
        },
    },
});
</script>

<template>
    <div ref="searchDropdownContainer" class="lyn-search-container" :class="size">
        <LynInput :type="LynInputType.text" v-model:value="childQ" :name="name" :id="id" :placeholder="placeholder" ref="input" :background="background" @focus="onFocus()">
            <template #icon-left>
                <span class="icon-search-16px color-lyn-grey300"></span>
            </template>
        </LynInput>

        <div class="search-dropdown" :class="{ active: showDropdown }">
            <template v-if="isLoading || isTyping">
                <div class="search-dropdown-loading-container">
                    <LynLoading :color="LynLoadingColor['lyn-blue']" />
                </div>
            </template>
            <template v-else-if="childItems.length">
                <button v-for="(item, index) in childItems.slice(0, maxResult)" class="search-dropdown-item" :key="index" @click.prevent="handledSelect(index)">
                    <div class="search-dropdown-item-text">
                        <template v-for="(text, j) in item.dropdownLabel">
                            <template v-if="!text.found">{{ text.subLabel }}</template>
                            <span v-else class="color-lyn-primary-blue lyn-body2-semibold-font" :key="j">{{ text.subLabel }}</span>
                        </template>
                    </div>
                    <div class="search-dropdown-item-tag" v-if="item.tag">
                        {{ item.tag }}
                    </div>
                </button>
            </template>
            <template v-else>
                <div class="search-dropdown-not-found">Aucun résultat associé à la recherche "{{ childQ }}"</div>
            </template>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
@import "../LynInput/lynInput.styl"
@import "./lynSearch.styl"
</style>
