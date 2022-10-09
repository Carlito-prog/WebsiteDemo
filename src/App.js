import Home from "./Component/Home";
import Catalogs from "./Component/Catalogs";
import Article from "./Component/Article";
import Nav from "./Component/Nav";
import CLogin from "./Component/Login";
// import Profile from "./Component/Profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyContext from "./context";
import { useState } from "react";
import { Redirect } from "react-router";
import Footer from "./Component/Footer";

function App(props) {
  const [acct, setAcct] = useState({
    username: "",
    isAuth: false,
  });
  // const callTheFunc = () => {
  //    do something
  // }

  return (
    <MyContext.Provider
      value={{
        acct,
        setAcct,
        // handlefunc : ()=> { },
        // handlefunc : callTheFunc()
      }}
    >
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={CLogin} />
          {!acct.isAuth ? (
            <Redirect to="/" />
          ) : (
            <>
              <Route
                path="/home"
                render={() => (
                  <Home
                    card1Name="Carlito Gatz"
                    card2Name="Austin Powers"
                    card1Title="Web Dev"
                    card2Title="Using Props"
                  />
                )}
              />
              <Route path="/catalogs" component={Catalogs} />
              <Route path="/article/:id" component={Article} />
              {/* <Route path="/profile" component={Profile} /> */}
              <Footer />
            </>
          )}
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
