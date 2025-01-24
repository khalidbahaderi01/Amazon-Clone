import '../Theme/style.css'
import {menuItems} from "../Data/StaticData"

import { Link, useLocation } from "react-router-dom"

export default function SecondaryMenu(){

    const location = useLocation()

    return(
        <div className="menuBar">
            <nav className="menuItems">
            <a href="" className="Menu_link" ><i className="fa-solid fa-bars bar"></i></a>
            <a href="">
            
            {menuItems.map((item) => (
                <Link to={item.path} className={`Menu_link menu  ${
                location.pathname === item.path ? "active" : ""}`}> {item.name} </Link>
            ))}
            
            </a>
          
            </nav>
        </div>
    ); 
}