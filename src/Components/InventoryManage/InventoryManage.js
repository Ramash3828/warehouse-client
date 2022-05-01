import "./InventoryManage.css";
import cartImage from "./../../images/BiCycle-2.jpg";

const InventoryManage = () => {
    return (
        <div className="container py-5">
            <h2 className="mb-4 p-title">Inventory Management</h2>
            <div className="row g-5">
                <div className="col-md-6">
                    <img src={cartImage} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="cart-details-area">
                        <table className="text-start p-table">
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>:</td>
                                    <td>13215465</td>
                                </tr>
                                <tr>
                                    <td>Product Title</td>
                                    <td>:</td>
                                    <td>Alas Plus XL</td>
                                </tr>
                                <tr>
                                    <td>Product Description</td>
                                    <td>:</td>
                                    <td>
                                        This is NEW Model 2022- Alas Plus XL
                                    </td>
                                </tr>
                                <tr>
                                    <td>Product Supplier</td>
                                    <td>:</td>
                                    <td> Alas Company Ltd.</td>
                                </tr>
                                <tr>
                                    <td>Product Price</td>
                                    <td>:</td>
                                    <td>$99</td>
                                </tr>
                                <tr>
                                    <td>Product Quantity</td>
                                    <td>:</td>
                                    <td>222</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="form-btn my-3">Delivered</button>
                        <div className="input-group mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Input Product Quantity"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <span
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
