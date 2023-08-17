import { Link } from "react-router-dom";
import { RestaurantCard } from "./RestaurantCard";
import { useContext } from "react";
import { RestaurantContext } from "utils";
import RestaurantListShimmer from "./Shimmers/RestaurantList/RestaurantListShimmer";

export const RestaurantList = () => {
  const { filteredRes } = useContext(RestaurantContext);

  if (filteredRes?.length === 0) {
    return <RestaurantListShimmer />;
  }

  return (
    <>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {filteredRes?.map((res: any) => {
            return (
              <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
                <RestaurantCard {...res.info} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
