export class StorybookSourceUtils {
    static removeDefaultSlotTemplate = (source: string) => {
        source = this.removeTag(source, "<template #default>", "</template>");
        return source;
    };

    static removeTag = (source: string, openTag: string, closeTag: string) => {
        const openTagIndex = source.indexOf(openTag);
        if (openTagIndex !== -1) {
            const closeTagIndex = source.indexOf(closeTag, openTagIndex);
            if (closeTagIndex !== -1) {
                source = source.substring(0, openTagIndex) + source.substring(openTagIndex + openTag.length, closeTagIndex) + source.substring(closeTagIndex + closeTag.length);
                return source;
            }
        }
        return source;
    };

    static convertValueToModelValue = (source: string, type: "string" | "boolean" | "number") => {
        const regex = new RegExp(`[: ]value`, "g");
        const match = regex.exec(source);
        let formatedType = "string";

        if (type) {
            formatedType = type.slice(0, 1).toUpperCase() + type.slice(1);
        }

        if (match) {
            source = this.convertValueToNewValue(source, match[0], ` v-model:value="your${formatedType}Variable"`);
        }
        return source;
    };

    static convertValueToNewValue = (source: string, oldName: string, newName: string) => {
        const regex = new RegExp(`${oldName}="([^"]*)"`, "g");
        source = source.replace(regex, newName);
        return source;
    };

    static addLineAtStart = (source: string, start: string) => {
        source = start + "\n" + source;
        return source;
    };
}
