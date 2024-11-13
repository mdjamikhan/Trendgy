import React from "react";
import Logo from "../assets/Logo.svg";
import logooo from "../assets/logooo.png";

import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const { isLogedin, setIsLogedin, setIsCartVisible } = props;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link to={"/"}>
        <img src={logooo} alt="Logo" width={200} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-3 text-richblack-100 gap-x-6">
          <li>
            <Link to="/"> Male</Link>
          </li>

          <li>
            <Link to="/Women"> Women</Link>
          </li>
          <li>
            <Link to="/Categ"> Categeroy</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Contact"> Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        {!isLogedin && (
          <Link to="/Login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] rounded-[8px] px-[12px] border-richblack-700"
              onClick={() => {
                setIsLogedin(true);
              }}
            >
              Log in
            </button>
          </Link>
        )}
        {!isLogedin && (
          <Link to="/Signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] rounded-[8px] px-[12px] border-richblack-700">
              Sign up
            </button>
          </Link>
        )}
        {isLogedin && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] rounded-[8px] px-[12px] border-richblack-700"
              onClick={() => {
                setIsLogedin(false);
                toast.success("Logout");
              }}
            >
              LogOut
            </button>
          </Link>
        )}
        {isLogedin && (
          <Link to="/Dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] rounded-[8px] px-[12px] border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
        <Link to="/addtoCart">
          <button onClick={() => setIsCartVisible((prev) => !prev)}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white h-6 w-6"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
