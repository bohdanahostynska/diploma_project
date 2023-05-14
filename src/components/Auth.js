import React from "react";
import Input from "./Input";
import { useInput } from "../hooks/useInput";
import Drooling from "../assets/menu/drooling-face.svg";
import "../styles/Register.scss";

function Auth() {
  const email = useInput();
  const pass = useInput();
  const handleSignIn = (event) => {
    event.prevent.Default();
  };
  return (
    <div className="form_container">
      <div className="form_header">
        <h2 className="main_title">Welcome To Yelp App</h2>
        <img className="main-drooling-face" src={Drooling} alt="drooling" />
      </div>
      <div className="form_content">
        <form className="form_wrap" onSubmit={handleSignIn}>
          <span className="form_name">Login</span>
          <Input
            label="email"
            placeholder="Email"
            name="email"
            value={email.value}
            onChange={email.onChange}
          />
          <span className="form_name">Password</span>
          <Input
            label="password"
            placeholder="************"
            name="password"
            type="password"
            value={pass.value}
            onChange={pass.onChange}
          />
          <button className="button" type="submit">
            Login
          </button>
          <li className="form_text">don't have an account</li>
        </form>
      </div>
    </div>
  );
}

export default Auth;
