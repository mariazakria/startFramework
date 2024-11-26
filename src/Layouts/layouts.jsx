import React from 'react';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function Layout() {
  return (
    <>
    <Navbar />
      <div className="main-content">
        <Outlet /> 
      </div>
      <Footer /> 
    </>
  );
}
