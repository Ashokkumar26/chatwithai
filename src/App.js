import React from 'react';
import './App.css';
import ChatPanel from './chat';
import RegistrationForm from './register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
    <Route path="/" element={<RegistrationForm isLogin={true} />}></Route>
    <Route path="/registration" element={<RegistrationForm isLogin={false} />} ></Route>
      <Route path="/chat" element={<ChatPanel />} ></Route>
      </React.Fragment>
  )
);


function App() {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
