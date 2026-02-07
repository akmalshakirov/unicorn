import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen h-full flex items-center flex-col justify-center gap-3'>
            <h1 className='font-bold text-4xl/snug'>Not found page!</h1>
            <button
                className='rounded-xl bg-white/10 px-2 py-3 cursor-pointer hover:bg-white/15 active:translate-y-1 transition'
                onClick={() => navigate("/")}>
                Back to home
            </button>
        </div>
    );
};

export default NotFoundPage;
