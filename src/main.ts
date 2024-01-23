import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";

import ElementPlus from "element-plus";
// @ts-ignore
import fr from "element-plus/dist/locale/fr.mjs";

const app = createApp(App);
app.use(ElementPlus, {
    locale: fr,
});
app.use(router);
app.mount("#app");
