import React from 'react'
import {CLOUDINARY_IMAGE} from "../Utils/Constant"
const RestroData = ({restro}) => {
  return ( 
        <div className="restro-card">
            <img
              className="restro-img"
              src={CLOUDINARY_IMAGE+restro?.info?.cloudinaryImageId}
            ></img>
            <h4>{restro?.info?.name}</h4>
            <h5>{restro?.info?.avgRatingString}</h5>
            <h4>{restro?.info?.cuisines.join(",")}</h4>
            <h4>{restro?.info?.areaName}</h4>
  </div>
  )
}

export default RestroData