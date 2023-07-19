import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [ user, setUser ] = useState({username: "", password: ""});
    const navigate = useNavigate();

    const changeHandler = (e) => {
        e.preventDefault();
       const { name, value } = e.target;
       setUser({ ...user, [name]: value })
    }
   const submitHandler = () => {
     const { username, password } = user;
     let data = {
      name: username,
      password: password
     }
     axios.post(`${process.env.REACT_APP_DOMAIN}/login`, data).then(res=> {
      console.log("Check Login Res::", res)
      toast.success('successfully logged In!');
      navigate('/chat')
     }).catch(err=> {
      console.log("Error log::", err);
      toast.error('Invalid credentials or password mismatch!');
     })
   };
    const { username, password } = user;
    let isDisabled = username && password ? false : true;
  return (
<section className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" 
              value={username} onChange={changeHandler} name="username"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" 
              value={password} onChange={changeHandler} name="password"
              />
            </div>
            <input disabled={isDisabled} type="submit" value="Login" className={`${isDisabled?'disable ':''}btn solid`} onClick={submitHandler} />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </section>
  )
}
