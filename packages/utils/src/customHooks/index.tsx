import { useEffect, useState } from "react";
import { ALL_RESTAURANTS_URL, INDIVIDUAL_RESTAURANTS_URL } from "../constants";
import { fetchAPI } from "../helpers";

export const useGetAllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getAllRestaurants();
  }, []);

  async function getAllRestaurants() {
    const data = await fetchAPI(ALL_RESTAURANTS_URL);
    setRestaurants(data?.data?.cards[2]?.data?.data?.cards);
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
