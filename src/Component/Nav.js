import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Styles/Nav.css"
import MyContext from "./context";



const Nav = () => {
  const context = useContext(MyContext)
  let {acct,setAcct} = context
 const handleClick = () => {
   console.log("clicked")
   setAcct({isAuth: false})

 }
   
  return (
    <nav className="nav-bar">
      <div className="img-div"> 
        <img 
        src="https://png.pngitem.com/pimgs/s/144-1446068_game-of-thrones-png-download-game-of-thrones.png" 
        alt="Game Of Thrones Logo" width="70px"> 
        </img>
      </div>
      <div className="link-div">
      <div className="link-wrapper">
      <Link to="/" className="nav-link" onClick={handleClick}> {acct.isAuth ? "Log out" : "Log In"}</Link>
      </div>
      <div className="link-wrapper">
      <Link to="/Home" className="nav-link"> Home </Link>
      </div>
      <div className="link-wrapper">
      <Link to="/Catalogs" className="nav-link"> Character Catalog </Link>
      </div>
      <div className="link-wrapper">
      <Link to="/profile" className="nav-link"> Profile </Link>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
