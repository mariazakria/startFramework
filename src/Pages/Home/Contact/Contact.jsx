import React from "react";

export default function Contact() {
  return (
    <div className="text-center p-5 pt-32">
    <h1 className="text-slate-800 font-bold md:text-4xl text-3xl p-5 uppercase">conatct section    </h1>
    <div className="flex flex-row items-center space-x-5 justify-center text-slate-800">
      <div className="w-24 h-1 bg-slate-800 rounded"></div>
      <i className="fa-solid fa-star"></i>
      <div className="w-24 h-1 bg-slate-800 rounded"></div>
    </div>

    <form className="container max-w-2xl mx-auto mt-10">
    <div className="relative">
    <input
        type="text"
        id="floating_filled"
        className="block mb-5 rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
        placeholder="userName"
    />
    <label
        for="floating_filled"
        className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-10 peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:hidden peer-input:not(:placeholder-shown):block peer-input:not(:placeholder-shown):text-2xl"
    >
        userName :
    </label>
</div>

<div className="relative">
    <input
        type="text"
        id="floating_filled"
        className="block mb-5 rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
        placeholder="userAge"
    />
    <label
        for="floating_filled"
        className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-10 peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:hidden peer-input:not(:placeholder-shown):block peer-input:not(:placeholder-shown):text-2xl"
    >
        userAge :
    </label>
</div>

<div className="relative">
    <input
        type="text"
        id="floating_filled"
        className="block mb-5 rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
        placeholder="userEmail"
    />
    <label
        for="floating_filled"
        className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-10 peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:hidden peer-input:not(:placeholder-shown):block peer-input:not(:placeholder-shown):text-2xl"
    >
        userEmail :
    </label>
</div>

<div className="relative">
    <input
        type="password"
        id="floating_filled"
        className="block mb-5 rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
        placeholder="userPassword"
    />
    <label
        for="floating_filled"
        className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-10 peer-focus:text-teal-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:hidden peer-input:not(:placeholder-shown):block peer-input:not(:placeholder-shown):text-2xl"
    >
        userPassword :
    </label>
</div>



<button className="text-left rounded-md flex items-start mb-5 bg-teal-500 px-3 py-2 mx-2 text-white">
            Send Message
          </button>
      </form>
      
    </div>
  );
}