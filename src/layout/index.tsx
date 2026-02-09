import type React from "react";
import Header from "../components/ui/Header";
import Sidebar from "../components/ui/Sidebar";

type Props = {
    children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <div className='flex bg-[#272A30] min-h-screen'>
            <Sidebar />
            <div className='relative flex-1'>
                <Header />
                <main className='p-5 m-5 border'>{children}</main>
            </div>
        </div>
    );
};
export default Layout;
