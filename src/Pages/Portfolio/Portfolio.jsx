import React, { useState } from 'react';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="text-center p-5 pt-32">
        <h1 className="text-slate-800 font-bold md:text-4xl text-2xl mb-4">PORTFOLIO COMPONENT</h1>
        <div className="flex flex-row items-center space-x-5 justify-center text-slate-800">
          <div className="w-24 h-1 bg-slate-800 rounded"></div>
          <i className="fa-solid fa-star"></i>
          <div className="w-24 h-1 bg-slate-800 rounded"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 p-5">

          <div
            className="w-full group relative sm:w-[48%] md:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => openModal('/assets/port1.png')}
          >
            <img src="/assets/port1.png" alt="Portfolio Item 1" className="w-full h-auto" />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-teal-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>

          <div
            className="w-full group relative sm:w-[48%] md:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => openModal('/assets/port2.png')}
          >
            <img src="/assets/port2.png" alt="Portfolio Item 2" className="w-full h-auto" />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-teal-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>

          <div
            className="w-full group relative sm:w-[48%] md:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => openModal('/assets/port3.png')}
          >
            <img src="/assets/port3.png" alt="Portfolio Item 3" className="w-full h-auto" />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-teal-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>

          <div
            className="w-full group relative sm:w-[48%] md:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => openModal('/assets/port1.png')}
          >
            <img src="/assets/port1.png" alt="Portfolio Item 4" className="w-full h-auto" />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-teal-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>

          <div
            className="w-full group relative sm:w-[48%] md:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => openModal('/assets/port2.png')}
          >
            <img src="/assets/port2.png" alt="Portfolio Item 5" className="w-full h-auto" />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-teal-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>

          <div
            className="w-full group relative sm:w-[48%] md:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => openModal('/assets/port3.png')}
          >
            <img src="/assets/port3.png" alt="Portfolio Item 6" className="w-full h-auto" />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-teal-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>

        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed z-50 inset-0 w-full h-full bg-slate-500 bg-opacity-25 flex justify-center items-center"
          onClick={closeModal}
        >
          <img alt="Portfolio Modal" src={modalImage} className="md:w-8/12 w-full object-cover rounded-lg shadow-lg" />
        </div>
      )}
    </>
  );
}
