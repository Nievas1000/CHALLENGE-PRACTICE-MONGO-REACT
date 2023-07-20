import { useContext } from "react"
import { UserContext } from "../context/user"

export const NavBar = () =>{
    const {setQuery} = useContext(UserContext)
    return(
        <div className="navbar-container">
            <input 
                type="text" 
                placeholder="Jhon, London, Basketball..." 
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    )
}