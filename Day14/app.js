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

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    const [userPoints,setUserPoints] = useState(20);
    const [isLoggedIn,setIsLoggedin] = useState(()=>{
        if(localStorage.getItem('authorization'))
            return true;
        else
            return false;
    });

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
            element: <HistoryInfoPage />
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/login',
            element: <Login/>
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




