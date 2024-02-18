import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //use selector will give us access to the store(subscribing the store)
  //we have to tell the portion which we want to access

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  return (
    <div className="  shadow-md ">
      <div className="w-10/12 m-auto flex justify-between items-center">
        <div className="mx-6">
          <img className="w-20 " src={LOGO_URL}></img>
        </div>
        <div className="items-center mx-24">
          <ul className="flex flex-wrap">
            <li className="mx-5 px-2">
              Online status:{onlineStatus ? "✅" : "❎"}
            </li>
            <li>
              <Link
                to="/"
                className="mx-5 px-2 td decoration-0 hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="mx-5 px-2 td decoration-0 hover:text-orange-400"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="mx-5 px-2 td decoration-0 hover:text-orange-400"
              >
                Contact us
              </Link>
            </li>
            <li className="mx-5 px-2 td decoration-0 hover:text-orange-400 font-bold">
              <Link to="/cart">Cart({cart.length})</Link>
            </li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
