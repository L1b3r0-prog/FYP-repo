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
                <div className="flex items-center space-x-10 ml-auto">
                    {/* Home, Team and Document button */}
                    <nav className="flex items-center mr-4">
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

                    {/* This is the free trial button */}
                    <NavLink 
                        to="/signup" 
                        className="bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex flex-col items-center justify-center h-10 w-40"
                    >
                        <span className="text-lg leading-none">Start Free</span>
                        <span className="text-lg leading-none">Trial</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
    
}