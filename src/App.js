import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function AppLayout(){
    return(
        <div className="container">
        <Header/>
        <Main/>
        <Footer/>
        </div>
      
    )
}

const root = document.getElementById("root");
createRoot(root).render(<AppLayout/>);

