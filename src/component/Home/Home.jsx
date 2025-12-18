import React from "react";
import avatar from "../../assets/imgs/avataaars.svg";

export default function Home() {
  return (
    <>
    <div className="bg-emerald-500 text-white py-24 text-center">
        <div className="container mx-auto px-4">
            <div className="flex justify-center mb-8">
                <img src={avatar} alt="Avatar" className="w-40 h-40 rounded-full border-4 border-white shadow-lg"/>
            </div>
            
            <h1 className="text-5xl font-bold mb-4 uppercase">Start Framework</h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-20 h-1 bg-white rounded-full"></div>
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <div className="w-20 h-1 bg-white rounded-full"></div>
            </div>

            <p className="text-xl font-light">Web Developer - Graphic Artist - User Interface Designer</p>
        </div>
    </div>
    
    
    
    
    
    
    </>
  );
}
