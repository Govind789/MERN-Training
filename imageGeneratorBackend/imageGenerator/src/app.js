import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/homePage/homePage.js";
import ImageGenerator from "./pages/imagegenerator/imageGenerator.js";
import History from "./pages/history/history.js";
import HistoryPage from "./pages/history/historyInformationPage.js";
import PointsContext from './context/pointsContext.js';

import "../globalStyles.css";

import {createBrowserRouter,Navigate,RouterProvider} from "react-router-dom";
import Signup from "./pages/signup/signup.js";
import Login from "./pages/login/login.js";
import ContactUs from "./pages/contactUs/contactUs.js";
import Help from "./pages/help/help.js";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    const [userPoints,setUserPoints] = useState();
    const [isLoggedIn,setIsLoggedin] = useState(()=>{
        if(localStorage.getItem('authorization'))
            return true;
        else
            return false;
    });

    // const path  = 'https://image-generator-6w8o.onrender.com';
    const login = ()=> {
        setIsLoggedin(true);
    }

    const logout = ()=> {
        localStorage.removeItem('authorization');
        setIsLoggedin(false);
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element : <HomePage />,
        },
        {
            path: '/home',
            element: <HomePage />
        },
        {
            path: '/imageGenerator',
            element: isLoggedIn? <ImageGenerator /> :<Navigate to='/login'/>
        },
        {
            path: '/history',
            element: <History />
        },
        {
            path: '/history/:historyId',
            element: <HistoryPage />
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/contactUs',
            element: <ContactUs />
        },
        {
            path: '/help',
            element: <Help />
        },
    ]);

    return (
        <PointsContext.Provider value={{
            userPoints:userPoints,
            setUserPoints: setUserPoints,
            isLoggedIn : isLoggedIn,
            login,
            logout
            }}>
            <RouterProvider router={router} />
        </PointsContext.Provider>
    )
};

root.render(<App/>);




