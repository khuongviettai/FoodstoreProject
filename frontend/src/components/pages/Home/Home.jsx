import React from 'react';


const Home = () => {
    return (
        <div className="hero">
            <div className="card text-white bg-dark boder-0 mb-5">
                <img src="./assets/Home/bg.png" className="card-img" alt="Background"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">COME HUNGRY, LEAVE HAPPY</h5>
                        <p className="card-text lead fs-2">A healthy meal every single day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
