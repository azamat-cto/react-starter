import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form>
                <div className="flex flex-col gap-y-4 max-w-96">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="w-full border rounded py-2 px-4"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            className="w-full border rounded py-2 px-4"
                            type="text"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                        />
                    </div>

                    <button className="py-2 border rounded" type="submit">
                        Login
                    </button>

                    <div className="flex items-center justify-center gap-x-2">
                        <p>Do not have an account</p>
                        <Link className="text-blue-400" to="/register">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
