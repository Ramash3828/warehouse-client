import React, { useEffect, useState } from "react";
import {
    useAuthState,
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
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
        if (googleUser) {
            fetch("https://damp-forest-06266.herokuapp.com/login", {
                method: "POST",
                body: JSON.stringify({
                    email: googleUser?.user.email,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem("accessToken", data.accessToken);
                });
            navigate(from, { replace: true });
        } else if (githubUser) {
            fetch("https://damp-forest-06266.herokuapp.com/login", {
                method: "POST",
                body: JSON.stringify({
                    email: githubUser?.user.email,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem("accessToken", data.accessToken);
                });
            navigate(from, { replace: true });
        }
    }, [googleUser, githubUser, navigate, from]);

    let loading;
    if (googleLoading || githubLoading) {
        loading = <h4 className="text-success">Loading....</h4>;
    }
    if (googleError || githubError) {
        setError(googleError?.message);
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
    };
    const handleGithubLogin = () => {
        signInWithGithub();
    };

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
                onClick={handleGoogleLogin}
                className="form-btn mt-2 social-btn"
                type="submit"
            >
                <i className="fa-brands fa-google me-3"></i> Login with Google
            </button>
            <button
                onClick={handleGithubLogin}
                className="form-btn mt-2 social-btn"
                type="submit"
            >
                <i className="fa-brands fa-github me-3"></i> Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;
