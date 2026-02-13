export type TableProps = {
    data: MemberTableProps[];
    columns: MemberTableColumns[];
    actions: MemberTableActions;
};

type MemberTableProps = {
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
