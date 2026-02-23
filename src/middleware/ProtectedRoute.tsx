import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { API_URL } from "../app";

const ProtectedRoute = () => {
    const token = localStorage.getItem("access-token");
    const [loading, setLoading] = useState(true);

    if (!token) {
        return <Navigate to='/login' replace />;
    }

    const navigate = useNavigate();
    const verifyProfile = async () => {
        setLoading(true);
        try {
            await axios.get(`${API_URL}/verify-profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.status == 401) {
                    navigate("/login", { replace: true });
                    localStorage.clear();
                }
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        verifyProfile();
    }, []);

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-primary'>
                <h2 className='text-3xl'>Layout is loading...</h2>
            </div>
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;
