import React from "react";

export default function About() {
    return (
        <>
        <div className="text-center  bg-teal-500 p-5 pt-32 mt-24">
        <h1 className="text-white font-bold  md:text-4xl text-3xl mb-4">ABOUT COMPONENT</h1>
        <div className="flex flex-row items-center space-x-5 justify-center text-white">
          <div className="w-24 h-1 bg-white rounded"></div>
          <i className="fa-solid fa-star"></i>
          <div className="w-24 h-1 bg-white rounded"></div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 p-5 mb-32">
        <div className="w-full md:w-1/2 px-5">
            <p className="sm:text-left text-lg text-white ">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
        </div>
        <div className="w-full md:w-1/2 px-5">
            <p className="sm:text-left text-lg text-white ">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
        </div>
    </div>
      </div>
        </>
    );
}
