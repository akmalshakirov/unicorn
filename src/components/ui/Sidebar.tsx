import { NavLink } from "react-router-dom";
import { SIDEBAR_DATA } from "../../constants/data";

const Sidebar = () => {
    return (
        <aside className='bg-[#343743] max-w-[17vw] w-full p-5'>
            <div className='mb-10'>
                <a href='/'>
                    <img
                        src='/sidebar-logo.png'
                        alt='Sidebar logo'
                        className='mx-auto'
                    />
                </a>
            </div>
            <div className='flex flex-col gap-2'>
                {SIDEBAR_DATA.map((s) => {
                    const Icon = s.icon;
                    return (
                        <NavLink
                            key={s.id}
                            to={s.to}
                            className={({ isActive }) =>
                                `px-2 pl-3 py-3 rounded-2xl flex items-center transition font-bold gap-2 ${isActive ? "bg-[#9B74F0]" : "hover:bg-gray-400/20"}`
                            }>
                            <span>{<Icon />}</span>
                            <span>{s.label}</span>
                        </NavLink>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;
