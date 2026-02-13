import Table from "../../components/ui/Table";

const UserMembers = () => {
    return (
        <div className='overflow-auto! max-w-full!'>
            <Table
                data={[
                    {
                        id: 1,
                        name: "Hello",
                        expireTime: "10 feb",
                        phoneNumber: 998991234567,
                        status: "AVAILABLE",
                        type: "Standart",
                    },
                    {
                        id: 2,
                        name: "World",
                        expireTime: "10 feb",
                        phoneNumber: 998991234567,
                        status: "AVAILABLE",
                        type: "Standart",
                    },
                    {
                        id: 3,
                        name: "Hello, World!",
                        expireTime: "10 feb",
                        phoneNumber: 998991234567,
                        status: "AVAILABLE",
                        type: "Standart",
                    },
                ]}
                actions={{
                    delete: true,
                    info: true,
                    update: true,
                }}
                columns={[
                    {
                        key: "name",
                        header: "Name",
                    },
                    {
                        key: "phoneNumber",
                        header: "Phone",
                    },
                    {
                        key: "status",
                        header: "Status",
                    },
                    {
                        key: "type",
                        header: "Type",
                    },
                    {
                        key: "expireTime",
                        header: "Expire Time",
                    },
                ]}
            />
        </div>
    );
};

export default UserMembers;
