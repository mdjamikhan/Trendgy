import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Payment.css";
import toast from "react-hot-toast";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = () => {
    if (paymentMethod) {
      toast.success("Order Successfull");

      navigate("/Success");
    } else {
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-header">Choose Payment Method</h2>
      <div className="payment-options">
        <div>
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="Cash on Delivery"
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
      </div>

      <button onClick={handlePayment} className="pay-btn">
        Proceed to Pay
      </button>

      <Link to="/">
        <button className="cancel-btn">Cancel</button>
      </Link>
    </div>
  );
}

export default Payment;
