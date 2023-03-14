import { Link } from "react-router-dom";
import { useGetAllRestaurants } from "utils";
import { RestaurantCard } from "./RestaurantCard";

export const RestaurantList = () => {
  const restaurants = useGetAllRestaurants();

  return (
    <>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {restaurants?.map((d: any, i) => {
            return (
              <Link to={"/restaurant/" + d.data.id} key={i}>
                <RestaurantCard {...d.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
