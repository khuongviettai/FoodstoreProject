import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import {loginUser} from '../../redux/apiRequest';



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    

    const handleLogin =(e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser, dispatch, navigate)
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
                                                    <h1>Login</h1>
                                            </div>
                                            <form onSubmit={handleLogin}>
                                                <div className="form-outline mb-4 col-lg-6 mx-auto">
                                                    <label className="form-label" htmlFor="form2Example11">Username</label>
                                                    <input  id="form2Example11" className="form-control" placeholder="Phone number or email address" onChange={(e) => setUsername(e.target.value)}/>
                                                </div>

                                                <div className="form-outline mb-4 col-lg-6 mx-auto">
                                                    <label className="form-label" htmlFor="form2Example22">Password</label>
                                                    <input type="password" id="form2Example22" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1 col-lg-6 mx-auto">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 w-100" type="submit">Login</button>
                                                   
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

export default Login;
