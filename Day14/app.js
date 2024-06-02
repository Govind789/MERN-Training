import React, { useState } from "react";
import ReactDOM from "react-dom";
import HomePage from "./src/pages/homePage/homePage.js";
import ImageGenerator from "./src/pages/imagegenerator/imageGenerator.js";
import History from "./src/pages/history/history.js";
import HistoryInfoPage from "./src/pages/history/historyInformationPage.js";
import PointsContext from './src/context/pointsContext.js';
import Signup from "./src/pages/signup/signup.js";

import "./globalStyles.css";

import {createBrowserRouter,RouterProvider} from "react-router-dom";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    const [userPoints,setUserPoints] = useState(20);
    const [isLoggedIn,setIsLoggedin] = useState();

    const login = ()=> {
        setIsLoggedin(true);
    }

    const logout = ()=> {
        setIsLoggedin(false);
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element : <HomePage userPoints = {userPoints} setUserPoints = {setUserPoints}/>,
        },
        {
            path: '/home',
            element: <HomePage userPoints = {userPoints} setUserPoints = {setUserPoints}/>
        },
        {
            path: '/image-generator',
            element: <ImageGenerator userPoints = {userPoints} setUserPoints = {setUserPoints}/>
        },
        {
            path: '/history',
            element: <History userPoints = {userPoints} setUserPoints = {setUserPoints}/>
        },
        {
            path: '/history/:historyId',
            element: <HistoryInfoPage userPoints = {userPoints} setUserPoints = {setUserPoints}/>
        },
        {
            path: '/signup',
            element: <Signup/>
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



//routing
//dynamic routing
//optional chaining
//all cards
//prop builduing
//context api
//cloud many
//sign in sign out
