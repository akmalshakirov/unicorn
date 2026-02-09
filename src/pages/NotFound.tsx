import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen h-full flex items-center flex-col justify-center gap-3 bg-[#272A30]'>
            <h1 className='font-bold text-4xl/snug'>Not found page!</h1>
            <button
                className='rounded-xl bg-[#6b3bd3] px-2 py-3 cursor-pointer hover:bg-[#8051e6] active:translate-y-1 transition flex items-center'
                onClick={() => navigate("/")}>
                <ChevronLeft />
                Back to home
            </button>
        </div>
    );
};

export default NotFoundPage;
