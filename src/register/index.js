import React from 'react';
import './style.css'
import LoginForm from './login';
import SignUpForm from './signUp';
import TabChanger from './tabChanger';

export default function RegistrationForm({ isLogin }) {
  
  return (
    <div className={`${!isLogin ? 'sign-up-mode' : ''} container`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isLogin ? <LoginForm /> :
          <SignUpForm />}
        </div>
      </div>
      <TabChanger />
    </div>
  )
}
