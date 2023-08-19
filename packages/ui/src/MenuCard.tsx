import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IMAGE_URL,
  UserContext,
  addItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "utils";

const MenuCard = (props: any) => {
  const {
    name,
    imageId,
    price,
    itemAttribute,
    category,
    id,
    description,
    showTotal,
  } = props;
  const cuisineColor = itemAttribute?.vegClassifier == "VEG" ? "green" : "red";

  const dispatch = useDispatch();

  const { addItemNotification, removeItemNotification } =
    useContext(UserContext);

  const cartItems = useSelector((store: any) => store.cart.items);

  let menuObj: any;
  for (let index = 0; index < cartItems.length; index++) {
    const element = cartItems[index];
    if (element.props.id === id) {
      menuObj = element;
    }
  }

  const totalPrice = menuObj?.totalItemsValue / 100;

  const handleAddClick = () => {
    if (!menuObj) {
      addItemNotification();
    }
    dispatch(addItem(props));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseItemQuantity(menuObj?.props));
  };

  const handleDecreaseClick = () => {
    if (menuObj.quantity === 1) {
      removeItemNotification();
    }
    dispatch(decreaseItemQuantity(menuObj?.props));
  };

  const AddButton = (
    <button className="px-8" onClick={handleAddClick}>
      Add
    </button>
  );

  const incrementDecrementButton = (
    <div className="font-bold flex text-base px-4">
      <button onClick={handleIncreaseClick}>+</button>
      <div className="px-5">{menuObj?.quantity}</div>

      <button onClick={handleDecreaseClick}>-</button>
    </div>
  );

  return (
    <div className="flex prose md:flex-grow prose-md">
      <div className="flex flex-col ml-10 pt-10 pb-4 max-w-8xl sm:flex-row border-b border-gray-300">
        <div className="absolute">
          <div className="relative py-1.5 mx-12 my-28 text-black bg-amber-300 hover:border-gray-300 hover:shadow-lg border border-amber-400 hover:bg-white hover:text-black rounded-md font-semibold">
            {menuObj?.quantity > 0 ? incrementDecrementButton : AddButton}
          </div>
        </div>
        <img
          src={IMAGE_URL + imageId}
          alt={category}
          className="object-cover object-center w-50 lg:h-32 md:h-25 rounded-lg"
        />
        <div className="flex-grow mx-8 my-10 prose text-center sm:text-left sm:mt-0 prose-md">
          <div
            className={`border-2 border-${cuisineColor}-500 w-6 h-6 flex justify-center items-center rounded-md`}
          >
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="p-1"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke={cuisineColor}
                strokeWidth="2"
                fill={cuisineColor}
              />
            </svg>
          </div>
          <h2 className="w-80">{name}</h2>
          <p>₹ {price / 100}</p>
          <p className="text-gray-400 w-80">{description}</p>
        </div>
        {showTotal ? <div className="">₹ {totalPrice}</div> : ""}
      </div>
    </div>
  );
};

export const withMenuCard = (MenuCard: any) => {
  return (props: any) => {
    return (
      <>
        <MenuCard {...props} />
      </>
    );
  };
};

export default MenuCard;
