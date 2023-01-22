import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import Foothead from './pages/foothead';
import Add from './pages/add/add';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Foothead/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/add",
        element:<Add/>
      },

    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
