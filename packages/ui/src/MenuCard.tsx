import { IMAGE_URL } from "utils";

const MenuCard = ({ name, imageId, price, itemAttribute, category }: any) => {
  const cuisineColor = itemAttribute.vegClassifier == "VEG" ? "green" : "red";
  return (
    <div className="flex prose md:flex-grow prose-md">
      <div className="flex flex-col ml-20 py-10 border-b border-gray-300 max-w-8xl sm:flex-row">
        <img
          src={IMAGE_URL + imageId}
          className="object-cover object-center w-50 lg:h-32 md:h-25 rounded-lg"
        />
        <div className="flex-grow m-12 prose text-center sm:text-left sm:mt-0 prose-md">
          <div
            className={`w-6 h-6 flex justify-center border-2 items-center rounded-md border-${cuisineColor}-500`}
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
          <h2>{name}</h2>
          <p>₹ {price / 100}</p>
          <p className="text-gray-400">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
