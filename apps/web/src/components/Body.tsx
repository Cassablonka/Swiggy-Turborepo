import { useEffect, useState } from "react";
import { RestaurantCard } from "ui";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.560339919294467&lng=73.9149521291256&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json.data.cards[2].data.data.cards);
  }
  return (
    <>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {restaurants.map((d: any, i) => {
            return <RestaurantCard key={i} {...d.data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
