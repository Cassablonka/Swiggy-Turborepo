import { RestaurantList } from "./RestaurantList";
import { Hero } from "./Hero";
import { useGetAllRestaurants, RestaurantContext } from "utils";
import { useEffect, useState } from "react";

export const Landing = () => {
  const data = useGetAllRestaurants();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setAllRestaurants(data);
    setFilteredRestaurants(data);
  }, [data]);

  return (
    <>
      <RestaurantContext.Provider
        value={{
          allRestaurants: allRestaurants,
          filteredRes: filteredRestaurants,
          callBackFunc: setFilteredRestaurants,
        }}
      >
        <Hero />
        <RestaurantList />
      </RestaurantContext.Provider>
    </>
  );
};
