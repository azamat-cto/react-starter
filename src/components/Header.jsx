import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="flex items-center justify-between h-14">
                    <Link to="/">React</Link>
                    <nav>
                        <ul className="flex items-center gap-x-4">
                            <li>
                                <Link to="/login">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/register">Sign Up</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
