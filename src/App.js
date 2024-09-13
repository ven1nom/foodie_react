import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";

function AppLayout(){
    return(
        <div className="container">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
      
    )
}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
            path:'/',
            element:<Main/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },

        ],
        errorElement:<Error/>,
    }
  
])

const root = document.getElementById("root");
createRoot(root).render(<RouterProvider router={appRouter}/>);

