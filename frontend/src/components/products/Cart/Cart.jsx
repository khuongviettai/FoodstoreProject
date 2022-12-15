import React from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  // const priceString = item.price ? item.price.toLocaleString() : item.price
  if (isEmpty)
    return (
      <>
        <img
          src="/assets/Cart/cart.png"
          className="rounded mx-auto d-block"
          alt="Background"
          style={{ width: "250px", height: "250px" }}
        />
        <h1 className="text-center">Giỏ hàng của bạn còn trống</h1>
        <NavLink to={"/products"} className="nav-link text-center pt-3">
          <h3 className="btn btn-outline-primary">Mua Hàng</h3>
        </NavLink>
      </>
    );
  return (
    <section className="py-4 container">
      <div className="row">
        <div className="col-12">
          <h5>
            Giỏ Hàng: ({totalUniqueItems}) Tổng sản Phẩm: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <thead>
              <tr>
                <th></th>
                <th>Tên Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        style={{ height: "100px", width: "100px" }}
                        alt={item.title}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>₫ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Tổng thanh toán: ₫{cartTotal.toLocaleString()}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Xoá hết
          </button>
          <NavLink to="/checkout" className="btn btn-primary">
            Thanh Toán
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Cart;