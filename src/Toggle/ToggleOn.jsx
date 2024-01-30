import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOn({children}){
    const {toggle}=useContext(ToggleContext)
    return toggle?children:null
}