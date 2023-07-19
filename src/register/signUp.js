import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from'react-router-dom';

export default function SignUpForm() {
    const [ profile, setProfile ] = useState({ username: "", email: "", mobile: "", password: "" });
    const navigate = useNavigate();

    const changeHandler = (e) => {
        e.preventDefault();
       const { name, value } = e.target;
       setProfile({ ...profile, [name]: value })
    }
    const submitHandler = () => {
      const { username, email, mobile, password } = profile;
      let data = {
        name: username,
        email: email,
        mobile: mobile,
        password: password
      }
      axios.post('http://localhost:5000/signup', data).then(res=> {
        console.log("Check Login Res::", res)
        toast.success('you are successfully registered.');
        navigate('/')
       }).catch(err=> {
        console.log("Error log::", err);
        toast.error('Registration failed!');
       })
    }
    const { username, email, mobile, password } = profile;
    let isDisabled = username && email && mobile && password ? false : true
  return (
<section className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" name="username"
              value={username} onChange={changeHandler}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" name="email"
              value={email} onChange={changeHandler}
              />
            </div>
            <div className="input-field">
              <i className='fas fa-mobile-alt'></i>
              <input type="number" placeholder="Mobile" name="mobile"
              value={mobile} onChange={changeHandler}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" 
              value={password} onChange={changeHandler}
              />
            </div>
            <input type="submit" className={`${isDisabled?'disable ':''}btn`} value="Sign up" onClick={submitHandler} />
            <p className="social-text">Or Sign up with social platforms</p>
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
