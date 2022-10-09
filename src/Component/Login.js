import { useState } from "react";
import "./Styles/Login.css";
import { useContext } from "react";
import MyContext from "../context";
import { Redirect } from "react-router";

const CLogin = (props) => {
  const context = useContext(MyContext);
  let { acct, setAcct } = context;

  const [inputVal, setInputVal] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputVal);
    if (inputVal.username && inputVal.password) {
      setAcct({
        username: inputVal.username,
        isAuth: !acct.isAuth,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  return (
    <>
      {acct.isAuth ? <Redirect to="/home" /> : <> </>}
      <h1 className="login-text"> Login </h1>
      <section className="login-section">
        <div>
          <h5>OPEN USERNAME AND PASSWORD FOR ACCESS</h5>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form">
            <div className="label-wrapper">
              <label className="label" placeholder="Please Enter UserName">
                UserName:
              </label>
              <div className="input-wrapper">
                <input
                  name="username"
                  type="text"
                  value={inputVal.username}
                  placeholder="Enter Username"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="label-wrapper">
              <label className="label">Password:</label>
              <div className="input-wrapper">
                <input
                  name="password"
                  type="text"
                  value={inputVal.password}
                  placeholder="Enter Password"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="bnt-wrp">
              <button type="submit">
                {" "}
                {acct.isAuth ? "Log out" : "Log In"}{" "}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CLogin;
