import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddTask from "../Components/AddTask/AddTask";
import BrowseTasks from "../Components/BrowseTasks/BrowseTasks";
import MyPostedTasks from "../Components/MyPostedTasks/MyPostedTasks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/addTask',
                element: <PrivateRouter><AddTask></AddTask></PrivateRouter>
            },
                        {
                path: '/browseTasks',
                Component: BrowseTasks
            },
            {
                path: '/myPostedTasks',
                element: <PrivateRouter><MyPostedTasks></MyPostedTasks></PrivateRouter>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },

        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])