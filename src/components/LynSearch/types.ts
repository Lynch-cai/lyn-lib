export interface Item {
    data: any;
    label: string;
    tag?: string | undefined;
}

export interface SearchDropdownItem {
    data: any;
    label: string;
    tag?: string | undefined;
    dropdownLabel?: {
        found: boolean;
        subLabel: string;
    }[];
}
