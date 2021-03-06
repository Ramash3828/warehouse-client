import React from "react";
import "./Home.css";
import InventoryCart from "../../Components/InventoryCart/InventoryCart";
import GetJioin from "../GetJoin/GetJioin";
import ContactPage from "../ContactPage/ContactPage";

const Home = () => {
    return (
        <main>
            <div
                className="hero-area py-5"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(https://i.ibb.co/JBnJNby/banner.jpg)`,
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
                        <div className="col-md-6 py-4 d-none d-md-block "></div>
                    </div>
                </div>
            </div>
            <div className="product-area py-5">
                <InventoryCart></InventoryCart>
            </div>
            <GetJioin></GetJioin>
            <ContactPage></ContactPage>
        </main>
    );
};

export default Home;
