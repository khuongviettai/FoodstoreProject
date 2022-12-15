import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Được xây dựng vào giữa năm 2017 tại Thành phố Hồ Chí Minh, Việt Nam, V&T Food là một cộng đồng đáng tin cậy để mọi người tìm địa điểm ăn uống tại Việt Nam - từ trang web hoặc ứng dụng di động của chúng tôi. V&T Food là cách dễ dàng nhất để bạn lựa chọn địa điểm tốt nhất cho mình và bạn bè.
                        </p>
                        <NavLink to = "/contact" className= "btn btn-outline-dark px-3">Liên hệ</NavLink>
                    </div>
                    <div className="col-md-6">
                    <img src="/assets/About/about.png" alt="About Us"/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;