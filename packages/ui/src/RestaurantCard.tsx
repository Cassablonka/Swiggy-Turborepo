import { IMAGE_URL } from "utils";

type RestaurantProps = {
  name: string;
  costForTwo: string;
  avgRating: string;
  cloudinaryImageId: string;
  cuisines: string[];
};

export const RestaurantCard = ({
  name,
  avgRating,
  cloudinaryImageId,
  cuisines,
  costForTwo,
}: RestaurantProps) => {
  const newName = name.split("-")[0];
  const newCuisines = cuisines.join(", ").slice(0, 30);

  function ratingsColor() {
    if (Number(avgRating) > 4) {
      return "bg-green-700";
    } else if (Number(avgRating) <= 3.4) {
      return "bg-orange-400";
    } else {
      return "bg-green-500";
    }
  }
  return (
    <div className="p-3 border-2 border-gray-100 rounded-xl hover:shadow-2xl">
      <img
        className="object-cover object-center w-full mb-2.5 lg:h-48 md:h-36 rounded-lg"
        src={IMAGE_URL + cloudinaryImageId}
        alt="blog"
      />
      <hr className="mb-2" />
      <div className="inline-flex justify-between w-full">
        <h1 className="text-xl font-semibold leading-none tracking-tighter text-neutral-600">
          {newName}
        </h1>
        <span className={ratingsColor() + " text-white px-1 rounded-md"}>
          {avgRating}⭑
        </span>
      </div>
      <div className="inline-flex justify-between w-full">
        <p className="text-sm text-gray-500">
          {newCuisines.length > 28 ? newCuisines + "..." : newCuisines}
        </p>
        <span className="text-sm text-gray-500">
          {costForTwo?.toLowerCase()}
        </span>
      </div>
    </div>
  );
};
