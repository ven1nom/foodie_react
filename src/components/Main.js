import React from "react"
import ResCard from "./ResCard"
import resObj from "../utils/mockData"
export default function Main()
{
    return(
        <div className="main-section">
             <button>Search</button>
             <div className="main-section card-container">
             <ResCard resData={resObj}/>
             </div>
    
        </div>  
    )
}