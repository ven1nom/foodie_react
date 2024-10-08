import React,{useEffect, useState} from "react"
import ResCard,{withPromotedLabel} from "./ResCard"
import resList from "../utils/mockData"
import RestaurantCard from "./ResCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";


export default function Main()
{
    const [listOfRestaurants,setListOfRestaurants]=useState(resList)
    
    //HOC
    const RestCardPromoted=withPromotedLabel(ResCard);
    
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
 const {onlineStatus}=useOnlineStatus;

if(onlineStatus===false)
{
    return(
        <h1>You are Offline</h1>
    )
}
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
               restaurant.data.promoted ? (
                 <RestCardPromoted resData={restaurant} key={restaurant.data.id} />
               ) : (
                 <ResCard resData={restaurant} key={restaurant.data.id} />
               )
             ))}
             </div>
    
        </div>  
    )
}