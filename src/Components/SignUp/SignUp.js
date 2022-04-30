import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignUp.css";
import Loading from "../../Components/Loading/Loading";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const SignUp = () => {
    const [errorTex, setErrorText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    // Create User
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    // Update user
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);
    let errorInfo;
    if (error || updateError) {
        errorInfo = (
            <p className="text-danger">
                Error: {error?.message} {updateError?.message}
            </p>
        );
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        if (password !== conPassword) {
            return setErrorText(`Password Not matched!!!`);
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast.success("Send Verification email");
        setValidated(true);
    };
    return (
        <div className="form-area mx-auto py-5 container">
            <h2 className="mb-3 text-center form-title">SIGNUP</h2>
            <Form
                onSubmit={handleSignUp}
                noValidate
                validated={validated}
                className="text-start"
            >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        onBlur={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicConPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control
                        onBlur={(e) => setConPassword(e.target.value)}
                        type="password"
                        placeholder="Confirm Password"
                        required
                    />
                </Form.Group>

                <p className="text-danger">{errorTex}</p>

                {errorInfo}

                <div>
                    <input type="checkbox" name="terms" id="terms" />
                    <label
                        onClick={() => setAgree(!agree)}
                        className={agree ? "ms-2" : "ms-2 text-danger"}
                        htmlFor="terms"
                    >
                        Accept BiCycle Store Terms and Conditions.
                    </label>
                </div>
                <button
                    disabled={!agree}
                    className="form-btn mt-2"
                    type="submit"
                >
                    Signup
                </button>
            </Form>
            <p className="my-3 text-start">
                Already have an account?{" "}
                <Link className="text-decoration-none" to="/login">
                    Please Login here.
                </Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;
