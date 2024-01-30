import { useContext } from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleOff({children}){
    const {toggle}=useContext(ToggleContext)
    return toggle?null:children
}