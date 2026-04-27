import { api } from "../../service/api";
import type { MemberDataProps, MemberTableProps } from "../../types";

interface MembersResponse {
    users: MemberTableProps[];
    total: number;
}

export const getMembers = async (
    page: number,
    limit: number,
    searchQuery?: string,
): Promise<MembersResponse> => {
    const skip = (page - 1) * limit;

    const url = searchQuery
        ? `/users/search?q=${searchQuery}&limit=${limit}&skip=${skip}`
        : `/users?limit=${limit}&skip=${skip}`;

    const { data } = await api.get<MembersResponse>(url);

    return data;
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
