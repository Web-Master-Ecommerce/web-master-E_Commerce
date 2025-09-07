import * as icon from '@/Utils/Icons/Icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CartIcon() {
  // get cart from redux store (fallback to empty array if not found)
  const cart = useSelector((state) => state.cart?.items || []);

  // total quantity of all products
  const productsCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  // total price of all products
  const totalPrice = cart.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="flex justify-center items-center gap-2">
      {/* Total Price */}
      <p>${totalPrice.toFixed(2)}</p>

      {/* Cart Icon */}
      <Link to="/cart">
        <div className="cart-icon relative cursor-pointer">
          <div
            className={`${
              productsCount ? 'bg-green-200' : 'bg-red-200'
            } animate-ping p-2 rounded-full absolute w-full h-full`}
          ></div>
          <div
            className={`icon ${
              productsCount ? 'bg-green-200' : 'bg-red-200'
            } p-2 rounded-full`}
          >
            <icon.PiHandbag
              className={`${
                productsCount ? 'text-green-600' : 'text-red-600'
              } text-xl`}
            />
          </div>
          {/* Items Count */}
          <span
            className={`${
              productsCount ? 'bg-primary' : 'bg-red-700'
            } z-30 absolute -right-1 -top-2 w-5 h-5 flex justify-center items-center text-white p-1 rounded-full`}
          >
            {productsCount}
          </span>
        </div>
      </Link>
    </div>
  );
}
