import React from 'react'

const RestroData = ({restro}) => {
  return ( 
        <div className="restro-card">
            <img
              className="restro-img"
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restro?.info?.cloudinaryImageId}
            ></img>
            <h4>{restro?.info?.name}</h4>
            <h5>{restro?.info?.avgRatingString}</h5>
            <h4>{restro?.info?.cuisines.join(",")}</h4>
            <h4>{restro?.info?.areaName}</h4>
  </div>
  )
}

export default RestroData