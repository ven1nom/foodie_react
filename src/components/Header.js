import React from "react"
import { LOGO_URL } from "../utils/constant"
export default function Header()
{
    return(

        <nav>
            <img src={LOGO_URL} alt="logo"/>
            <ul >
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>CART</li>
            </ul>
        </nav>
    )
}