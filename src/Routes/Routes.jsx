import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import BrowseTasks from "../Pages/BrowseTasks/BrowseTasks";
import MyPostedTasks from "../Pages/MyPostedTasks/MyPostedTasks";
import AddTask from "../Pages/AddTask/AddTask";
import TaskDetails from "../Pages/TaskDetails/TaskDetails";
import UpdateTask from "../Pages/UpdateTask/UpdateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addTask",
        element: (
          <PrivateRoutes>
            <AddTask></AddTask>
          </PrivateRoutes>
        ),
      },
      {
        path: "/browseTasks",
        loader: () =>
          fetch("https://assignment-10-sarfaraz-akram.vercel.app/tasks"),
        Component: BrowseTasks,
        hydrateFallbackElement: (
          <div className="flex justify-center h-[50vh] items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/taskDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-sarfaraz-akram.vercel.app/tasks/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <TaskDetails></TaskDetails>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center h-[50vh] items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/myPostedTasks",
        element: (
          <PrivateRoutes>
            <MyPostedTasks></MyPostedTasks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateTask/:id",
        loader: ({params}) => fetch(`https://assignment-10-sarfaraz-akram.vercel.app/tasks/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateTask></UpdateTask>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: (
          <div className="flex justify-center h-[50vh] items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
