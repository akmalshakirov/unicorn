import { CircleUserRound, Globe, Settings } from "lucide-react";

const Header = () => {
    return (
        <header className='top-0 p-3 bg-primary shadow-[0_7px_7px_2px_#00000007]'>
            <div className='flex items-center justify-end gap-5 **:stroke-stroke'>
                <button className='cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1'>
                    <Globe size={20} />
                </button>
                <button className='cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1'>
                    <Settings size={20} />
                </button>
                <button className='cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1'>
                    <CircleUserRound size={20} />
                </button>
            </div>
        </header>
    );
};

export default Header;
