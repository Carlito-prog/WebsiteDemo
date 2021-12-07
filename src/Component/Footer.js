import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "./context";
import "./Styles/Footer.css"
    
    
    const Footer = () => {
    const context = useContext(MyContext)
    let {acct,setAcct} = context
   const handleClick = () => {
     console.log("clicked")
     setAcct({isAuth: false})
  
   }
    return (
       <div className="footer-wrp">
           <div className="f-link-wrp">
            {/* links go here */}
            <Link to="/" className="nav-link" onClick={handleClick}> {acct.isAuth ? "Log out" : "Log In"}</Link>
            <Link to="/Home" className="nav-link"> Home </Link>
            <Link to="/Catalogs" className="nav-link"> Character Catalog </Link>
            <Link to="/profile" className="nav-link"> Profile </Link>
           </div>
           <div className="right-wrp">
            {/* images */}
            
           </div>
       </div>
    )
}

export default Footer
