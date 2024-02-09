import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo-full.png";
import Login1 from "../assets/images/login/1.png";
import Login2 from "../assets/images/login/2.png";
import Login3 from "../assets/images/login/3.png";

const AuthSlider = () => {

    return (
        <div className="col-md-6 text-center pt-5">
            <div className="sign-in-detail text-white">
                <a className="sign-in-logo mb-5" href="#"><img src={Logo} className="img-fluid" alt="logo" /></a>
                <div className="sign-slider overflow-hidden ">
                    <ul className="swiper-wrapper list-inline m-0 p-0 ">
                        <li className="swiper-slide">
                            <img src={Login1} className="img-fluid mb-4" alt="logo" />
                            <h4 className="mb-1 text-white">Find new friends</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </li>
                        <li className="swiper-slide">
                            <img src={Login2} className="img-fluid mb-4" alt="logo" />
                            <h4 className="mb-1 text-white">Connect with the world</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </li>
                        <li className="swiper-slide">
                            <img src={Login3} className="img-fluid mb-4" alt="logo" />
                            <h4 className="mb-1 text-white">Create new events</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthSlider;