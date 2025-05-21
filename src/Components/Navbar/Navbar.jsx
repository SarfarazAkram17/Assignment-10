import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => toast.warning("You logged out successfully"))
      .catch((error) => toast.error(error.code));
  };
  const links = (
    <>
      <NavLink className="m-1 px-2 py-1 hover:bg-gray-200 font-semibold" to="/">
        Home
      </NavLink>
      <NavLink
        className="m-1 px-2 py-1 hover:bg-gray-200 font-semibold"
        to="/addTask"
      >
        Add Task
      </NavLink>
      <NavLink
        className="m-1 px-2 py-1 hover:bg-gray-200 font-semibold"
        to="/browseTasks"
      >
        Browse Tasks
      </NavLink>
      <NavLink
        className="m-1 px-2 py-1 hover:bg-gray-200 font-semibold"
        to='/myPostedTasks'
      >
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
            {!user && (
              <Link to="/register" className="lg:hidden block my-2">
                <button className="btn btn-success text-xl">Register</button>
              </Link>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-bold rancho">
          <img
            src="https://i.ibb.co/qM2m3tj9/logo.png"
            className="w-8 h-8"
            alt=""
          />{" "}
          TaskWave
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <div className="mr-6">
            <img
              src={user.photoURL}
              alt=""
              data-tooltip-id="my-tooltip"
              data-tooltip-html={`
          <div>
            <span class="flex justify-center mt-2 rancho text-2xl font-bold">${user.displayName}</span>
            <div class="flex justify-center my-4">
              <button
              onclick="document.getElementById('tooltip-logout-btn').click()"
              class="btn btn-error text-xl"
              >
                 Log Out
              </button>
             </div>
          </div>
        `}
              className="rounded-full w-12 h-12 cursor-pointer"
            />
            <Tooltip
              className="z-10"
              id="my-tooltip"
              delayShow={50}
              delayHide={200}
              clickable={true}
              />
            {/* Hidden button to handle logout click event */}
            <button
              id="tooltip-logout-btn"
              style={{ display: "none" }}
              onClick={handleLogout}
            />
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <Link to="/login">
              <button className="btn btn-success text-xl">Login</button>
            </Link>
            <Link to="/register" className="hidden lg:block">
              <button className="btn btn-success text-xl">Register</button>
            </Link>
          </div>
        )}
      </div>
      <Tooltip id="my-tooltip"></Tooltip>
    </div>
  );
};

export default Navbar;
