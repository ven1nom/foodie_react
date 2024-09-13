import React, { useEffect,useState } from "react"
const useOnlineStatus=()=>{
    //input -> ntg
    //output -> online/offline status (bool value afterall)
    const[onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
            window.addEventListener("offline", (e) => {
                  setOnlineStatus(false)
                });
                
                window.addEventListener("online", (e) => {
                  setOnlineStatus(true)
                });
    },[])
    
return onlineStatus;
}

export default useOnlineStatus;