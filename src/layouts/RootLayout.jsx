import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout() {
    return (
        <div>
            <Header />
            {/* Sidebar */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
