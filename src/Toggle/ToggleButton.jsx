import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleButton({children}){
    const {handleToggle}=useContext(ToggleContext)
    return(
        <div onClick={handleToggle}>
            {children}
        </div>

    )
}