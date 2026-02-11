import axios, { isAxiosError } from "axios";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { API_URL } from "../app";

const ProtectedRoute = () => {
    const token = localStorage.getItem("access-token");

    if (!token) {
        return <Navigate to='/login' replace />;
    }

    const navigate = useNavigate();
    const verifyProfile = async () => {
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
        }
    };

    useEffect(() => {
        verifyProfile();
    }, []);

    return <Outlet />;
};

export default ProtectedRoute;
