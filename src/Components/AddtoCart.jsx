import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AddtoCart.css";

function AddtoCart({ allItems = [], setAllItems, setIsCartVisible }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = allItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total.toFixed(2));
  }, [allItems]);

  function deleteHandler(id) {
    const updatedItems = allItems.filter((item) => item.id !== id);
    setAllItems(updatedItems);
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <Link to="/">
          <button
            onClick={() => setIsCartVisible(false)}
            className="close-cart-btn"
          >
            Close Cart
          </button>
        </Link>
      </div>

      {allItems.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty.</p>
      ) : (
        <div className="cart-items-list">
          {allItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p className="item-price">₹{item.price}</p>
              </div>
              <button
                onClick={() => deleteHandler(item.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="total-price">
            <h3>Total Price: ₹{totalPrice}</h3>
          </div>
          <Link to="/payment">
            <button className="pay-now-btn">Pay Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddtoCart;
