import Table from "../../components/ui/Table";
import { MEMBERS_TABLE_COLUMNS } from "../../constants/data";

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
                columns={MEMBERS_TABLE_COLUMNS}
            />
        </div>
    );
};

export default UserMembers;
