import type { App } from "vue";
import {
    LynButton,
    LynButtonDropdown,
    LynCheckbox,
    LynDatePicker,
    LynInput,
    LynLabel,
    LynLink,
    LynLoading,
    LynRadio,
    LynSelect,
    LynSwitch,
    LynTextarea,
    LynSearch,
    LynSearchPappers,
    LynError,
} from "@/components";

export default {
    install: (app: App) => {
        app.component("LynButton", LynButton);
        app.component("LynButtonDropdown", LynButtonDropdown);
        app.component("LynCheckbox", LynCheckbox);
        app.component("LynDatePicker", LynDatePicker);
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
        app.component("LynError", LynError);
    },
};

export { LynButton, LynButtonDropdown, LynCheckbox, LynDatePicker, LynInput, LynLabel, LynLink, LynLoading, LynRadio, LynSelect, LynSwitch, LynTextarea, LynSearch, LynSearchPappers, LynError };
