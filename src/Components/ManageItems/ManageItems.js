import React, { useEffect, useState } from "react";
import "./ManageItems.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [quantity, setQuantity] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://damp-forest-06266.herokuapp.com/productCount`)
            .then((res) => res.json())
            .then((data) => {
                const count = data.count;
                const pages = Math.ceil(count / quantity);
                setPageCount(pages);
            });
    }, [page, quantity]);

    useEffect(() => {
        fetch(
            `https://damp-forest-06266.herokuapp.com/inventory/countItem/?page=${page}&quantity=${quantity}`
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [page, quantity]);
    // Update Inventory Manage
    const handleUpdate = (id) => {
        navigate(`/inventoryManage/${id}`);
    };
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

    return (
        <div className="container my-5">
            <h2 className="title">Manage Inventory</h2>
            <div className="text-end d-block my-4">
                <Link to="/additem" className="text-decoration-none">
                    <div className="mb-3 form-btn add-btn ">Add New</div>
                </Link>
            </div>
            <div className="table-responsive-md text-nowrap ">
                <table className="table table-success table-striped table-hover addPro-table ">
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
                        {products.map((product, id) => {
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
                                        <button
                                            onClick={() =>
                                                handleUpdate(product?._id)
                                            }
                                            className="btn btn-outline-success btn-sm"
                                        >
                                            Update
                                        </button>
                                        <i
                                            style={{
                                                cursor: "pointer",
                                                padding: "10px",
                                            }}
                                            onClick={() =>
                                                handleDelete(product._id)
                                            }
                                            className="fa-solid fa-trash-can text-danger delete-btn"
                                        ></i>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="pb-5 text-end">
                {[...Array(pageCount).keys()].map((number, id) => {
                    return (
                        <button
                            key={id}
                            onClick={() => setPage(number)}
                            className={`btn btn-outline-primary btn-sm me-2 ${
                                page === number ? "active" : ""
                            }`}
                        >
                            {number + 1}
                        </button>
                    );
                })}
                <select onClick={(e) => setQuantity(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default ManageItems;
