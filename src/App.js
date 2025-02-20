import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";
import AddtoCart from "./Components/AddtoCart";
import Women from "./pages/Women";
import Categeroy from "./pages/Categeroy";
import Contact from "./Components/Contact";
import Payment from "./Components/Payment";
import Success from "./Components/Success";

function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [allItems, setAllItems] = useState([]);

  return (
    <div className="w-screen h-screen flex-col">
      <Navbar
        isLogedin={isLogedin}
        setIsLogedin={setIsLogedin}
        setIsCartVisible={setIsCartVisible}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              allItems={allItems}
              setAllItems={setAllItems}
              isCartVisible={isCartVisible}
              setIsCartVisible={setIsCartVisible}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/Login" element={<Login setIsLogedin={setIsLogedin} />} />
        <Route
          path="/Signup"
          element={<Signup setIsLogedin={setIsLogedin} />}
        />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute isLogedin={isLogedin}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/addtoCart"
          element={
            <AddtoCart
              allItems={allItems}
              setAllItems={setAllItems}
              setIsCartVisible={setIsCartVisible}
            />
          }
        ></Route>
        <Route
          path="/women"
          element={
            <Women
              allItems={allItems}
              setAllItems={setAllItems}
              isCartVisible={isCartVisible}
              setIsCartVisible={setIsCartVisible}
            />
          }
        ></Route>
        <Route
          path="/Categ"
          element={
            <Categeroy
              allItems={allItems}
              setAllItems={setAllItems}
              isCartVisible={isCartVisible}
              setIsCartVisible={setIsCartVisible}
            />
          }
        ></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Success" element={<Success />}></Route>
      </Routes>
    </div>
  );
}

export default App;
