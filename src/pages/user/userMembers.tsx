import { useQuery } from "@tanstack/react-query";
import { getMembers } from "./members.api";
import { MEMBERS_TABLE_COLUMNS } from "../../constants/data";
import Table from "../../components/ui/Table";
import Input from "../../components/ui/Input";
import { useState } from "react";

// [
//     {
//         id: 1,
//         name: "Hello",
//         expireTime: "10 feb",
//         phoneNumber: 998991234567,
//         status: "AVAILABLE",
//         type: "Standart",
//     },
//     {
//         id: 2,
//         name: "World",
//         expireTime: "10 feb",
//         phoneNumber: 998991234567,
//         status: "AVAILABLE",
//         type: "Standart",
//     },
//     {
//         id: 3,
//         name: "Hello, World!",
//         expireTime: "10 feb",
//         phoneNumber: 998991234567,
//         status: "AVAILABLE",
//         type: "Standart",
//     },
// ];

const UserMembers = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["members"],
        queryFn: getMembers,
        staleTime: 1000 * 60 * 2,
    });

    const [searchQuery, setSearchQuery] = useState<string>("");

    if (isLoading) return <h2>Loading members...</h2>;
    if (isError) return <pre>Error with: {error.message}</pre>;

    return (
        <div className='overflow-auto max-w-full p-1'>
            <div className='mb-7'>
                <Input
                    name='query'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <Table
                data={data}
                actions={{
                    delete: true,
                    info: true,
                    update: true,
                }}
                columns={MEMBERS_TABLE_COLUMNS}
                maxHeight='75vh'
            />
            {/* {data?.map((i) => (
                <div key={i.id}>{i.firstName}</div>
            ))} */}
        </div>
    );
};

export default UserMembers;
