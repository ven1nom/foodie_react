import React,{useEffect, useState} from "react"
import ResCard,{withPromotedLabel} from "./ResCard"
import resList from "../utils/mockData"
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";
import { Link } from "react-router-dom";


export default function Main()
{
    const [listOfRestaurants,setListOfRestaurants]=useState(resList)
    //following state is for Search Functionality
    const [search,setSearch]=useState('')
    //search button function
    function handleSearch(){
        
    }

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
 const {onlineStatus}=useOnlineStatus();

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
                <input type="text" value={search} placeholder="Search Restaurants"/>
                <button onClick={handleSearch()}>
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
                <Link to="/restaurant/1234"><RestCardPromoted resData={restaurant} key={restaurant.data.id} /></Link> 
               ) : (
                 <Link to="/restaurant/1234"><ResCard resData={restaurant} key={restaurant.data.id} /></Link>
               )
             ))}
             </div>
    
        </div>  
    )
}