import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="886131854327-9k03ranc0s3902esq7s33nju4itke0rv.apps.googleusercontent.com">
      <App />
      <Toaster />
      ...
    </GoogleOAuthProvider>
    ;
  </BrowserRouter>
);
