import type { App } from "vue";
import { LynButton, LynCheckbox, LynInput, LynLoading, LynSelect, LynTextarea } from "@/components";

export default {
    install: (app: App) => {
        app.component("LynButton", LynButton);
        app.component("LynCheckbox", LynCheckbox);
        app.component("LynInput", LynInput);
        app.component("LynLoading", LynLoading);
        app.component("LynSelect", LynSelect);
        app.component("LynTextarea", LynTextarea);
    },
};

export { LynButton, LynCheckbox, LynInput, LynLoading, LynSelect, LynTextarea };
