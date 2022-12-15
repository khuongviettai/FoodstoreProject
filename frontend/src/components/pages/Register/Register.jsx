import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../../../redux/apiRequest';

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
            email: email
        };
        registerUser(newUser,dispatch, navigate);
    }
    return (
        <div>
            <section className="h-100 gradient-form" style={{BackgroundColor: "#eee"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <h1>Register</h1>
                                            </div>

                                            <form onSubmit={handleRegister}>

                                                <div className="form-outline mb-4 col-lg-6 mx-auto">
                                                    <label className="form-label" htmlFor="form2Example11">Tên đăng nhập</label>
                                                    <input  className="form-control" placeholder="Tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
                                                </div>

                                                <div className="form-outline mb-4 col-lg-6 mx-auto">
                                                    <label className="form-label" htmlFor="form2Example22">Mật khẩu</label>
                                                    <input type="password"  className="form-control" placeholder="Mật Khẩu" onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-4 col-lg-6 mx-auto">
                                                    <label className="form-label" htmlFor="form2Example22">Email</label>
                                                    <input type="email"  className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1 col-lg-6 mx-auto">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 w-100" type="submit">Register</button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Have an account?</p>
                                                    <NavLink to="/login" type="button" className="btn btn-outline-danger">Login</NavLink>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
