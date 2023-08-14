import { createContext } from "react";

type RestaurantContextProps = {
  allRestaurants: any;
  filteredRes: any;
  callBackFunc: any;
};

export const RestaurantContext = createContext<RestaurantContextProps>({
  allRestaurants: [],
  filteredRes: [],
  callBackFunc: () => null,
});
