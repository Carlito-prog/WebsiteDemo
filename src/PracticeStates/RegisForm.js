import React from "react";

export default function RegisForm() {
  return (
    <div className="master-login-section">
      <form>
        <div className="master-form-group">
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="master-form-group">
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="master-form-group">
          <label htmlFor="cpassword">confirm password</label>
          <input
            id="cpassword"
            name="cpassword"
            type="password"
            placeholder="confirm password"
          />
        </div>
      </form>
    </div>
  );
}

