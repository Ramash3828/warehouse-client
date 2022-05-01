import "./InventoryManage.css";
import cartImage from "./../../images/BiCycle-2.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventoryManage = () => {
    const [item, setItem] = useState({});
    const [qty, setQty] = useState("");
    const { id } = useParams();

    const { name, desc, supplier, img, price, quantity } = item;

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [id]);

    const onHandleInput = (e) => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                ...qty,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                e.target.reset();
                toast.success(data.success);
            });
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4 p-title">Inventory Management </h2>
            <div className="row g-5">
                <div className="col-md-6">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="cart-details-area">
                        <table className="text-start p-table">
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>:</td>
                                    <td>{id}</td>
                                </tr>
                                <tr>
                                    <td>Product Name</td>
                                    <td>:</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td>Product Description</td>
                                    <td>:</td>
                                    <td>{desc}</td>
                                </tr>
                                <tr>
                                    <td>Product Supplier</td>
                                    <td>:</td>
                                    <td>{supplier}</td>
                                </tr>
                                <tr>
                                    <td>Product Price</td>
                                    <td>:</td>
                                    <td>${price}</td>
                                </tr>
                                <tr>
                                    <td>Product Quantity</td>
                                    <td>:</td>
                                    <td>{quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="form-btn my-3">Delivered</button>
                        <div className="input-group mb-3">
                            <input
                                onBlur={(e) => setQty(e.target.value)}
                                type="number"
                                className="form-control"
                                placeholder="Input Product Quantity"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <span
                                onClick={onHandleInput}
                                className="input-group-text cursor-pointer"
                                id="basic-addon2"
                                role="button"
                            >
                                Update
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryManage;
