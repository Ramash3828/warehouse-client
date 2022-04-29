import React from "react";
import "./Home.css";
import heroImg from "../../images/hero-img.jpg";
import InventoryCart from "../../Components/InventoryCart/InventoryCart";

const Home = () => {
    return (
        <main>
            <div
                className="hero-area py-5"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(https://images.immediate.co.uk/production/volatile/sites/21/2021/02/DSC_4342-5fff9b5.jpg?quality=90&resize=768%2C574)`,
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 py-4">
                            <div className="hero-left text-md-start">
                                <h2 className="hero-title">
                                    Find Your Next Bicycle at BiCycle Store
                                </h2>
                                <p>
                                    Allow us to guide you through the innovative
                                    stress free approach in finding your dream
                                    Bicycle.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 py-4 d-flex justify-content-center ">
                            <div className="img-area ">
                                <img
                                    className="hero-img"
                                    src={heroImg}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-area py-5">
                <InventoryCart></InventoryCart>
            </div>
        </main>
    );
};

export default Home;
