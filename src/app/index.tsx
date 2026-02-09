import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../middleware/ProtectedRoute";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/NotFound";
import UserHome from "../pages/user/userHome";

export const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
                <Route index element={<UserHome />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default App;
