import React,{useState} from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "./useOnlineStatus"

export default function Header()
{

const [userLogin,setUserLogin]=useState("Login")
function handleLogin()
{
    setUserLogin((preValue)=>{
      return preValue=="Login"?"Logout" :"Login"
    })
}

const onlineStatus = useOnlineStatus();

    return(

        <nav>
            <img src={LOGO_URL} alt="logo"/>
            <ul >
                <button onClick={handleLogin}>{userLogin}</button>
                <li>OnlineStatus: {onlineStatus ? "YES" : "NO"}</li>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/contact">CONTACT US</Link></li>
                <li><Link to="/grocery">GROCERY</Link></li>
                <li>CART</li>
            </ul>
        </nav>
    )
}