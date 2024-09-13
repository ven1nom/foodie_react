import React,{useState} from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
export default function Header()
{

const [userLogin,setUserLogin]=useState("Login")
function handleLogin()
{
    setUserLogin((preValue)=>{
      return preValue=="Login"?"Logout" :"Login"
    })
}
    return(

        <nav>
            <img src={LOGO_URL} alt="logo"/>
            <ul >
                <button onClick={handleLogin}>{userLogin}</button>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/contact">CONTACT US</Link></li>
                <li>CART</li>
            </ul>
        </nav>
    )
}