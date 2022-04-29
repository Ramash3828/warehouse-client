import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg myNav navbar-light ">
                <div className="container">
                    <Link className="navbar-logo" to="/">
                        BiCycle Store
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link "
                                    aria-current="page"
                                    to="/manageitems"
                                >
                                    Manage Items
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link "
                                    aria-current="page"
                                    to="/additem"
                                >
                                    Add Item
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link "
                                    aria-current="page"
                                    to="/myitems"
                                >
                                    My Items
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link "
                                    aria-current="page"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
