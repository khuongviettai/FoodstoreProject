import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/apiRequest';
import { createAxios } from '../../../instance/createinstance';
import { logOutSuccess } from '../../../redux/authSlice';
import { useCart } from 'react-use-cart';


const Navbar = () => {

    // Login
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    const id = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, logOutSuccess)
    const handleLogout = () => {
        logOut(dispatch,id, navigate, accessToken, axiosJWT);
        emptyCart()
    }

    // Cart
    const {
        totalUniqueItems,
        emptyCart
    } = useCart();


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">V&T Culinary Station</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* fw-bolder la chinh chu dam len */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bolder">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Sản Phẩm</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Giới thiệu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Liên hệ</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            {/* <NavLink to="/register" className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-1"></i> Register</NavLink> */}
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1"></i>{totalUniqueItems}</NavLink>
                        </div>
                        {user? (
                            <>
                                <button className='btn ms-2 btn-outline-dark'> <i class="fa fa-user"></i><span> {user.username}  </span></button>
                                {/* <p className="navbar-user">Hi, <span> {user.username}  </span> </p> */}
                                <NavLink to="/logout" className="ms-2" style={{textDecoration: "none"}} onClick={handleLogout}> Log out</NavLink>
                            </>
                                ) : (
                            <>
                                 <NavLink to="/login" className="btn btn-outline-dark ms-2"><i className="fa fa-sign-in me-1"></i> Login</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;