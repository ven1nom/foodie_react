import React,{useEffect, useState} from "react"
import ResCard from "./ResCard"
import resList from "../utils/mockData"
import RestaurantCard from "./ResCard";
import Shimmer from "./Shimmer";
export default function Main()
{
    const [listOfRestaurants,setListOfRestaurants]=useState(resList)
    

    useEffect(()=>{
       console.log("Chotu")
       //Fetch();
    },[])
 
    // const Fetch= async ()=>{
    //     const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.61610&lng=73.72860");
    //     const json= await data.json();
    //     console.log(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    //     const cardList=json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    //     setListOfRestaurants(cardList)
        

    // }

   if(listOfRestaurants===0)
   {
   return <Shimmer/>
   }
    return(
        <div className="main-section">
            <div>
                <input type="text" placeholder="Search Restaurants"/>
                <button onClick={()=>{
                    console.log("Search")
                }}>
                     Search
                </button>
            </div>
            <div>
             <button onClick={()=>{
                let filterList=listOfRestaurants.filter(
                    (res)=> {
                     return  res.data.avgRating > 4
                    } 
                );
              // console.log(filterList)
              setListOfRestaurants(filterList)
             }}
             >Top Rated Restuarant</button>
             </div>
             <div className="card-container">
             {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.data.id} resData={restaurant} />
        ))}
             </div>
    
        </div>  
    )
}