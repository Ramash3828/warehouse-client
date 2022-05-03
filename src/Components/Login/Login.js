import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] =
        useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);
    let errorInfo;
    if (error || resetError) {
        errorInfo = (
            <p className="text-danger">
                Error: {error?.message} {resetError?.message}
            </p>
        );
    }
    if (loading || sending) {
        return <Loading></Loading>;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        await signInWithEmailAndPassword(email, password);
        setValidated(true);

        await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify({ email: email }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
            });
    };
    // Reset Password
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        } else {
            toast("Please Enter your email.");
        }
    };
    return (
        <div className="form-area mx-auto py-5 container">
            <h2 className="mb-3 text-center form-title">LOGIN</h2>
            <Form
                onSubmit={handleLogin}
                noValidate
                validated={validated}
                className="text-start"
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onBlur={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onBlur={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <button className="form-btn mt-2" type="submit">
                    Login
                </button>
                {errorInfo}
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
                    onClick={resetPassword}
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
