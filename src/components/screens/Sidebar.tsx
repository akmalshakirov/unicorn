import { NavLink, useNavigate } from "react-router-dom";
import { SIDEBAR_DATA } from "../../constants/data";
import { LogOutIcon } from "lucide-react";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate("/login", { replace: true });
        localStorage.clear();
    };

    return (
        <aside className='bg-secondary w-56 p-5 overflow-x-auto hidden max-h-screen sm:flex flex-col justify-between'>
            <div>
                <div className='mb-7'>
                    <NavLink to='/'>
                        <img
                            src='/sidebar-logo.png'
                            alt='Sidebar logo'
                            className='mx-auto'
                        />
                    </NavLink>
                </div>
                <div className='flex flex-col gap-2'>
                    {SIDEBAR_DATA.map((s) => (
                        <NavLink
                            key={s.id}
                            to={s.to}
                            className={({ isActive }) =>
                                `outline-none px-2 pl-3 py-3 rounded-2xl flex items-center transition font-bold gap-2 ${isActive ? "bg-stroke" : "hover:bg-gray-400/20 focus:bg-gray-400/25 focus:ring-2 focus:ring-[#70737f]"}`
                            }>
                            <span>{<s.icon />}</span>
                            <span>{s.label}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <button
                className='px-2 pl-3 py-3 rounded-2xl flex w-full cursor-pointer items-center transition font-bold gap-2 outline-none hover:bg-red-500/50 focus:bg-gray-400/25 focus:ring-2 focus:ring-[#70737f]'
                onClick={handleLogOut}>
                <span>{<LogOutIcon />}</span>
                Logout
            </button>
        </aside>
    );
};

export default Sidebar;
