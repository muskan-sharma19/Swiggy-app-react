import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { URL_GET_ALL_RESTRO } from "../Utils/Constant";
import axios from "axios";
import Shimmer from "./Shimmer/Shimmer";
const Body = () => {
  const [restaurantList, setRestaurantList] = React.useState("");
  const [searchedData, setSearchedData] = React.useState("");
  React.useEffect(() => {
    fetchDataApi();
  }, []);
  const fetchDataApi = async () => {
    await axios.get(URL_GET_ALL_RESTRO).then((response) => {
      setRestaurantList(
        response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    });
  };
  const onClickFilterRestro = () => {
    const filteredData = restaurantList.filter(
      (item) => item?.info?.avgRating >= "4"
    );
    setRestaurantList(filteredData);
  };
  const onClickSearch = () => {
    const Data = restaurantList.filter((item) =>
      item?.info?.name.toLowerCase().includes(searchedData)
    );
    setRestaurantList(Data);
  };
  if(restaurantList.length===0){
    return (<Shimmer/>)
  }
  return (
    <div className="body-items">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Here"
          value={searchedData}
          onChange={(e) => setSearchedData(e.target.value)}
        />
        <button className="search-btn" onClick={() => onClickSearch()}>
          Search
        </button>
      </div>
      <div className="filter-btn">
        <button type="button" onClick={() => onClickFilterRestro()}>
          Top Rated Restro
        </button>
      </div>
      <div className="restro-container">
        {/* //RestaurantCard */}
        <RestaurantCard restaurantList={restaurantList} />
      </div>
    </div>
  );
};
export default Body;
