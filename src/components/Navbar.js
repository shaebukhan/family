import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { toast } from "react-toastify";
import Cookies from 'js-cookie';

import Logo from "../assets/images/logo.jpg";
import axios from "axios";
const Navbar = () => {

    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    // Retrieve auth data
    const authDataString = Cookies.get('auth');
    const auth = authDataString ? JSON.parse(authDataString) : null;

    const handleLogout = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/logout`);
            if (res.data.success) {
                Cookies.remove("token");
                Cookies.remove("auth");
                toast.info("Logged out successfully");
                navigate('/login');
            } else {
                toast.error("Logout failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during logout:", error);
            toast.error("An error occurred while logging out. Please try again.");
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (


        <>
            <div className={`navbarr ${isMenuOpen ? 'open' : ''}`}>
                <div className="navbar-logo">
                    <FaBarsStaggered className="sidebar-open-btn" onClick={openMenu} />
                    <Link to="/">
                        <img className="logo-img" src={Logo} alt="" />
                    </Link>
                </div>
                <div id="sidemenu" className={`${isMenuOpen ? 'active-sidebar-menu' : ''}`}>
                    <button className="close-btn" onClick={closeMenu}>
                        <IoClose />
                    </button>
                    <Link className="nav-linkk" to="/about">Chi siamo</Link>
                    <Link className="nav-linkk" to="/feedback">Feedback </Link>
                    <Link className="nav-linkk" to="/terms&conditions">Termini e condizioni </Link>
                    <Link className="nav-linkk" to="/privacy-policy">politica sulla riservatezza </Link>
                    <Link className="nav-linkk" to="/contact">Contattaci</Link>
                    <Link className="nav-linkk" to="/careers">Carriera</Link>

                </div>
                <div className="nav-right">

                    {
                        !auth ? (<>  <Link to="/login" className="login-btn">Se connecter</Link>
                            <Link to="/register" className="reg-btn">Registre</Link>
                        </>) : (<>

                            <div className="custom-nav-item">
                                <button
                                    className="acc-circle border-0"
                                    onClick={toggleDropdown}
                                    aria-expanded={dropdownOpen}
                                >

                                    {auth?.user?.name && auth.user.name[0].toUpperCase()}
                                </button>
                                {dropdownOpen && (
                                    <ul className="custom-dropdown-menu">
                                        <li>
                                            <NavLink
                                                className="custom-dropdown-item"
                                                to={`/dashboard/${auth?.user.role === 1 ? "admin" : "user"}`}
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="custom-dropdown-item"
                                                onClick={() => {
                                                    handleLogout();
                                                    setDropdownOpen(false);
                                                }}
                                            >
                                                Logout
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </>)
                    }


                </div>

            </div>

        </>
    );
};

export default Navbar;
