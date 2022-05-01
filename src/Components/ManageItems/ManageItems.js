import React from "react";
import "./ManageItems.css";
import productImg from "./../../images/BiCycle-2.jpg";
import { Link } from "react-router-dom";

const ManageItems = () => {
    return (
        <div className="container my-5">
            <h2 className="title">Manage Items</h2>
            <div className="text-end d-block mb-4">
                <Link to="/additem">
                    <div className="mb-3 form-btn add-btn">Add New</div>
                </Link>
            </div>
            <table class="table table-success table-striped table-hover addPro-table">
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
                    <tr>
                        <td>01</td>
                        <td>
                            <img src={productImg} alt="" />
                        </td>
                        <td>Hero Plus XXL-60</td>
                        <td>$122</td>
                        <td>555</td>
                        <td>
                            <i class="fa-solid fa-trash-can"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;
