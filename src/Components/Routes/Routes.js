import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Errorpage/ErrorPage";
import Layout from "../Layout/Layout";
import Home from '../Pages/Home/Home'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        ErrorPage:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])