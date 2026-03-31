import { NavLink, useNavigate, useLocation } from "react-router";

export default function Navbar() {
    return (
        <header className="px-15">
            <div className="container flex items-center justify-between py-4 mx-auto">
                {/* Logo button to go back to Home */}
                <NavLink to="/" className="flex-shrink-0">
                    <span className="text-green-500 font-bold text-5xl">
                        NutriTrack
                    </span>
                </NavLink>

                { /* This is all the buttons */ }
                <div className="flex items-center ml-auto">
                    {/* Home, Team and Document button */}
                    <nav className="flex items-center">
                        <NavLink to="/" className="text-black hover:text-green-500 text-lg px-4 py-2">
                            Home
                        </NavLink>
                        <NavLink to="/team" className="text-black hover:text-green-500 text-lg px-4 py-2">
                            Team
                        </NavLink>
                        <a href="https://expo.dev/artifacts/eas/u2PFLW19ZBYEM1iooHLbMv.apk"
                                download
                                className="text-white hover:text-black text-lg bg-green-500 border-2 border-green-500 rounded-lg px-4 py-2">
                            Download
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
    
}
