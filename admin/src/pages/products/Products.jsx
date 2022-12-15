import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../redux/apiRequest";
import swal from "sweetalert";
import Swal from 'sweetalert2'

const Products = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user?.accessToken) {
      getAllUser(user?.accessToken, dispatch);
    }
  });
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(
        "https://server-api-guke.onrender.com/api/products"
      );
      setProducts(data);
    };
    fetchproducts();
  }, []);

  const deleteProduct = (id) => async () => {
    try {
      await axios.delete(
        `https://server-api-guke.onrender.com/api/delete/${id}`
      );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Xoá thành công',
        showConfirmButton: false,
      })
      setTimeout(() => window.location.reload(false), 1000);
    } catch {
      swal({
        title: "Xoá thất bại!",
        icon: "error",
        button: false
      });
    }
  };
  return (
    <div>
      <table className="table table-bordered table-light table-hover m-0">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Giá</th>
            <th>Loại</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    style={{
                      height: "50px",
                      width: "50px",
                      marginRight: "12px",
                    }}
                    alt={item.title}
                  />
                  {item.title}
                </td>
                <td>₫ {item.price.toLocaleString()}</td>
                <td>{item.category}</td>
                <td>
                  <tr className="d-flex justify-content-around">
                    <td className="btn btn-primary">Sửa </td>
                    <td
                      className="btn btn-danger"
                      onClick={deleteProduct(item._id)}
                    >
                      Xoá
                    </td>
                  </tr>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
