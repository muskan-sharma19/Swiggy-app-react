import React from 'react'
import {CLOUDINARY_IMAGE} from "../Utils/Constant"
const RestroData = ({restro}) => {
  return ( 
        <div className="restro-card">
            <img
              className="restro-img"
              src={CLOUDINARY_IMAGE+restro?.info?.cloudinaryImageId}
            ></img>
        <div className="carddata">
            <h4>{restro?.info?.name}</h4>
            <h5>{restro?.info?.avgRatingString}</h5>
            <div className='cuisines'>{restro?.info?.cuisines.join(",")}</div>
            <div>{restro?.info?.areaName}</div>
            </div>
  </div>
  )
}

export default RestroData