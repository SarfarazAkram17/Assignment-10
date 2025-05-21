import React from "react";

const Banner = () => {
  return (
    <div className="carousel my-12 w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="px-28 flex justify-center items-center">
          <div className="p-6 text-white gap-4 bg-[#13314A] flex justify-between items-center rounded-xl overflow-hidden">
            <img
              src="https://i.ibb.co/4nvVsZTp/hero-image-left-1.png"
              className="w-[50%]"
            />
            <div>
              <h1 className="text-4xl mb-6 font-bold">
                Find Trusted Freelancers in Minutes
              </h1>
              <p className="text-sm">
                Need help with a task? TaskWave connects you with skilled
                freelancers in web development, design, writing, and more. Post
                your task and get offers in real-time.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="px-28 flex justify-center items-center">
          <div className="p-6 text-white gap-4 bg-[#0C4039] flex justify-between items-center rounded-xl overflow-hidden">
            <img src="https://i.ibb.co/PZhFpv9q/1.png" className="w-[50%]" />
            <div>
              <h1 className="text-4xl mb-6 font-bold">Post Tasks with Ease</h1>
              <p className="text-sm">
                Describe your task, set your budget and deadline, and let the
                right freelancers come to you. Simple, fast, and efficient — all
                in one place.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="px-28 flex justify-center items-center">
          <div className="p-6 text-white gap-4 bg-[#25223F] flex justify-between items-center rounded-xl overflow-hidden">
            <img
              src="https://i.ibb.co/TM13XhHZ/hero-image-left-3.png"
              className="w-[50%]"
            />
            <div>
              <h1 className="text-4xl mb-6 font-bold">Your Work, Your Way</h1>
              <p className="text-sm">
                Join TaskWave as a freelancer and take control of your workflow.
                Discover a wide range of projects tailored to your expertise,
                bid confidently, and build lasting client relationships — all
                from one platform.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
