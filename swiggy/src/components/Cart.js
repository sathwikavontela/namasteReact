import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h3 className=" m-6 font-bold">Cart</h3>
      <div className="w-5/12 m-auto ">
        <button
          className="font-bold border rounded-lg bg-gray-800 text-white p-1 mb-4"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <MenuCard items={cart} />
      </div>
    </div>
  );
};

export default Cart;
