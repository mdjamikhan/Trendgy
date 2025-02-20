import React from "react";
import Template from "../Components/Template";
import loginImg from "../assets/3405349.jpg";

function Login({ setIsLogedin }) {
  return (
    // <h2>Login</h2>
    <Template
      title="Welcome back! Log in for your exclusive deals and personalized recommendations!"
      desc1="Shop the latest trends at unbeatable prices! Discover exclusive deals on top-quality products."
      desc2="Ready to shop? Log in to access your wishlist, order history, and more!"
      image={loginImg}
      formtype="login"
      setIsLogedin={setIsLogedin}
    />
  );
}

export default Login;
