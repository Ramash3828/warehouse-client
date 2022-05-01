import React from "react";
import { Link } from "react-router-dom";
import cartImg from "../../images/hero-img.jpg";
import "./InventoryCart.css";

const InventoryCart = () => {
    return (
        <div className="pb-4">
            <h2 className="cart-title">Recently Added</h2>
            <p className="cart-text">BiCycle Store premium cars inventory</p>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="cart-area shadow">
                            <img className="w-100" src={cartImg} alt="" />
                            <div className="cart-desc">
                                <h5>Product Name</h5>
                                <p>
                                    Supplier: <span>Atlas Ltd.</span>
                                </p>
                                <p>
                                    Desc: <span>This is most popular Item</span>
                                </p>
                                <p>
                                    price: <span>$99</span>
                                </p>
                                <p>
                                    Quantity: <span>55</span>
                                </p>
                            </div>
                            <Link to="/inventory-manage">
                                <button className="update-btn">
                                    Update{"  "}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-area shadow">
                            <img className="w-100" src={cartImg} alt="" />
                            <div className="cart-desc">
                                <h5>Product Name</h5>
                                <p>
                                    Supplier: <span>Atlas Ltd.</span>
                                </p>
                                <p>
                                    Desc: <span>This is most popular Item</span>
                                </p>
                                <p>
                                    price: <span>$99</span>
                                </p>
                                <p>
                                    Quantity: <span>55</span>
                                </p>
                            </div>
                            <Link to="/manageitems">
                                <button className="update-btn">Update</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-area shadow">
                            <img className="w-100" src={cartImg} alt="" />
                            <div className="cart-desc">
                                <h5>Product Name</h5>
                                <p className="supplier">
                                    Supplier: <span>Atlas Ltd.</span>
                                </p>
                                <p>
                                    Desc: <span>This is most popular Item</span>
                                </p>
                                <p>
                                    price: <span>$99</span>
                                </p>
                                <p>
                                    Quantity: <span>55</span>
                                </p>
                            </div>
                            <Link to="/inventory-manage">
                                <button className="update-btn">Update</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-area shadow">
                            <img className="w-100" src={cartImg} alt="" />
                            <div className="cart-desc">
                                <h5>Product Name</h5>
                                <p>
                                    Supplier: <span>Atlas Ltd.</span>
                                </p>
                                <p>
                                    Desc: <span>This is most popular Item</span>
                                </p>
                                <p>
                                    price: <span>$99</span>
                                </p>
                                <p>
                                    Quantity: <span>55</span>
                                </p>
                            </div>
                            <Link to="/manageitems">
                                <button className="update-btn">Update</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-area shadow">
                            <img className="w-100" src={cartImg} alt="" />
                            <div className="cart-desc">
                                <h5>Product Name</h5>
                                <p>
                                    Supplier: <span>Atlas Ltd.</span>
                                </p>
                                <p>
                                    Desc: <span>This is most popular Item</span>
                                </p>
                                <p>
                                    price: <span>$99</span>
                                </p>
                                <p>
                                    Quantity: <span>55</span>
                                </p>
                            </div>
                            <Link to="/manageitems">
                                <button className="update-btn">Update</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-area shadow">
                            <img className="w-100" src={cartImg} alt="" />
                            <div className="cart-desc">
                                <h5>Product Name</h5>
                                <p>
                                    Supplier: <span>Atlas Ltd.</span>
                                </p>
                                <p>
                                    Desc: <span>This is most popular Item</span>
                                </p>
                                <p>
                                    price: <span>$99</span>
                                </p>
                                <p>
                                    Quantity: <span>55</span>
                                </p>
                            </div>
                            <Link to="/manageitems">
                                <button className="update-btn">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryCart;
