import axios, { isAxiosError } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
    const token = localStorage.getItem("access-token");
    const navigate = useNavigate();
    const verifyProfile = async () => {
        try {
            await axios.get("http://localhost:4000/verify-profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.status == 401) {
                    navigate("/login", { replace: true });
                }
            }
        }
    };

    useEffect(() => {
        verifyProfile();
    }, []);

    return <>UserHome</>;
};

export default UserHome;
