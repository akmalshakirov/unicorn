import type {
    ChangeEvent,
    HTMLInputAutoCompleteAttribute,
    ReactNode,
} from "react";

export type TableProps = {
    data: MemberTableProps[] | undefined;
    columns: MemberTableColumns[];
    actions: MemberTableActions;
    maxHeight?: string;
};

export type MemberTableProps = {
    id: number;
    name: string;
    phoneNumber: number;
    status: string;
    type: string;
    expireTime: string;
    [key: string]: string | number;
};

type MemberTableColumns = {
    key: string;
    header: string;
};

type MemberTableActions = {
    info?: boolean;
    update?: boolean;
    delete?: boolean;
};

export type InputProps = {
    name: string;
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    autoFocus?: boolean;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    leftIcon?: boolean | ReactNode;
};
