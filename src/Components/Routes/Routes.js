import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Errorpage/ErrorPage";
import Layout from "../Layout/Layout";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Messages from "../Pages/Messages/Messages";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      
      },
      {
        path: "media",
        element: <PrivateRoute><Media /></PrivateRoute>,
      },
      {
        path: "messages",
        element: <Messages />,
  
      },
      {
        path: "/about/:id",
        element: <PrivateRoute><About /></PrivateRoute>,
        loader: ({params}) => fetch(` https://e-social-server.vercel.app/users/${params.id}`)

      },
      {
        path: "register",
        element: <Register />,
        loader: () => fetch(` https://e-social-server.vercel.app/users`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "postdetails/:id",
        loader: ({ params }) =>
          fetch(
            ` https://e-social-server.vercel.app/mediadata/${params.id}`
          ),
        element: <PostDetails />,
      },
 
    ],
  },
]);
