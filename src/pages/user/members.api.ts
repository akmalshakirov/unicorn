import { api } from "../../service/api";
import type { MemberTableProps } from "../../types";

interface MembersResponse {
    users: MemberTableProps[];
}

export const getMembers = async (): Promise<MemberTableProps[]> => {
    const { data } = await api.get<MembersResponse>("/users");
    return data.users;
};
