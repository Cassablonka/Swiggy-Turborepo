import { useGetAllRestaurants } from "utils";
import { RestaurantCard } from "./RestaurantCard";

export const Body = () => {
  const restaurants = useGetAllRestaurants();

  return (
    <>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {restaurants?.map((d: any, i) => {
            return <RestaurantCard key={i} {...d.data} />;
          })}
        </div>
      </div>
    </>
  );
};
