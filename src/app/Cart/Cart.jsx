import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice"; // adjust path if needed
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const dispatch = useDispatch();

  // Get cart items from redux
  const cart = useSelector((state) => state.cart?.items || []);

  // total quantity
  const productsCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  // total price
  const totalPrice = cart.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-gray-600 text-lg">🛒 Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h2>

      {/* Cart Items */}
      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            {/* Product Info */}
            <div className="flex items-center gap-6">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain rounded-md border"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">
                  ${item.price} × {item.quantity}
                </p>
              </div>
            </div>

            {/* Actions & Price */}
            <div className="flex items-center gap-6">
              <p className="text-lg font-bold text-teal-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition"
              >
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Summary */}
      <div className="flex justify-between items-center mt-10 border-t pt-6 text-lg">
        <p>
          Total Items:{" "}
          <span className="font-bold text-teal-600">{productsCount}</span>
        </p>
        <p>
          Total Price:{" "}
          <span className="font-bold text-teal-600">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}
