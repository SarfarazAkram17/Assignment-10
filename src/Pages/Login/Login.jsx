import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold mb-4">Login Now!</h1>
          <form className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
              name="email"
              placeholder="Enter your email"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input text-lg placeholder:text-[15px] placeholder:font-bold rancho"
                name="password"
                placeholder="Enter your password"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-6 cursor-pointer z-10"
                  size={17}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-6 cursor-pointer z-10"
                  size={17}
                />
              )}
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 text-2xl">Sign In</button>
            <p className="text-xs my-2">
              Don't have an account ? Please{" "}
              <Link
                to="/signUp"
                className="underline text-blue-500 font-semibold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
