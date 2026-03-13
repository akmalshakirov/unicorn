import type { ChangeEvent, ReactElement, ReactNode } from "react";
import React from "react";

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

export type ModalProps = {
    title?: string;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    footerChildren?: ReactNode;
    clickOutsideClose?: boolean;
    showDefaultFooter?: boolean;
};

export type InputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange"
> & {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    inputClassName?: string;
    leftIcon?: boolean | ReactElement;
    label?: string;
};

export type MemberDataProps = {
    name: string;
    date: string;
    phoneNumber: string;
    gender: "male" | "female";
};
