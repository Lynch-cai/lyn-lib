export enum Size {
    medium = "medium",
    small = "small",
}

export interface Option {
    value: string;
    label: string;
    disabled?: boolean;
}
