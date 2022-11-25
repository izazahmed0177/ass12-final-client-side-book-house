import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/login',
                element:<Login></Login>

            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
        
            {
                path:'/blog',
                element:<Blog></Blog>
            },
        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard/AllBuyers',
            },
            {
                path:'/dashboard/AllSellers',
            },
            {
                path:'/dashboard/ReportedItems',
            },


            
            {
                path:'/dashboard',
            },
            {
                path:'/dashboard',
            },
            {
                path:'/dashboard',
            },
        ]
        

    },



])

export default router;