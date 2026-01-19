import { NavLink, useNavigate, useLocation } from "react-router";

export default function Navbar() {
    return (
        <header className="px-15">
            <div className="container flex items-center justify-between py-4 mx-10">
                {/* Logo button to go back to Home */}
                <NavLink to="/" className="flex-shrink-0">
                    <span className="text-green-500 font-bold text-5xl">
                        NutriTrack
                    </span>
                </NavLink>

                { /* This is all the buttons */ }
                <div className="flex items-center pl-300 ml-auto">
                    {/* Home, Team and Document button */}
                    <nav className="flex items-center">
                        <NavLink to="/" className="text-black hover:text-green-500 text-lg px-4 py-2">
                            Home
                        </NavLink>
                        <NavLink to="/team" className="text-black hover:text-green-500 text-lg px-4 py-2">
                            Team
                        </NavLink>
                        <NavLink to="/document" className="text-black hover:text-green-500 text-lg px-4 py-2">
                            Document
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
    
}