import React,{useState} from "react"
import { LOGO_URL } from "../utils/constant"
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
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>CART</li>
            </ul>
        </nav>
    )
}