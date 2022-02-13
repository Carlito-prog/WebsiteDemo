import React from "react";
import { store } from "../Store/store";


const PHeader = (props) => {

   

    const handleAddFllw = () => {
        store.dispatch({ ftype: "increment" })
    }

 return (
     <div className="head-wrp">
         <img src="https://images.unsplash.com/photo-1552777969-557c49688622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80" 
         alt="Profile Header "></img>
        <div className="btn2-wrp">
            <button onClick={handleAddFllw}>+ Follow {props.userName}</button>
         </div>
         
     </div>
 )
}
export default PHeader