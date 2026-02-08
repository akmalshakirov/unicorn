import axios, { isAxiosError } from "axios";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../utils/toast";

const LoginPage = () => {
    const [data, setData] = useState<{
        login: string;
        password: string;
        rememberMe: boolean;
    }>({
        login: "",
        password: "",
        rememberMe: false,
    });

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/login", {
                username: data.login,
                password: data.password,
                rememberMe: data.rememberMe,
            });

            Toast({ content: response.data.message, variant: "success" });

            localStorage.setItem("access-token", response.data.token);
            navigate("/");
        } catch (error) {
            if (isAxiosError(error)) {
                Toast({
                    content: error.response?.data.error || error.message,
                    variant: "error",
                });
            }
            console.log(error);
        }
    };

    return (
        <div className='flex items-center justify-center bg-[url(/login-bg.png)] min-h-screen h-full bg-no-repeat bg-cover bg-center relative after:absolute after:bg-black/50 after:w-full after:h-full after:-z-1 z-0 p-3'>
            <form
                className='bg-[#2d2f35de] backdrop-blur-lg rounded-[20px] py-7 2xl:py-13 max-w-sm md:max-w-md 2xl:max-w-lg w-full'
                onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <img src='/logo.png' alt='logo' className='mx-auto' />
                </div>

                <h2 className='text-white text-2xl md:text-3xl tracking-wider font-semibold text-center mb-10'>
                    WELCOME
                </h2>

                <div className='px-10 md:px-15 space-y-10'>
                    <label className='flex flex-col justify-center gap-2 relative'>
                        Login:
                        <span className='absolute top-[53.5%] left-[7px] pointer-events-none'>
                            {/* <img src='/login-icon.svg' alt='Login icon' /> */}
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0_128_645)'>
                                    <path
                                        d='M12.0001 12C14.2101 12 16.0001 10.21 16.0001 7.99998C16.0001 5.78998 14.2101 3.99998 12.0001 3.99998C9.79012 3.99998 8.00012 5.78998 8.00012 7.99998C8.00012 10.21 9.79012 12 12.0001 12ZM12.0001 14C9.33012 14 4.00012 15.34 4.00012 18V20H20.0001V18C20.0001 15.34 14.6701 14 12.0001 14Z'
                                        fill='#9B74F0'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_128_645'>
                                        <rect
                                            width='24'
                                            height='24'
                                            fill='white'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <input
                            type='text'
                            className='rounded-[20px] p-2.5 bg-[#3c3e47] focus:bg-[#4b4c54] pl-10 outline-none focus:ring-2 focus:ring-[#9B74F0] transition'
                            placeholder='Javlon'
                            title='Enter your login'
                            aria-label='Enter your login'
                            name='login'
                            required
                            autoComplete='username'
                            value={data.login}
                            onChange={handleChange}
                            pattern='[^\s]+'
                        />
                    </label>
                    <label className='flex flex-col justify-center gap-2 relative'>
                        Password:
                        <span className='absolute top-[53.5%] left-[7px] pointer-events-none'>
                            {/* <img src='/password-icon.svg' alt='Password icon' /> */}
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0_128_651)'>
                                    <path
                                        d='M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z'
                                        fill='#9B74F0'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_128_651'>
                                        <rect
                                            width='24'
                                            height='24'
                                            fill='white'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <input
                            type='password'
                            className='rounded-[20px] p-2.5 bg-[#3c3e47] focus:bg-[#4b4c54] pl-10 outline-none focus:ring-2 focus:ring-[#9B74F0] transition'
                            placeholder='*******'
                            title='Enter your password'
                            aria-label='Enter your password'
                            name='password'
                            required
                            autoComplete='new-password'
                            value={data.password}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='ml-2'>
                        <input
                            type='checkbox'
                            name='rememberMe'
                            className='mr-3'
                            checked={data.rememberMe}
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    rememberMe: e.target.checked,
                                }))
                            }
                        />
                        Remember me
                    </label>
                    <button className='w-full bg-[#9B74F0] hover:bg-[#7c50db] transition mt-4 rounded-[20px] py-2 cursor-pointer active:translate-y-1'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
