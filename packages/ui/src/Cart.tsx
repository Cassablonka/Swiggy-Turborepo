import { useSelector } from "react-redux";
import MenuCard from "./MenuCard";

export const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);

  return (
    <>
      <div className="w-6/12 border mb-8 mt-6 mx-10">
        <div className="flex justify-between border-b mt-4 pl-10 pr-12 pb-4">
          <h2 className="font-semibold font-sans text-4xl">Cart</h2>
          <h2 className="font-semibold font-sans text-4xl">
            {cartItems.length} Items
          </h2>
          {cartItems.length === 0 && (
            <h2 className="font-sans text-2xl">Your cart is empty</h2>
          )}
        </div>
        <div>
          {cartItems?.map((d: any, i: number) => {
            return <MenuCard key={i} {...d} />;
          })}
        </div>
      </div>
    </>
  );
};
