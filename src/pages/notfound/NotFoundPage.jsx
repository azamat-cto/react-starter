import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>404</h1>
            <p>Page not found</p>
            <Link className="text-blue-400" to="/">
                Back to home
            </Link>
        </div>
    );
}

export default NotFoundPage;
