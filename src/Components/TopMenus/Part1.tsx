import '../../Theme/style.css'
import { Link } from "react-router-dom"

export default function MenuPart1(){
    return (<>
      
        <div className="logo" >
          <Link to={"/"} ><img src="icons/logo.png" alt="Amazon logo" /> </Link>
        </div>
        <div className="deliver" >
            <i className="fa-solid fa-location-dot" ></i>
            <span>Deliver to 
            <p>Afghanistan</p>
            </span>
            
        </div>
    
    </>)
}