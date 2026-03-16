import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Filter, Plus } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Input from "../../components/ui/Input";
import Modal from "../../components/ui/Modal";
import Table from "../../components/ui/Table";
import { MEMBERS_TABLE_COLUMNS } from "../../constants/data";
import type { MemberDataProps } from "../../types";
import Toast from "../../utils/toast";
import { addMember, getMembers } from "./members.api";

const UserMembers = () => {
    const [visible, setVisible] = useState(false);

    const [memberData, setMemberData] = useState<MemberDataProps>({
        date: "",
        gender: "male",
        name: "",
        phoneNumber: "",
    });

    const [searchQuery, setSearchQuery] = useState("");

    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["members"],
        queryFn: getMembers,
        staleTime: 1000 * 60 * 2,
    });

    const mutation = useMutation({
        mutationFn: addMember,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["members"],
            });

            Toast({
                content: "Member added successfully.",
                variant: "success",
            });
            setVisible(false);

            setMemberData({
                date: "",
                gender: "male",
                name: "",
                phoneNumber: "",
            });
        },
        onError(error) {
            console.error(error);
        },
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setMemberData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutation.mutate(memberData);
    };

    const handleChangePhoneNum = (e: ChangeEvent<HTMLInputElement>) => {
        setMemberData((prev) => ({
            ...prev,
            phoneNumber: e.target.value.replace(/\D/g, "").slice(0, 9),
        }));
    };

    //dont read 🥀🥀🥀. CONDITIONAL RENDERS should be written after all the freakin' HOOKS !!!
    if (isLoading) return <h2>Loading members...</h2>;
    if (isError) return <pre>Error: {error.message}</pre>;

    return (
        <div className='overflow-auto max-w-full p-1'>
            <Modal
                showDefaultFooter
                open={visible}
                onClose={() => setVisible(false)}
                clickOutsideClose
                title='Add new member'>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <div className='flex gap-10'>
                        <label className='flex flex-1 flex-col gap-1'>
                            Name:
                            <Input
                                autoFocus
                                required
                                autoComplete='name'
                                name='name'
                                onChange={handleChange}
                                value={memberData.name}
                            />
                        </label>

                        <label className='flex flex-1 flex-col gap-1'>
                            Date of birth:
                            <Input
                                required
                                type='date'
                                name='date'
                                onChange={handleChange}
                                value={memberData.date}
                            />
                        </label>
                    </div>

                    <div className='flex gap-10'>
                        <label className='flex flex-col gap-1'>
                            Phone number:
                            <div className='relative'>
                                <span className='absolute top-1/2 text-gray-300 -translate-y-1/2 left-2'>
                                    +998
                                </span>
                                <Input
                                    inputClassName='pl-12 w-[85.5%]'
                                    required
                                    type='text'
                                    name='phoneNumber'
                                    onChange={handleChangePhoneNum}
                                    value={memberData.phoneNumber}
                                />
                            </div>
                        </label>

                        <div className='flex-1'>
                            <p className='block mb-2'>Gender:</p>

                            <div>
                                <label className='mr-4'>
                                    <input
                                        className='mr-2'
                                        type='radio'
                                        name='gender'
                                        value='male'
                                        checked={memberData.gender === "male"}
                                        onChange={handleChange}
                                    />
                                    Male
                                </label>

                                <label>
                                    <input
                                        className='mr-2'
                                        type='radio'
                                        name='gender'
                                        value='female'
                                        checked={memberData.gender === "female"}
                                        onChange={handleChange}
                                    />
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <button
                            type='reset'
                            onClick={() => setVisible(false)}
                            className='py-1 px-4 rounded-xl mr-2 border border-gray-500/67'>
                            Cancel
                        </button>

                        <button
                            type='submit'
                            className='py-1 px-4 bg-stroke focus-visible:bg-stroke/10 transition rounded-xl active:translate-y-1'>
                            {mutation.isPending ? "Creating..." : "Create"}
                        </button>
                    </div>
                </form>
            </Modal>

            <div className='mb-7 flex items-center justify-between'>
                <Input
                    name='query'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search Members'
                    leftIcon
                    inputClassName='focus:bg-stroke/5'
                />

                <div className='flex items-center gap-2'>
                    <button className='rounded-2xl hover:bg-stroke/20 ring-2 ring-transparent border-transparent hover:ring-stroke/67 active:translate-y-0.5 active:bg-stroke/30 px-3 py-2 transition bg-secondary flex items-center gap-2 text-white duration-75'>
                        <Filter size={20} />
                        Filter
                    </button>

                    <button
                        className='rounded-2xl hover:bg-stroke/20 ring-2 ring-transparent border-transparent hover:ring-stroke/67 active:translate-y-0.5 active:bg-stroke/30 px-3 py-2 transition bg-secondary flex items-center gap-2 text-white duration-75'
                        onClick={() => setVisible(true)}>
                        <Plus />
                        Add new
                    </button>
                </div>
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
        </div>
    );
};

export default UserMembers;
