import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./AddItem.css";
const AddItem = () => {
    const [validated, setValidated] = useState(false);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

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
                            type="text"
                            placeholder="Product Name"
                            name="name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="User-email"
                            name="email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Supplier</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Supplier"
                            name="supplier"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Product Description"
                            name="desc"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Product Price"
                            name="price"
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
