import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <div className="flex justify-center items-center flex-col">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small_2x/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
          alt=""
          className="w-[70%] mb-4"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
          Page Not Found
        </h2>

        <Link to="/">
          <button className="btn btn-primary text-xl px-6 rounded-full">
            🏠 Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
