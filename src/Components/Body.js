import { RestaurantCard } from "./RestaurantCard";
const Body=()=>{
    return(
        <div className="body-items">
<div className="search-bar"><input type="text" placeholder="Enter Here"/><button className="search-btn">Search</button></div>
<div className="restro-container">
    {/* //RestaurantCard */}
    <RestaurantCard/>
</div>
        </div>
    )
}
export default Body;