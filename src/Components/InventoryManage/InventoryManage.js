import "./InventoryManage.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventoryManage = () => {
    const [item, setItem] = useState({});
    const [qty, setQty] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    const { name, desc, supplier, img, price, quantity, sold } = item;

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
        let total;
        let soldQty = parseInt(item.sold);
        if (item.quantity < 1) {
            soldQty = soldQty + 0;
            return toast.error("No Stock available !!!");
        } else {
            soldQty = soldQty + 1;
            total = prevQty - 1;
        }
        item["quantity"] = total;
        item["sold"] = soldQty;
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
                navigate("/");
                toast.success(data.success);
            });
    };

    return (
        <div className="container py-5">
            <h2 className="mb-5 p-title">Inventory Management </h2>
            <div className="row g-5">
                <div className="col-md-6 mx-auto h-auto ">
                    <div className="image-area">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="cart-details-area w-100">
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
                                    <td>Product Sold</td>
                                    <td>:</td>
                                    <td>{quantity ? sold : "Sold Out"}</td>
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
                        <div className=" mb-3 w-100">
                            <form
                                onSubmit={(e) => onHandleInput(e)}
                                className="w-100 d-flex"
                            >
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
                            Manage Inventory
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryManage;
