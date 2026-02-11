const Header = () => {
    return (
        <header className='sticky top-0 w-full p-3 bg-[#272A30] shadow-[0_7px_7px_2px_#00000010]'>
            <div className='flex items-center justify-end gap-5'>
                <button>Lang</button>
                <button>Settings</button>
                <button>Account</button>
            </div>
        </header>
    );
};

export default Header;
