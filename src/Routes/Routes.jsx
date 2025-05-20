import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddTask from "../Components/AddTask/AddTask";
import BrowseTasks from "../Components/BrowseTasks/BrowseTasks";
import MyPostedTasks from "../Components/MyPostedTasks/MyPostedTasks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                Component: AddTask
            },
                        {
                path: '/browseTasks',
                Component: BrowseTasks
            },
            {
                path: '/myPostedTasks',
                Component: MyPostedTasks
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
        element: <h1 className="text-red-500 text-7xl flex justify-center items-center h-screen font-bold">404 Page not found</h1>
    }
])