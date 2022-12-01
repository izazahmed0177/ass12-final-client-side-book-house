import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CategoriesItemBooks from "../../Pages/CategoriesItemBooks/CategoriesItemBooks/CategoriesItemBooks";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportedItems from "../../Pages/Dashboard/Admin/ReportedItems/ReportedItems";
import MyOrders from "../../Pages/Dashboard/Buyers/MyOrders/MyOrders";
import AddAproduct from "../../Pages/Dashboard/Sellers/AddAproduct/AddAproduct";
import MyProducts from "../../Pages/Dashboard/Sellers/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Payment/Payment";
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
            {
                path:'/categorybooks/:id',
                element:<PrivateRoute><CategoriesItemBooks></CategoriesItemBooks></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/categorybooks/${params.id}`)
            }




        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            // admin route
            {
                path:'/dashboard/AllBuyers',
                element:<AllBuyers></AllBuyers>,
                loader:()=>fetch('http://localhost:5000/allBuyers')
            },
            {
                path:'/dashboard/AllSellers',
                element:<AllSellers></AllSellers>,
                loader:()=>fetch('http://localhost:5000/allSeller')
            },
            {
                path:'/dashboard/ReportedItems',
                element:<ReportedItems></ReportedItems>
            },

            //Buyers route

            {
                path:'/dashboard/MyOrders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/MyOrders/payment',
                element:<Payment></Payment>
            },

            //seller route


            {
                path:'/dashboard/AddAproduct',
                element:<AddAproduct></AddAproduct>
            },
            {
                path:'/dashboard/MyProducts',
                element:<MyProducts></MyProducts>
            },
        ]
        

    },



])

export default router;