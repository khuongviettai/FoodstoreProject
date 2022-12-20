import React from "react";
import Item from "../Item/Item";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(
        "https://server-api-guke.onrender.com/api/products"
      );
      setProducts(data);
      setLoading(false);
    };
    fetchproducts();
  }, []);
  const ShowProducts = () => {
    return (
      <>
        {products.map((item, index) => {
          return (
            <Item
              id={item._id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            />
          );
        })}
      </>
    );
  };

  const Loading = () => {
    return (
      <>
        <ReactLoading
          type="spinningBubbles"
          color="#333"
          height={400}
          width={200}
        />
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
