import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/notfound/NotFoundPage";
import RegisterPage from "../pages/register/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);
