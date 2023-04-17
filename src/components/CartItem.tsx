import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }: any) => {
  const { removeFromCart, increaseAmount }: any = useContext(CartContext);

  // Destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-gray-800 hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-gray-700 font-medium">
              <div className="flex-1 h-full flex justify-center items-center px-2 cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center px-2 cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>

            <div
              className="flex-1 flex justify-end items-center text-gray-700 font-medium
            "
            >{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
