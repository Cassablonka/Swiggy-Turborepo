import { useSelector } from "react-redux";
import MenuCard from "./MenuCard";

export const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);

  return (
    <>
      <div className="flex bg-gray-200">
        <div className="w-6/12 my-12 mx-28 rounded-lg shadow-md bg-white">
          <div>
            <div className="flex justify-between border-b-2 mt-4 px-12 pb-4">
              <h2 className="font-semibold font-sans text-4xl">Cart</h2>
              <h2 className="font-semibold font-sans text-4xl">
                {cartItems.length} Items
              </h2>
              {cartItems.length === 0 && (
                <h2 className="font-sans text-2xl">Your cart is empty</h2>
              )}
            </div>
            <div className="ml-2">
              {cartItems?.map((d: any, i: number) => {
                return <MenuCard key={i} {...d} />;
              })}
            </div>
          </div>
        </div>
        <div className="border-2 my-12 rounded-lg">
          <h2 className="font-semibold font-sans text-2xl p-4">Summary</h2>
        </div>
      </div>
    </>
  );
};
