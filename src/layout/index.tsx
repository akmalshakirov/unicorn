import type React from "react";
import Header from "../components/screens/Header";
import Sidebar from "../components/screens/Sidebar";

type Props = {
    children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <div className='flex bg-primary h-screen'>
            <Sidebar />
            <div className='flex flex-col flex-1'>
                <Header />
                <div className='overflow-auto'>
                    <main className='p-7'>{children}</main>
                </div>
            </div>
        </div>
    );
};
export default Layout;
