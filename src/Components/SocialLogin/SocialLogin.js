import React, { useEffect, useState } from "react";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import "./SocialLogin.css";

const SocialLogin = () => {
    const [error, setError] = useState("");
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] =
        useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        console.log(googleUser);
        if (googleUser || githubUser) {
            navigate(from, { replace: true });
            console.log(googleUser);
        }
    }, [googleUser, githubUser]);

    let loading;
    if (googleLoading || githubLoading) {
        loading = <h4 className="text-success">Loading....</h4>;
    }
    if (googleError || githubError) {
        setError(googleError?.message);
    }

    return (
        <div>
            <div className="or-line">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
            </div>
            <p className="text-danger">{error}</p>
            {loading}
            <button
                onClick={() => signInWithGoogle()}
                className="form-btn mt-2 social-btn"
                type="submit"
            >
                <i className="fa-brands fa-google me-3"></i> Login with Google
            </button>
            <button
                onClick={() => signInWithGithub()}
                className="form-btn mt-2 social-btn"
                type="submit"
            >
                <i className="fa-brands fa-github me-3"></i> Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;
