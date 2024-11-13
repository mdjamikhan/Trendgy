import React, { useState, useEffect } from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  function handle() {
    navigate("/");
  }

  return (
    <div className="success-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="">
          <h2>Thanks for your payment!</h2>
          <button onClick={handle} className="btn">
            {" "}
            Go to HomePage
          </button>
        </div>
      )}
    </div>
  );
}
