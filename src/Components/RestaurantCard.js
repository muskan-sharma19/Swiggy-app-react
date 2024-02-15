import React from "react";
import RestroData from "./RestroData";
export const RestaurantCard = ({restaurantList}) => {
 
  return (
    <div className="cards">
      {restaurantList && restaurantList != ""
        ? restaurantList.map((restro, index) => {
            return <RestroData restro={restro} key={index} />;
          })
        : ""}
    </div>
  );
};
