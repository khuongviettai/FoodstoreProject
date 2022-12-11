import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';







const Products = () => {
    const [products, setProducts] = useState([]);
    
   
    
    useEffect(() => {
        const fetchproducts = async() => {
            const {data} = await axios.get("https://server-api-guke.onrender.com/api/products")
            setProducts(data);   
        }
        fetchproducts();
    }, []);
    console.log(products)
    return (
        <div>
            <ul className="list-group mb-3">
              <li className="list-group-item justify-content-between lh-condensed">
                <table className="table table-light table-hover m-0">
                <thead>
                <tr>
                    
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Loại</th>
                    
                </tr>
                </thead>
                  <tbody>
                    {products.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img
                              src={item.image}
                              style={{ height: "50px", width: "50px" }}
                              alt={item.title}
                            />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.price.toLocaleString()}</td>
                          <td>{item.category}</td>
                          <button className='btn btn-danger' style={{marginTop: '20px', marginLeft: '20px'}}>Xoa</button>  
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </li>
              
            </ul>
        </div>
    );
}

export default Products;
