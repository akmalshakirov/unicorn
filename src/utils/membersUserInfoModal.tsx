import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import { api } from "../service/api";
import type { TMembersUserModal } from "../types";

const MembersUserInfoModal = ({ id, onClose, open }: TMembersUserModal) => {
    const { data, isLoading } = useQuery({
        queryKey: ["usermemberinfo", id],
        queryFn: async () => {
            const { data } = await api.get(`/users/${id}`);
            return data;
        },
        enabled: open && !!id,
    });

    const [userData, setUserData] = useState<{
        firstName: string;
        lastName: string;
    }>({
        firstName: "",
        lastName: "",
    });

    useEffect(() => {
        if (data) {
            setUserData({
                firstName: data.firstName,
                lastName: data.lastName,
            });
        }
    }, [data]);

    return (
        <Modal
            open={open}
            onClose={onClose}
            clickOutsideClose
            title='info and update modal'>
            <div className='flex text-center flex-col'>
                {isLoading ? (
                    <p className='text-center'>Loading...</p>
                ) : (
                    <form>
                        <div className='flex items-center gap-2'>
                            <b>First name:</b>
                            <Input
                                name='firstname'
                                inputClassName='py-1! rounded-lg'
                                type='text'
                                value={userData.firstName}
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        firstName: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        <div className='flex items-center justify-end gap-4 mt-5'>
                            <button
                                type='reset'
                                onClick={onClose}
                                className='px-2 py-1 border-2 border-gray-500/67 hover:bg-primary bg-primary/40 rounded-xl'>
                                Close
                            </button>
                            <button className='px-2 py-1 border-2 border-stroke bg-stroke/20 hover:bg-stroke transition rounded-xl'>
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </Modal>
    );
};

export default MembersUserInfoModal;
