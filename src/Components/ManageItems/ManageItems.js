import React, { useEffect, useState } from "react";
import "./ManageItems.css";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [quantity, setQuantity] = useState(5);

    useEffect(() => {
        fetch(`http://localhost:5000/productCount`)
            .then((res) => res.json())
            .then((data) => {
                const count = data.count;
                const pages = Math.ceil(count / quantity);
                setPageCount(pages);
            });
    }, [page, quantity]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/inventory/countItem/?page=${page}&quantity=${quantity}`
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [page, quantity]);

    return (
        <div className="container my-5">
            <h2 className="title">Manage Inventory</h2>
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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
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
