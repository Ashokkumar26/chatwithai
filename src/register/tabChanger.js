import React from "react";
import logo from './img/log.svg';
import register from './img/register.svg'
import { useNavigate } from 'react-router-dom';

export default function TabChanger() {
  const navigate = useNavigate();

  const changeTab = (tab) => {
    // const container = document.querySelector(".container");
    if (tab === "signUp") {
      // container.classList.add("sign-up-mode");
      navigate('/registration');
    } else {
      // container.classList.remove("sign-up-mode");
      navigate('/');
    }
  };
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>Welcome back</h3>
          <p>Your AI friend is waiting for you!</p>
          <button
            className="btn transparent"
            id="sign-up-btn"
            onClick={() => changeTab("signUp")}
          >
            Sign up
          </button>
        </div>
        <img src={logo} className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>Welcome to Chat with AI</h3>
          <p>We can give you solutions of unlimited doubtes and questions!</p>
          <button
            className="btn transparent"
            id="sign-in-btn"
            onClick={() => changeTab("signIn")}
          >
            Sign in
          </button>
        </div>
        <img src={register} className="image" alt="" />
      </div>
    </div>
  );
}
