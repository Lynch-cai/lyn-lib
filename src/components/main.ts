import type { App } from "vue";
import { LynButton, LynButtonDropdown, LynCheckbox, LynInput, LynLabel, LynLink, LynLoading, LynRadio, LynSelect, LynSwitch, LynTextarea, LynSearch, LynSearchPappers } from "@/components";

export default {
    install: (app: App) => {
        app.component("LynButton", LynButton);
        app.component("LynButtonDropdown", LynButtonDropdown);
        app.component("LynCheckbox", LynCheckbox);
        app.component("LynInput", LynInput);
        app.component("LynLabel", LynLabel);
        app.component("LynLink", LynLink);
        app.component("LynLoading", LynLoading);
        app.component("LynRadio", LynRadio);
        app.component("LynSelect", LynSelect);
        app.component("LynSwitch", LynSwitch);
        app.component("LynTextarea", LynTextarea);
        app.component("LynSearch", LynSearch);
        app.component("LynSearchPappers", LynSearchPappers);
    },
};

export { LynButton, LynButtonDropdown, LynCheckbox, LynInput, LynLabel, LynLink, LynLoading, LynRadio, LynSelect, LynSwitch, LynTextarea, LynSearch, LynSearchPappers };
