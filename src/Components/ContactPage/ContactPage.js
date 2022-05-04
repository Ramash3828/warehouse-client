import React from "react";
import { Form } from "react-bootstrap";
import Iframe from "react-iframe";
import "./ContactPage.css";

const ContactPage = () => {
    return (
        <div className="py-5">
            <div className="container">
                <h2 className="title mb-3">Our Location</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="con-form-area text-start">
                            <h4
                                style={{ fontSize: "30px" }}
                                className="mb-3 text-md-start text-center form-title"
                            >
                                Contact Us
                            </h4>
                            <Form className="text-start">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                    />
                                </Form.Group>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea4"
                                    rows="3"
                                ></textarea>
                                <button className="form-btn mt-2" type="submit">
                                    Send email
                                </button>
                            </Form>
                        </div>
                        <div className="con-social-area py-4">
                            <button className="contact-btn">
                                <i className="fa-brands fa-twitter"></i>
                            </button>
                            <button className="contact-btn">
                                <i className="fa-brands fa-facebook-f"></i>
                            </button>
                            <button className="contact-btn">
                                <i className="fa-brands fa-skype"></i>
                            </button>
                            <button className="contact-btn">
                                <i className="fa-brands fa-instagram-square"></i>
                            </button>
                        </div>
                        <div className="text-start d-flex gap-5">
                            <p>
                                <strong>
                                    <i class="fa-solid fa-phone"></i>
                                </strong>{" "}
                                017XXXXXXXXX
                            </p>
                            <p>
                                <strong>
                                    <i class="fa-solid fa-envelope"></i>
                                </strong>{" "}
                                example@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="location-img">
                            <Iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14700.704478103777!2d89.21147336914211!3d22.906873925793107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff6d8b2aa805af%3A0x3d555db3c6eb0ec8!2sSoton%20More!5e0!3m2!1sen!2sbd!4v1651637593620!5m2!1sen!2sbd"
                                width="600"
                                height="400"
                                referrerpolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
