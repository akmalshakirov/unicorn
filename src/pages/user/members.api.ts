import { api } from "../../service/api";
import type { MemberDataProps, MemberTableProps } from "../../types";

interface MembersResponse {
    users: MemberTableProps[];
}

export const getMembers = async (
    page: number,
    limit: number,
): Promise<MemberTableProps[]> => {
    const skip = (page - 1) * limit;
    const { data } = await api.get<MembersResponse>(
        `/users?limit=${limit}&skip=${skip}`,
    );
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
