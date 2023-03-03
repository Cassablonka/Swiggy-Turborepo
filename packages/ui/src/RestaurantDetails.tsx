import { useParams } from "react-router-dom";
import { IMAGE_URL } from "utils";
import { useGetIndividualRestaurant } from "utils";

export const RestaurantDetails = () => {
  const { menuId } = useParams();
  const restaurant = useGetIndividualRestaurant(menuId!) as any;

  return (
    <>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="relative">
                  <img
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    src={IMAGE_URL + restaurant.cloudinaryImageId}
                    alt="hero"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"></span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              {restaurant.name}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              What they serve, their stars and all.
            </p>
            <section className="">
              <div className="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
                <div className="flex">
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
                      <p>Offers on Restaurant</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <hr className="mt-12" />
        <div className="flex mt-5 flex-wrap py-8 md:flex-nowrap">
          <div className="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0">
            <strong className="flex text-3xl my-4 font-thin leading-none text-left text-thin lg:text-4xl">
              List of Menus
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};
