import React, { useEffect, useState } from "react";
import "./MyItems.css";
import { Link } from "react-router-dom";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory`)
            .then((res) => res.json())
            .then((data) => {
                const userProduct = data.filter(
                    (product) => product.email === user.email
                );
                setProducts(userProduct);
            });
    }, [user.email]);
    // Delete Item
    const handleDelete = (id) => {
        const proceeds = window.confirm("Are you sure Delete the item?");

        if (proceeds) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remainingData = products.filter((u) => u._id !== id);
                    console.log(remainingData);
                    setProducts(remainingData);
                    toast.success(data.success);
                });
        }
    };

    return (
        <div className="container my-5">
            <h2 className="title">My Inventory Items</h2>
            <div className="text-end d-block mb-4">
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
                        <th>QUANTITY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, id) => {
                        return (
                            <tr key={product._id}>
                                <td>{id + 1}</td>
                                <td>
                                    <img src={product.img} alt="" />
                                </td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
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
