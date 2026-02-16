import type React from "react";
import Header from "../components/screens/Header";
import Sidebar from "../components/screens/Sidebar";

type Props = {
    children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <div className='bg-primary flex min-h-screen'>
            <Sidebar />
            <div className='relative flex-1'>
                <Header />
                <main className='p-5 m-5 flex-1 overflow-auto'>{children}</main>
            </div>
        </div>
    );
};
export default Layout;
