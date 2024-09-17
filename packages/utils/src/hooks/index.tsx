import { useContext, useEffect, useState } from "react";
import { ALL_RESTAURANTS_URL, INDIVIDUAL_RESTAURANTS_URL } from "../constants";
import { fetchAPI } from "../helpers";
import { UserContext } from "../contexts";

export const useGetAllRestaurants = () => {
  const { auth } = useContext(UserContext);

  const { lat, lon } = auth.location;

  const locationString = `&lat=${lat}&lng=${lon}`;
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    const data = await fetchAPI(ALL_RESTAURANTS_URL + locationString);
    setRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return restaurants;
};

export const useGetIndividualRestaurant = (resId: string) => {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    getRestaurant(resId);
  }, []);

  async function getRestaurant(resId: string) {
    const data = await fetchAPI(INDIVIDUAL_RESTAURANTS_URL + resId);
    setRestaurant(data?.data?.cards);
  }
  return restaurant;
};
