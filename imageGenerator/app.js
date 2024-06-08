import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/homePage/homePage.js";
import ImageGenerator from "./src/pages/imagegenerator/imageGenerator.js";
import History from "./src/pages/history/history.js";
import HistoryInfoPage from "./src/pages/history/historyInformationPage.js";
import PointsContext from './src/context/pointsContext.js';

import "./globalStyles.css";

import {createBrowserRouter,Navigate,RouterProvider} from "react-router-dom";
import Signup from "./src/pages/signup/signup.js";
import Login from "./src/pages/login/login.js";
import ContactUs from "./src/pages/contactUs/contactUs.js";
import Help from "./src/pages/help/help.js";

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

    const path  = 'https://image-generator-6w8o.onrender.com';
    const login = ()=> {
        setIsLoggedin(true);
    }

    const logout = ()=> {
        localStorage.removeItem('authorization');
        setIsLoggedin(false);
    }

    const router = createBrowserRouter([
        {
            path: `${path}/`,
            element : <HomePage />,
        },
        {
            path: `${path}/home`,
            element: <HomePage />
        },
        {
            path: `${path}/imageGenerator`,
            element: isLoggedIn? <ImageGenerator /> :<Navigate to='/login'/>
        },
        {
            path: `${path}/history`,
            element: <History />
        },
        {
            path: `${path}/history/:historyId`,
            element: <HistoryInfoPage />
        },
        {
            path: `${path}/signup`,
            element: <Signup/>
        },
        {
            path: `${path}/login`,
            element: <Login/>
        },
        {
            path: `${path}/contactUs`,
            element: <ContactUs />
        },
        {
            path: `${path}/help`,
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




