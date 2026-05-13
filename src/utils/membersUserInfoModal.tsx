import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState, type FormEvent } from "react";
import Input from "../components/ui/Input";
import Modal from "../components/ui/Modal";
import { api } from "../service/api";
import type { TMembersUserModal } from "../types";
import Toast from "./toast";

const MembersUserInfoModal = ({ id, onClose, open }: TMembersUserModal) => {
    const { data, isLoading } = useQuery({
        queryKey: ["usermemberinfo", id],
        queryFn: async () => {
            const { data } = await api.get(`/users/${id}`);
            return data;
        },
        enabled: open && !!id,
    });

    const [userData, setUserData] = useState({ firstName: "", lastName: "" });

    useEffect(() => {
        if (data) {
            setUserData({
                firstName: data.firstName,
                lastName: data.lastName,
            });
        }
    }, [data]);

    const handleChange =
        (field: keyof typeof userData) =>
        (e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData((prev) => ({ ...prev, [field]: e.target.value }));

    const { mutate } = useMutation({
        mutationFn: () => api.put(`/users/${id}`),
        onSuccess() {
            Toast({
                variant: "success",
                content: "Your nigga's info js updated",
            });
            onClose();
        },
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            clickOutsideClose
            title='Member Info'>
            <div className='flex flex-col gap-4'>
                {isLoading ? (
                    <p className='text-center text-gray-400 py-4'>Loading...</p>
                ) : (
                    <form
                        className='flex flex-col gap-6'
                        onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-4'>
                                <label
                                    className='w-24 text-sm font-semibold shrink-0'
                                    htmlFor='firstName'>
                                    First name:
                                </label>
                                <Input
                                    name='firstName'
                                    className='flex-1'
                                    inputClassName='py-1 rounded-lg'
                                    type='text'
                                    value={userData.firstName}
                                    onChange={handleChange("firstName")}
                                />
                            </div>

                            <div className='flex items-center gap-4'>
                                <label
                                    className='w-24 text-sm font-semibold shrink-0'
                                    htmlFor='lastName'>
                                    Last name:
                                </label>
                                <Input
                                    name='lastName'
                                    className='flex-1'
                                    inputClassName='py-1 rounded-lg'
                                    type='text'
                                    value={userData.lastName}
                                    onChange={handleChange("lastName")}
                                />
                            </div>
                        </div>

                        <div className='flex items-center justify-end gap-3'>
                            <button
                                type='reset'
                                onClick={onClose}
                                className='px-4 py-1.5 rounded-xl border-2 border-gray-500/50 bg-primary/40 hover:bg-primary transition'>
                                Close
                            </button>
                            <button
                                type='submit'
                                className='px-4 py-1.5 rounded-xl border-2 border-stroke bg-stroke hover:bg-stroke/70 transition'>
                                Save
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </Modal>
    );
};

export default MembersUserInfoModal;
