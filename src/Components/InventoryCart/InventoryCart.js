import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./InventoryCart.css";

const InventoryCart = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = "https://damp-forest-06266.herokuapp.com/inventory";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 6)));
    }, [products]);

    const handleUpdate = (id) => {
        navigate(`/inventoryManage/${id}`);
    };
    return (
        <div className="pb-4">
            <h2 className="cart-title">Recently Added</h2>
            <p className="cart-text">BiCycle Store premium bicycle inventory</p>
            <div className="container">
                <div className="row g-5">
                    {products.map((product) => {
                        return (
                            <div className="col-md-4" key={product._id}>
                                <div className="cart-area shadow">
                                    <img
                                        className="w-100"
                                        src={
                                            product.img
                                                ? product.img
                                                : "No image URL"
                                        }
                                        alt=""
                                    />
                                    <div className="cart-desc">
                                        <h5>{product.name}</h5>
                                        <p>
                                            <strong>Supplier:</strong>{" "}
                                            <span>
                                                {product.supplier
                                                    ? product.supplier.substring(
                                                          0,
                                                          25
                                                      ) + " [...]"
                                                    : product.supplier}
                                            </span>
                                        </p>
                                        <p>
                                            <strong>Desc:</strong>{" "}
                                            <span>
                                                {product.desc
                                                    ? product.desc.substring(
                                                          0,
                                                          30
                                                      ) + " [...]"
                                                    : product.desc}
                                            </span>
                                        </p>
                                        <p>
                                            <strong>price:</strong>{" "}
                                            <span>${product?.price}</span>
                                        </p>
                                        <p>
                                            <strong>Quantity:</strong>{" "}
                                            <span>{product?.quantity}</span>
                                        </p>
                                    </div>

                                    <button
                                        onClick={() =>
                                            handleUpdate(product?._id)
                                        }
                                        className="update-btn"
                                    >
                                        Update{"  "}
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Link
                    to="/manageitems"
                    className="mt-4 add-btn d-inline cursor-pointer text-decoration-none"
                    id="basic-addon2"
                    type="submit"
                >
                    All Inventory
                </Link>
            </div>
        </div>
    );
};

export default InventoryCart;
