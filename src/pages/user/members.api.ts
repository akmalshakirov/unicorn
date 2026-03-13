import { api } from "../../service/api";
import type { MemberDataProps, MemberTableProps } from "../../types";

interface MembersResponse {
    users: MemberTableProps[];
}

export const getMembers = async (): Promise<MemberTableProps[]> => {
    const { data } = await api.get<MembersResponse>("/users");
    return data.users;
};

export const addMember = async ({
    date,
    gender,
    name,
    phoneNumber,
}: MemberDataProps) => {
    const { data } = await api.post("/users/add", {
        date,
        gender,
        name,
        phoneNumber,
    });
    return data;
};
