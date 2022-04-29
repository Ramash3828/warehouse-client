import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const handleGooglePlay = () => {
        window.open("https://play.google.com/store/apps", "_blank");
    };
    const handleAppleStore = () => {
        window.open("https://www.apple.com/store", "_blank");
    };
    return (
        <>
            <div className="footer">
                <div className="footer-top container">
                    <div className="logo-area ">
                        <Link className="navbar-brand logo" to="/">
                            BiCycle Store
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <h4 className="footer-title">Information</h4>
                            <ul>
                                <li>Our Contacts</li>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h4 className="footer-title">Inventory</h4>
                            <ul>
                                <li>by Makes</li>
                                <li>by Body Style</li>
                                <li>byPrice</li>
                                <li>by Grantee</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-title">Useful Links</h4>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/manageitems">Manage Items</Link>
                                </li>
                                <li>
                                    <Link to="/additem">Add Item</Link>
                                </li>
                                <li>
                                    <Link to="/myitems">My Items</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <h3 className="apps-title">
                                Join our growing community
                            </h3>
                            <div className="apps-area">
                                <div
                                    onClick={handleAppleStore}
                                    className="apps"
                                >
                                    <span>
                                        <i class="fa-brands fa-apple"></i>
                                    </span>
                                    <div className="text">
                                        <p>Download on the</p>
                                        <h5>App Store</h5>
                                    </div>
                                </div>
                                <div
                                    onClick={handleGooglePlay}
                                    className="apps"
                                >
                                    <span>
                                        <i class="fa-brands fa-google-play"></i>
                                    </span>
                                    <div className="text">
                                        <p>Got it on</p>
                                        <h5>Google Play</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-md-start">
                            <p className="ft-bottom-text">
                                Proudly powered by <strong>React JS</strong> and{" "}
                                <strong>BiCycle Store</strong>
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="ft-bottom-text">
                                <strong>Privacy Policy Terms</strong> and{" "}
                                <strong>Conditions Contact Us</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
