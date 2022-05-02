import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form } from "react-bootstrap";
import "./AddItem.css";
import auth from "./../../firebase.init";
import Loading from "./../Loading/Loading";
import { toast } from "react-toastify";

const AddItem = () => {
    const [user, loading] = useAuthState(auth);
    const [validated, setValidated] = useState(false);
    const { email } = user;
    const [product, setProduct] = useState({
        name: "",
        email: email,
        desc: "",
        supplier: "",
        price: "",
        quantity: "",
        img: "",
    });
    const { name, desc, supplier, price, quantity, img } = product;

    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    if (loading) {
        return <Loading></Loading>;
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        // Insert data
        const url = "http://localhost:5000/inventory";

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                ...product,
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

        setValidated(true);
    };
    return (
        <div className="py-5">
            <h2 className="title">Add Product Item</h2>
            <div className="form-area mx-auto mb-4 container">
                <Form
                    onSubmit={handleAddProduct}
                    noValidate
                    validated={validated}
                    className="text-start"
                >
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            onChange={(e) => onInputChange(e)}
                            type="text"
                            placeholder="Product Name"
                            name="name"
                            value={name}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User Email</Form.Label>
                        <Form.Control
                            onChange={(e) => onInputChange(e)}
                            type="email"
                            placeholder="User-email"
                            name="email"
                            value={email}
                            disabled
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control
                            onChange={(e) => onInputChange(e)}
                            type="text"
                            placeholder="Supplier"
                            name="supplier"
                            value={supplier}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            onChange={(e) => onInputChange(e)}
                            type="text"
                            placeholder="Product Description"
                            name="desc"
                            value={desc}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            onChange={(e) => onInputChange(e)}
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            value={quantity}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            onChange={(e) => onInputChange(e)}
                            type="number"
                            placeholder="Product Price"
                            name="price"
                            value={price}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control
                            onChange={(e) => onInputChange(e)}
                            type="text"
                            placeholder="Product Image"
                            name="img"
                            value={img}
                            required
                        />
                    </Form.Group>

                    <button className="form-btn mt-2" type="submit">
                        Add Product
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default AddItem;
