import React from "react"
import {CDN_URL} from "../utils/constant"

export default function ResCard(props)
{
    const{name,cuisines,avgRating,sla:{deliveryTime},cloudinaryImageId}=props.resData
    return(
        <div className="res-card">
            <img className="res-image"src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4><span>{avgRating}</span>stars</h4>
            <h4><span>{deliveryTime}</span>minutes</h4>
        </div>
    )

}