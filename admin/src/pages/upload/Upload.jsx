import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../../redux/apiRequest";

const Upload = () => {

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
  const [image, setImage] = useState({});
  console.log(image.url)
  function openWidget() {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dxttukxhg', 
      uploadPreset: 'cdnicu2x'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          setImage(() =>  ({url: result.info.url, public_id: result.info.public_id}))
        }
      }
    )
    myWidget.open()
  }

  

  const [dataCart, setDataCart] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });
  const dataPush = {
    ...dataCart, image: image.url 
  }
  console.log(dataPush)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('https://server-api-guke.onrender.com/api/import/singleproduct', dataPush);
        swal({
          title: "Thành công!",
          icon: "success",
        })
    } catch (err) {
      swal({
        title: "Thất bại!",
        icon: "error",
      });
    }
};

  const handleChange = (e) => {
    setDataCart((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Tên sản phẩm</label>
        <input type="text" class="form-control" id="title" name='title' placeholder="" onChange={handleChange}/>
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="number">giá</label>
        <input type="number" class="form-control" id="price" name='price' placeholder="" onChange={handleChange} />
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Loại</label>
          <select class="custom-select d-block w-100" id="category" name='category' required="" onChange={handleChange}>
            <option value="">Choose...</option>
            <option>vietnam</option>
            <option>china</option>
            <option>korean</option>
            <option>japan</option>
            <option>european</option>
            <option>drink</option>
            <option>order</option>
          </select>
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <label for="text">Mô tả</label>
        <textarea type="text" class="form-control" id="description" name='description' placeholder="" onChange={handleChange}/>
      </div>
      <div class="mb-3 col-md-5 mx-auto">
        <button onClick={() => openWidget()}>Upload picture</button>
      </div>
      <div class="mb-3 col-md-1 mx-auto">
        <button onClick={handleSubmit}>Them</button>
      </div>
    </div>
  );
}

export default Upload;
