import { createBrowserRouter } from "react-router";
import App from "@/App.tsx";
import LoginPage from "@/page/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
