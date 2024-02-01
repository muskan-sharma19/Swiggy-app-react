import React from "react";
import axios from "axios";
import RestroData from "./RestroData";
export const RestaurantCard = () => {
  const [restaurantList, setRestaurantList] = React.useState("");
  React.useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      .then((response) => {
        setRestaurantList(
          response?.data?.data?.cards[4]?.card?.card?.gridElements
            ?.infoWithStyle?.restaurants
        );
      });
  }, []);
  return (
    <div className="cards">
      {restaurantList && restaurantList != ""
        ? restaurantList.map((restro,index) => {return <RestroData restro={restro} key={index}/>})
        : ""}
    </div>
  );
};
