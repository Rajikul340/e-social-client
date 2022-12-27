import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Errorpage/ErrorPage";
import Layout from "../Layout/Layout";
import About from "../Pages/About/About";
import Home from '../Pages/Home/Home'
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>

            },
            {
                path:"media",
                element:<Media/>
            },
            {
                path:"message",
                element:<Message/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"login",
                element:<Login/>
            }
        ]
    }
])