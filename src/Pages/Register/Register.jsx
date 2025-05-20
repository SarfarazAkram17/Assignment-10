import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold mb-4">Register Now!</h1>
        <form className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="name"
            placeholder="Enter your Name"
          />
          <label className="label">Address</label>
          <input
            type="text"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="address"
            placeholder="Enter your Address"
          />
          <label className="label">Phone</label>
          <input
            type="number"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="phone"
            placeholder="Enter your Phone Number"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="photo"
            placeholder="Enter your Photo Url"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
            name="email"
            placeholder="Enter your Email"
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
          <button className="btn btn-neutral mt-4 text-2xl">Sign Up</button>
          <p className="text-xs my-2">
            Already have an account ? Please{" "}
            <Link
              to="/signIn"
              className="underline text-blue-500 font-semibold"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
