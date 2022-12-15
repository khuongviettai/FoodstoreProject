import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2017-2022 V&T Restaurant</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><NavLink to="/products" style={{textDecoration: "none"}}>Sản phẩm</NavLink></li>
                    <li className="list-inline-item"><NavLink to="about" style={{textDecoration: "none"}}>Giới thiệu</NavLink></li>
                    <li className="list-inline-item"><NavLink to="contact" style={{textDecoration: "none"}}>Liên hệ</NavLink></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
