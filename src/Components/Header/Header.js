import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const [clicked, setClicked] = useState(false);

    return (
        <header className="position-sticky top-0 z-index">
            <nav className="navbar navbar-expand-lg myNav navbar-light">
                <div className="container">
                    <Link className="navbar-logo" to="/">
                        BiCycle Store
                    </Link>
                    <button
                        className={`navbar-toggler ${
                            clicked ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded={clicked}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${clicked && ""}`}
                        id="navbarText"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <NavLink
                                    onClick={() => setClicked(!clicked)}
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    onClick={() => setClicked(!clicked)}
                                    className="nav-link "
                                    aria-current="page"
                                    to="/blogs"
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                {user && (
                                    <NavLink
                                        onClick={() => setClicked(!clicked)}
                                        className="nav-link "
                                        aria-current="page"
                                        to="/manageitems"
                                    >
                                        Manage Inventory
                                    </NavLink>
                                )}
                            </li>

                            <li className="nav-item">
                                {user && (
                                    <NavLink
                                        onClick={() => setClicked(!clicked)}
                                        className="nav-link "
                                        aria-current="page"
                                        to="/additem"
                                    >
                                        Add Item
                                    </NavLink>
                                )}
                            </li>
                            <li className="nav-item">
                                {user && (
                                    <NavLink
                                        onClick={() => setClicked(!clicked)}
                                        className="nav-link "
                                        aria-current="page"
                                        to="/myitems"
                                    >
                                        My Items
                                    </NavLink>
                                )}
                            </li>
                            <li className="nav-item">
                                {user ? (
                                    <NavLink
                                        onClick={() => {
                                            signOut(auth);
                                            setClicked(!clicked);
                                        }}
                                        className="nav-link "
                                        aria-current="page"
                                        to="/login"
                                    >
                                        Logout
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        onClick={() => setClicked(!clicked)}
                                        className="nav-link "
                                        aria-current="page"
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
