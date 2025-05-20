import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink className="m-1 px-2 py-1 hover:bg-gray-200 font-semibold" to="/">
        Home
      </NavLink>
      <NavLink className="m-1 px-2 py-1 hover:bg-gray-200 font-semibold" to="/addTask">
        Add Task
      </NavLink>
      <NavLink className="m-1 px-2 py-1 hover:bg-gray-200 font-semibold" to="/browseTasks">
        Browse Tasks
      </NavLink>
      <NavLink className="m-1 px-2 py-1 hover:bg-gray-200 font-semibold" to="/myPostedTasks">
        My Posted Tasks
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 text-center p-2 shadow"
          >
            {links}
             <Link to='/register' className="lg:hidden block my-2"><button className="btn">Register</button></Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-bold rancho"><img src="https://i.ibb.co/qM2m3tj9/logo.png" className="w-8 h-8" alt="" /> TaskWave</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
       <Link to='/login'><button className="btn">Login</button></Link>
       <Link to='/register' className="hidden lg:block"><button className="btn">Register</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
