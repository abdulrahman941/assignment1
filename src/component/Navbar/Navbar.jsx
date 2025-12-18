import React from "react";
import { Link, NavLink } from 'react-router-dom'; // تأكد من استيراد هذه المكونات

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
            <Link href="#" className="text-2xl font-bold tracking-wide uppercase">Start Framework</Link>
            <div className="hidden md:flex space-x-6">
                <NavLink to="/home" className="hover:text-primary transition duration-300">Home</NavLink>
                <NavLink to="/about" className="hover:text-primary transition duration-300">About</NavLink>
                <NavLink to="/portfolio" className="hover:text-primary transition duration-300">Portfolio</NavLink>
                <NavLink to="/contact" className="hover:text-primary transition duration-300">Contact</NavLink>
                
            </div>
            <button className="md:hidden text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
    </nav>
  );
}
