import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
    return (
        <div className="form-area mx-auto py-5 container">
            <h2 className="mb-3 text-center form-title">LOGIN</h2>
            <Form className="text-start">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Check
                    // onClick={() => setAgree(!agree)}
                    type="checkbox"
                    // className={agree ? "" : "text-danger"}
                    label="Accept BiCycle Store Terms and Conditions."
                />
                <button className="form-btn mt-2" type="submit">
                    Login
                </button>
            </Form>
            <p className="mt-3 text-start">
                New to Our website?{" "}
                <Link className="text-decoration-none" to="/signup">
                    Create New Account
                </Link>
            </p>
            <p style={{ textAlign: "left" }}>
                Forget Password?{" "}
                <button
                    // onClick={resetPassword}
                    className="btn btn-link reset-btn text-start text-decoration-none"
                >
                    Reset Password
                </button>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
