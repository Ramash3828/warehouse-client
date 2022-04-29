import React from "react";
import "./SocialLogin.css";

const SocialLogin = () => {
    return (
        <div>
            <div className="or-line">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
            </div>
            <button className="form-btn mt-2 social-btn" type="submit">
                <i className="fa-brands fa-google me-3"></i> Login with Google
            </button>
            <button className="form-btn mt-2 social-btn" type="submit">
                <i className="fa-brands fa-github me-3"></i> Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;
