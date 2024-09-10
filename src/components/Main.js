import React,{useState} from "react"
import ResCard from "./ResCard"
import resList from "../utils/mockData"
import RestaurantCard from "./ResCard";
export default function Main()
{
    const [listOfRestaurants,setListOfRestaurants]=useState(resList)
    
    return(
        <div className="main-section">
             <button onClick={()=>{
                let filterList=listOfRestaurants.filter(
                    (res)=> res.data.avgRating>3
                );
              // console.log(filterList)
              setListOfRestaurants(filterList)
             }}
             >Search</button>
             <div className="main-section card-container">
             {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.data.id} resData={restaurant} />
        ))}
             </div>
    
        </div>  
    )
}