import { useSelector } from "react-redux";
import MenuCard, { withMenuCard } from "./MenuCard";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);

  const NewMenuCard = withMenuCard(MenuCard);

  const subTotal = useSelector((store: any) => store.cart.totalCartValue);

  const gstPrice = Number(((subTotal / 100) * 0.1).toFixed(2));

  const deliveryFee = subTotal === 0 ? 0 : 25;

  const orderTotal = subTotal / 100 + gstPrice + deliveryFee;

  return (
    <>
      <div className="bg-gradient-to-b from-orange-300 to-rose-300">
        <div className="flex">
          <div className="w-6/12 my-12 mx-28 rounded-lg shadow-md bg-white">
            <div>
              <div className="flex justify-between border-b-2 mt-4 px-12 pb-4">
                <h2 className="font-semibold font-sans text-4xl">Cart</h2>
                <h2 className="font-semibold font-sans text-4xl">
                  {cartItems.length} Items
                </h2>
                {cartItems.length === 0 && (
                  <h2 className="font-sans text-2xl pr-4 pt-2">
                    Your cart is empty
                  </h2>
                )}
              </div>
              {cartItems.length === 0 && (
                <div className="ml-2 absolute">
                  <div className="flex">
                    <img
                      className="w-1/2 pl-12 py-5"
                      src="https://static.vecteezy.com/system/resources/thumbnails/008/492/236/small/delivery-cartoon-illustration-png.png"
                      alt=""
                    />
                    <span></span>
                    <Link to={"/"} className="relative left-48 top-20">
                      <span className="p-4 rounded-md text-black text-lg bg-amber-300 hover:bg-black hover:text-white">
                        Browse All Restaurants
                      </span>
                    </Link>
                  </div>
                </div>
              )}
              {cartItems?.map((d: any, i: number) => {
                return <NewMenuCard showTotal={true} key={i} {...d.props} />;
              })}
            </div>
          </div>
          <div className="w-3/12 ml-9 my-12 h-2/5 rounded-lg shadow-md bg-white">
            <div>
              <div className="flex justify-between border-b-2 mt-4 px-8 pb-4">
                <h2 className="font-normal font-sans text-4xl">Summary</h2>
              </div>
              <div className="px-8 pb-4 mt-4">
                <ul className="divide-y divide-gray-200">
                  <li className="py-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-500">
                          Subtotal
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm font-medium text-gray-500">
                        ₹{subTotal / 100}
                      </div>
                    </div>
                  </li>
                  <li className="py-2.5">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-500">
                          Delivery Fee
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm font-medium text-gray-500">
                        ₹{deliveryFee}
                      </div>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-500">
                          Tax {"(10% of Subtotal)"}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm font-medium text-gray-500">
                        ₹{gstPrice}
                      </div>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-md font-semibold text-gray-900">
                          Order Total
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-bold text-gray-900">
                        ₹ {orderTotal}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
