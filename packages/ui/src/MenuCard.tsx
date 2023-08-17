import { useDispatch } from "react-redux";
import { IMAGE_URL, addItem } from "utils";

const MenuCard = (props: any) => {
  const { name, imageId, price, itemAttribute, category, description } = props;
  const cuisineColor = itemAttribute?.vegClassifier == "VEG" ? "green" : "red";

  const dispatch = useDispatch();

  return (
    <div className="flex prose md:flex-grow prose-md">
      <div className="flex flex-col ml-10 pt-10 pb-4 max-w-8xl sm:flex-row border-b border-gray-300">
        <div className="absolute">
          <button
            type="submit"
            onClick={() => dispatch(addItem(props))}
            className="px-4 py-1.5 mx-16 my-28 text-black bg-amber-200 hover:border-white border border-amber-400 hover:bg-white hover:text-black shadow-lg rounded-md font-semibold"
          >
            Add +
          </button>
        </div>
        <img
          src={IMAGE_URL + imageId}
          alt={category}
          className="object-cover object-center w-50 lg:h-32 md:h-25 rounded-lg"
        />
        <div className="flex-grow mx-12 my-10 prose text-center sm:text-left sm:mt-0 prose-md">
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
      </div>
    </div>
  );
};

export default MenuCard;
