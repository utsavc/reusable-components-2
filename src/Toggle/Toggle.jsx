import { createContext, useEffect, useState } from "react"

const ToggleContext=createContext();

export default function Toggle({children,onToggle,onChange}){
    const [toggle,setToggle]=useState(false)

    function handleToggle(){
        setToggle(prevToggle=>!prevToggle)
    }

    useEffect(function(){
        onToggle() 

    },[toggle])


    return(
        <ToggleContext.Provider value={{toggle,handleToggle}}>
           {children}
        </ToggleContext.Provider>

    )
}

export {ToggleContext}