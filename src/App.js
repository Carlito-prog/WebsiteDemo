import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { createContext } from "react";
import Home from "./Component/Home";
import Catalogs from "./Component/Catalogs";
import Article from "./Component/Article";
import Nav from "./Component/Nav";
import CLogin from "./Component/Login";
import Profile from "./Component/Profile";
import MyContext from "./Component/context"
import { useState } from "react";
import { Redirect } from "react-router";


function App() {
  const [acct,setAcct] = useState({
    username: "",
    isAuth: false
  })
  return (
    <MyContext.Provider value={{ acct,setAcct }}>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={CLogin} />
      {!acct.isAuth ? <Redirect to="/" />: <> 
        <Route path="/home" component={Home} />
        <Route path="/catalogs" component={Catalogs} />
        <Route path="/article/:id" component={Article} />
        <Route path="/profile" component={Profile} />
      </>}
        
      </Switch>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
