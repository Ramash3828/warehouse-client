import React, { useEffect, useState } from "react";
import "./MyItems.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";

const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const { email } = user;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function () {
            const email = user.email;
            await fetch(
                `https://damp-forest-06266.herokuapp.com/myitem?email=${email}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        navigate("/login");
                    }
                    return res.json();
                })
                .then((data) => {
                    setProducts(data);
                    toast.error(data.message);
                });
        })();
    }, [user.email, navigate]);

    if (loading) {
        return <Loading></Loading>;
    }
    // Delete Item
    const handleDelete = (id) => {
        const proceeds = window.confirm("Are you sure Delete the item?");

        if (proceeds) {
            const url = `https://damp-forest-06266.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remainingData = products.filter((u) => u._id !== id);
                    setProducts(remainingData);
                    toast.success(data.success);
                });
        }
    };

    return !email ? (
        <h1 className="py-5 my-5 text-danger">Please Add to New Item!!!</h1>
    ) : (
        <div className="container my-5">
            <h2 className="title">My Inventory Items</h2>
            <div className="text-end d-block my-4">
                <Link to="/additem" className="text-decoration-none">
                    <div className="mb-3 form-btn add-btn ">Add New</div>
                </Link>
            </div>
            <table className="table table-success table-striped table-hover addPro-table">
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>IMAGE</th>
                        <th>PRODUCT NAME</th>
                        <th>PRICE</th>
                        <th>SOLD</th>
                        <th>QUANTITY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product, id) => {
                        return (
                            <tr key={product._id}>
                                <td>{id + 1}</td>
                                <td>
                                    <img src={product.img} alt="" />
                                </td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.sold}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <i
                                        style={{
                                            cursor: "pointer",
                                            padding: "10px",
                                        }}
                                        onClick={() =>
                                            handleDelete(product._id)
                                        }
                                        className="fa-solid fa-trash-can text-danger"
                                    ></i>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;
