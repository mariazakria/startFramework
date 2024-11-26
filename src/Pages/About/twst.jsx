import React from 'react';

export default function About() {
  return (
    <>
      <div className='bg-teal-500 mt-20'>
        <div className="text-center p-5 pt-32">
          <h1 className="text-white font-bold md:text-4xl text-5xl p-5 uppercase">
            About Component
          </h1>
          <div className="flex flex-row items-center space-x-5 justify-center text-white">
            <div className="w-24 h-1 bg-white rounded"></div>
            <i className="fa-solid fa-star"></i>
            <div className="w-24 h-1 bg-white rounded"></div>
          </div>
        </div>

        {/* About section */}
        <div className="container mx-auto px-5 pb-10">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 px-9 mb-5">
              <p className="text-lg text-white">
                Freelancer is a free bootstrap theme created by Route. The download
                includes the complete source files including HTML, CSS, and JavaScript
                as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-9 mb-5">
              <p className="text-lg text-white">
                Freelancer is a free bootstrap theme created by Route. The download
                includes the complete source files including HTML, CSS, and JavaScript
                as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';

import './Contact.module.css'; 

export default function Contact() {
  const handleInputChange = (e) => {
    const label = e.target.previousElementSibling;
    if (e.target.value) {
      label.classList.add('show');
    } else {
      label.classList.remove('show');
    }
  };

  return (
    <>
      <div className="p-6 pt-32">
        <h1 className="text-slate-800 font-bold md:text-4xl text-3xl p-5 text-center">
          CONTACT SECTION
        </h1>
        <div className="flex flex-row items-center space-x-5 justify-center text-slate-800 text-center">
          <div className="w-24 h-1 bg-slate-800 rounded text-center"></div>
          <i className="fa-solid fa-star text-center"></i>
          <div className="w-24 h-1 bg-slate-800 rounded text-center"></div>
        </div>

        <div className="md:w-7/12 mx-auto">
          <form action="" className="p-3 mx-auto flex flex-col text-start">
          <div class="relative">
          <input
            type="text"
            id="username"
            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="username"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Username
          </label>
        </div>


            <div className="form-group">
              <label htmlFor="userAge" className="form-label">
                userAge :
              </label>
              <input
                type="text"
                placeholder="userAge"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userEmail" className="form-label">
                userEmail :
              </label>
              <input
                type="text"
                placeholder="userEmail"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userPassword" className="form-label">
                userPassword :
              </label>
              <input
                type="text"
                placeholder="userPassword"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="bg-teal-500 px-3 py-2 mx-2 text-white rounded">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}