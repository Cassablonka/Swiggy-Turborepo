import { useParams } from "react-router-dom";
import { IMAGE_URL, useGetIndividualRestaurant } from "utils";
import MenuCategory from "./MenuCategory";
import { SetStateAction, useState } from "react";

export const RestaurantDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { menuId } = useParams();
  const data = useGetIndividualRestaurant(menuId!) as any;
  const restaurant = data[0]?.card?.card?.info;
  const menu = data[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const allCategories = menu?.filter(
    (res: any) =>
      res?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const onItemClick = (index: SetStateAction<null>) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="px-20 py-24 mx-auto sm:px-6 md:px-28 lg:px-26 lg:py-16">
        <div className="rounded-xl bg-gradient-to-l from-orange-300 to-rose-300 px-10 py-12 mx-auto sm:px-6 md:px-20 lg:px-16 lg:py-14">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="relative">
                    <img
                      className="object-cover object-center mx-auto rounded-lg"
                      src={IMAGE_URL + restaurant?.cloudinaryImageId}
                      alt="hero"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span className="mb-8 flex flex-wrap text-s text-black">
                <svg
                  className="w-6 h-6 mr-2 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 0C7.06 0 3 4.03 3 9.02c0 4.47 5.84 11.39 8.66 14.69a1 1 0 001.68 0C15.16 20.41 21 13.49 21 9.02 21 4.03 16.94 0 12 0z"
                  />
                  <circle cx="12" cy="9" r="3" fill="currentColor" />
                </svg>
                {restaurant?.locality}, {restaurant?.areaName},{" "}
                {restaurant?.city}
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tight text-black md:text-7xl lg:text-5xl uppercase">
                {restaurant?.name}
              </h1>
              <p className="mb-8 text-base leading-relaxed text-left tracking-widest text-black">
                {restaurant?.costForTwoMessage} |{" "}
                {restaurant?.avgRatingString + " stars"} |{" "}
                {restaurant?.totalRatingsString}
              </p>
              <div className="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
                <div className="flex m-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-green-600">
                      {
                        restaurant?.aggregatedDiscountInfo?.descriptionList[0]
                          ?.meta
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-4">
        {allCategories?.map((d: any, index: number) => {
          return (
            <MenuCategory
              key={index}
              {...d.card.card}
              index={index}
              activeIndex={activeIndex}
              onItemClick={onItemClick}
            />
          );
        })}
      </div>
    </>
  );
};
