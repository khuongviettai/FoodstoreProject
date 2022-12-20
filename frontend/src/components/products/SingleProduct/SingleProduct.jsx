import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from 'react-use-cart';
import {  useSelector } from 'react-redux';

const SingleProduct = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [idProduct, setIdProduct] = useState(null)
    const [userCurrent, setUserCurrent] = useState([]);

    const user = useSelector((state) => state.auth.login.currentUser)
    useEffect(() => {
        setUserCurrent(user)
        
    }, [user]);


    useEffect(() => {
        const fetchproduct = async() => {
            const {data} = await axios.get(`https://server-api-guke.onrender.com/api/products/${id}`)
            setProduct(data);
            setIdProduct(data._id)
        }
        fetchproduct();
    }, [id]);
    // console.log(product)
    // const priceString = product.price && product.price.toLocaleString()
    const productCurrent = {
        id: idProduct,
        image: product.image,
        title: product.title,
        price: product.price
    }
    
    const ShowProductDetails = (props) => {
        const {addItem} = useCart()
        return(
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i></p>
                    <h3 className="display-6 fw-bold my-4">₫ {productCurrent.price}</h3>
                    <p className="lead">{product.description}</p>
                    {/* <button  className="btn btn-primary" onClick={() => addItem(productCurrent)}>Thêm vào giỏ hàng</button> */}
                    {
                        userCurrent && <button className="btn btn-primary" onClick={() => addItem(productCurrent)}>Thêm</button>
                        } 
                        {
                           !userCurrent && (<NavLink to = '/login'>
                                <button className="btn btn-primary">Thêm</button>
                            </NavLink>)
                        }
                    <NavLink to='/cart' className='btn btn-primary ms-2'>Giỏ Hàng</NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {<ShowProductDetails />}
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
