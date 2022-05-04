import "./InventoryManage.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventoryManage = () => {
    const [item, setItem] = useState({});
    const [qty, setQty] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    const { name, desc, supplier, img, price, quantity } = item;

    useEffect(() => {
        const url = `https://damp-forest-06266.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [id]);

    const onHandleInput = (e) => {
        e.preventDefault();
        const prevQty = parseInt(item.quantity);
        const currentQty = parseInt(qty);
        const total = prevQty + currentQty;
        item["quantity"] = total;
        delete item._id;

        const url = `https://damp-forest-06266.herokuapp.com/inventory/${id}`;
        console.log(id);
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                ...item,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                navigate("/manageitems");
                e.target.reset();
                toast.success(data.success);
            });
    };

    // Decrement quantity
    const handleDelivered = () => {
        const prevQty = parseInt(item.quantity);
        const total = prevQty - 1;
        item["quantity"] = total;
        delete item._id;

        const url = `https://damp-forest-06266.herokuapp.com/inventory/${id}`;
        console.log(id);
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                ...item,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                navigate("/manageitems");
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
                        <button
                            onClick={handleDelivered}
                            className="form-btn my-3"
                        >
                            Delivered
                        </button>
                        <div className="d-flex mb-3 ">
                            <form onSubmit={(e) => onHandleInput(e)}>
                                <input
                                    onBlur={(e) => setQty(e.target.value)}
                                    type="number"
                                    className="qty-input"
                                    placeholder="Input Product Quantity"
                                />
                                <button
                                    className="add-btn d-inline cursor-pointer"
                                    id="basic-addon2"
                                    type="submit"
                                >
                                    Update
                                </button>
                            </form>
                        </div>
                        <Link
                            to="/manageitems"
                            className="add-btn d-inline cursor-pointer text-decoration-none"
                            id="basic-addon2"
                            type="submit"
                        >
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryManage;
