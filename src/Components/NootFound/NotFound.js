import React from "react";

const NotFound = () => {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center bg-gray"
            style={{ height: `80vh` }}
        >
            <h1 className="d-block" style={{ fontSize: "100px" }}>
                404
            </h1>
            <h1 style={{ fontSize: `50wh` }}>Page Not Found!!!</h1>
        </div>
    );
};

export default NotFound;
