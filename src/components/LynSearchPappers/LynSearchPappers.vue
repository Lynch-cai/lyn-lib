<script lang="ts">
import { PropType, defineComponent } from "vue";
import LynSearch from "@/components/LynSearch/LynSearch.vue";
import { Item } from "@/components/LynSearch/types";
import { PappersUtils } from "@/utils/pappers.utils";

export default defineComponent({
    components: { LynSearch },
    emit: ["update:search", "update:select", "update:items"],
    props: {
        items: {
            type: Array as PropType<Item[]>,
            default: () => [] as Item[],
        },
        maxResult: {
            type: Number,
            default: 7,
        },
    },
    data: () => ({
        childItems: [] as Item[],
        isFetching: false,
        q: "",
    }),
    methods: {
        handleSelect($event: Item): void {
            this.q = $event.data.nom_entreprise;
            this.$emit("update:select", $event.data);
        },
        async handleSearch(q: string): Promise<void> {
            this.isFetching = true;
            this.q = q;
            const companies = await this.search(q);
            this.childItems = this.formatItems(companies);
            this.$emit("update:search", companies);
            this.$emit("update:items", this.childItems);
            this.isFetching = false;
        },
        async search(q: string): Promise<object[]> {
            if (q) {
                const response = await PappersUtils.getCompanyInformationBySirenAndName(q);
                const companies = response.resultats_nom_entreprise.length ? response.resultats_nom_entreprise : response.resultats_siren.length ? response.resultats_siren : response.resultats_siret;
                return companies;
            }
            return [];
        },
        formatItems(companies: object[]): Item[] {
            return companies.map((company: any) => {
                const label = `${company.nom_entreprise} - ${company.siege.siret}`;
                return { data: company, label, tag: "" };
            });
        },
    },
    watch: {
        items() {
            this.childItems = this.items;
        },
    },
});
</script>

<template>
    <LynSearch @search="handleSearch($event)" @select="handleSelect($event)" :items="childItems" :is-loading="isFetching" :q="q" :max-result="maxResult" />
</template>
