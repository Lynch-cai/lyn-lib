<script lang="ts">
import { RouterView } from "vue-router";

import { Type as LynButtonType } from "@/components/LynButton/types";
import { Type as LynInputType } from "@/components/LynInput/types";
import { Color as LynLoadingColor } from "@/components/LynLoading/types";
import { FontWeight as LynLinkFontWeight, Size as LynLinkSize } from "@/components/LynLink/types";
import { Type as LynButtonDropdownType, DropdownType as LynButtonDropdownDropdownType } from "@/components/LynButtonDropdown/types";

import LynButton from "@/components/LynButton/LynButton.vue";
import LynButtonDropdown from "@/components/LynButtonDropdown/LynButtonDropdown.vue";
import LynInput from "@/components/LynInput/LynInput.vue";
import LynCheckbox from "@/components/LynCheckbox/LynCheckbox.vue";
import LynLoading from "@/components/LynLoading/LynLoading.vue";
import LynRadio from "@/components/LynRadio/LynRadio.vue";
import LynLink from "@/components/LynLink/LynLink.vue";
import LynSelect from "@/components/LynSelect/LynSelect.vue";
import LynTextarea from "@/components/LynTextarea/LynTextarea.vue";
import LynLabel from "@/components/LynLabel/LynLabel.vue";
import LynSwitch from "@/components/LynSwitch/LynSwitch.vue";
import LynSearch from "@/components/LynSearch/LynSearch.vue";
import LynSearchPappers from "./components/LynSearchPappers/LynSearchPappers.vue";
import { Item } from "./components/LynSearch/types";
import { nextTick } from "vue";

export default {
    components: { RouterView, LynButton, LynButtonDropdown, LynInput, LynCheckbox, LynLoading, LynRadio, LynLink, LynSelect, LynTextarea, LynLabel, LynSwitch, LynSearch, LynSearchPappers },
    data() {
        return {
            // Types
            LynButtonType,
            LynInputType,
            LynLoadingColor,
            LynLinkFontWeight,
            LynLinkSize,
            LynButtonDropdownType,
            LynButtonDropdownDropdownType,

            dropdownButtons: [
                {
                    action: "action_1",
                    text: "Action 1",
                    icon: "lyn-icon-save-16px",
                },
                {
                    action: "action_2",
                    text: "Action 2",
                    icon: "lyn-icon-save-16px",
                },
                {
                    action: "action_3",
                    text: "Action 3",
                    icon: "lyn-icon-save-16px",
                },
            ],

            inputValue: "",
            inputValue2: "",
            inputValue3: "",

            radioValue: "radio1",

            selectValue: "",
            selectValue2: "test1",

            checkboxValue: false,
            checkboxValue2: false,

            textareaValue: "",
            textareaValue2: "",

            switchValue: false,

            searchItems: [
                {
                    data: {
                        name: "test",
                        lastName: "test",
                    },
                    label: "test",
                },
                {
                    data: {
                        name: "test2",
                        lastName: "test",
                    },
                    label: "test2",
                },
            ],
            searchSelectValue: {},
            searchValue: [],
            searchPappersItems: [] as Item[],
            q: "",
            blockDropdown: true,
        };
    },
    methods: {
        log(thing: any) {
            if (typeof thing === "object") {
                console.log(thing);
                return;
            }
            console.log(`log: ${thing}`);
        },
    },
    watch: {
        searchPappersItems() {
            if (this.searchPappersItems[0]) {
                this.searchPappersItems[0].tag = "Nouveau Client";
            }
            if (this.searchPappersItems[1]) {
                this.searchPappersItems[1].tag = "CRM";
            }
        },
    },
    async mounted() {
        await nextTick();
        this.q = "11";
        await nextTick();
        this.blockDropdown = false;
    },
};
</script>

<template>
    <div style="display: flex; flex-direction: column; gap: 3rem; width: 600px; margin: 2rem auto">
        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Button</h2>
            <LynButton :type="LynButtonType.primary">test</LynButton>
            <LynButton :type="LynButtonType.secondary">test</LynButton>
            <LynButton :type="LynButtonType.tertiary">test</LynButton>
            <LynButton>test</LynButton>
            <LynButton :type="LynButtonType.primary" :is-loading="true">testttt</LynButton>
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Loading</h2>
            <LynLoading :color="LynLoadingColor['lyn-blue']" />
            <div style="background: black"><LynLoading :color="LynLoadingColor['lyn-white']" /></div>
            <LynLoading :color="LynLoadingColor['lyn-black']" />
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Button Dropdown</h2>
            <LynButtonDropdown :type="LynButtonDropdownType.primary" :dropdown-type="LynButtonDropdownDropdownType.single" @click="log(1)">
                Open dropdown
                <template #dropdown>
                    <LynButton :type="LynButtonType.tertiary" @click="log(2)"><span class="icon-save-16px"></span>Action 1</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(3)">Action 2</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(4)">Action 3</LynButton>
                </template>
            </LynButtonDropdown>
            <LynButtonDropdown :type="LynButtonDropdownType.secondary" :dropdown-type="LynButtonDropdownDropdownType.single" @click="log(1)">
                Open dropdown
                <template #dropdown>
                    <LynButton :type="LynButtonType.tertiary" @click="log(2)"><span class="icon-save-16px"></span>Action 1</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(3)">Action 2</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(4)">Action 3</LynButton>
                </template>
            </LynButtonDropdown>
            <LynButtonDropdown :type="LynButtonDropdownType.primary" :dropdown-type="LynButtonDropdownDropdownType.split" @click="log(1)">
                Action 0
                <template #dropdown>
                    <LynButton :type="LynButtonType.tertiary" @click="log(2)"><span class="icon-save-16px"></span>Action 1</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(3)">Action 2</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(4)">Action 3 LONG TEXT</LynButton>
                </template>
            </LynButtonDropdown>
            <LynButtonDropdown :type="LynButtonDropdownType.primary" :dropdown-type="LynButtonDropdownDropdownType.split" @click="log(1)">
                Action 0 LONG TEXT
                <template #dropdown>
                    <LynButton :type="LynButtonType.tertiary" @click="log(2)"><span class="icon-save-16px"></span>Action 1</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(3)">Action 2</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(4)">Action 3</LynButton>
                </template>
            </LynButtonDropdown>
            <LynButtonDropdown :type="LynButtonDropdownType.secondary" :dropdown-type="LynButtonDropdownDropdownType.split" @click="log(1)">
                Action 0
                <template #dropdown>
                    <LynButton :type="LynButtonType.tertiary" @click="log(2)"><span class="icon-save-16px"></span>Action 1</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(3)">Action 2</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(4)">Action 3</LynButton>
                </template>
            </LynButtonDropdown>
            <LynButtonDropdown :type="LynButtonDropdownType.primary" :dropdown-type="LynButtonDropdownDropdownType.single" :icon-only="true" @click="log(1)">
                <span class="icon-plus-16px color-lyn-white"></span>
                <template #dropdown>
                    <LynButton :type="LynButtonType.tertiary" @click="log(2)"><span class="icon-save-16px"></span>Action 1</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(3)">Action 2</LynButton>
                    <LynButton :type="LynButtonType.tertiary" @click="log(4)">Action 3</LynButton>
                </template>
            </LynButtonDropdown>
        </div>
        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Input</h2>
            {{ inputValue }}
            <LynInput :type="LynInputType.number" v-model:value="inputValue" />
            {{ inputValue2 }}
            <LynInput :type="LynInputType.text" placeholder="test" v-model:value="inputValue2" />
            {{ inputValue3 }}
            <LynInput :type="LynInputType.text" placeholder="test" v-model:value="inputValue3" :has-error="true" error-msg="Error message" />
            <LynInput :type="LynInputType.text" v-model:value="inputValue">
                <template #icon-left><span class="icon-search-16px color-lyn-grey300"></span></template>
            </LynInput>
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Textarea</h2>
            {{ textareaValue }}
            <LynTextarea placeholder="Insert text" v-model:value="textareaValue" />
            {{ textareaValue2 }}
            <LynTextarea error-msg="Error message" :has-error="true" placeholder="Insert text" v-model:value="textareaValue2" />
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Checkbox</h2>
            {{ checkboxValue }}
            <LynCheckbox label="test" v-model:value="checkboxValue" />
            {{ checkboxValue2 }}
            <LynCheckbox label="test" v-model:value="checkboxValue2" :has-error="true" />
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Radio</h2>
            <span>{{ radioValue }}</span>
            <LynRadio label="Radio1" name="form" id="radio1" radio-value="radio1" v-model:value="radioValue" />
            <LynRadio label="Radio2" name="form" id="radio2" radio-value="radio2" v-model:value="radioValue" />
            <LynRadio label="Radio3" name="form" id="radio3" radio-value="radio3" v-model:value="radioValue" :has-error="true" error-msg="Error message" />
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Select</h2>
            {{ selectValue }}
            <LynSelect placeholder="Select an option" v-model:value="selectValue">
                <option value="option_1">Option 1</option>
                <option value="option_2">Option 2</option>
                <option value="option_3">Option 3</option>
            </LynSelect>
            {{ selectValue2 }}
            <LynSelect placeholder="Select an option" v-model:value="selectValue2" :has-error="true" error-msg="Error message">
                <option value="option_1">Option 1</option>
                <option value="option_2">Option 2</option>
                <option value="option_3">Option 3</option>
            </LynSelect>
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Label</h2>
            <LynLabel for="input">label</LynLabel>
            <LynInput id="input"></LynInput>
            <LynLabel :padding="false">label</LynLabel>
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Link</h2>
            <LynLink href="https://google.com" target="_blank">Classic a tag link</LynLink>
            <LynLink :is-router-link="true" href="button">Router link : Button</LynLink>
            <LynLink href="https://google.com" :has-underline="true">Has underline</LynLink>
            <LynLink href="https://google.com" :font-weight="LynLinkFontWeight.bold">Bold</LynLink>
            <LynLink href="https://google.com" :size="LynLinkSize.small">Small</LynLink>
            <RouterView />
        </div>

        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Switch</h2>
            <LynSwitch v-model:value="switchValue" />
        </div>
        <div class="lyn-comp-box">
            <h2 class="lyn-h2-font">Search</h2>
            <LynSearch :items="searchItems" @select="log($event)" />
            <LynSearch :items="searchItems" :is-loading="true" @select="log($event)" />
            <LynSearch :items="[]" :is-loading="true" @select="log($event)" />
            <LynSearch :items="[]" @select="log($event)" />
            <LynSearch :block-dropdown="blockDropdown" :q="q" :items="[]" @select="log($event)" :has-error="true" error-msg="Error message" />

            <button @click="q = '11'">Change la recherche</button>
            <button @click="q = '22'">Change la recherche</button>

            <h2 class="lyn-h2-font">Search Pappers</h2>
            <LynSearchPappers v-model:select="searchSelectValue" v-model:search="searchValue" v-model:items="searchPappersItems" :max-result="5" />
            <LynSearchPappers v-model:select="searchSelectValue" v-model:search="searchValue" v-model:items="searchPappersItems" :max-result="5" :has-error="true" error-msg="Error message" />
            {{ searchSelectValue }}
            <hr />
            {{ searchValue }}
        </div>
    </div>
</template>

<style lang="stylus">
@import "./assets/styles/all.styl"
.lyn-comp-box
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid #999999
</style>
