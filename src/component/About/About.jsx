import React from "react";


export default function About() {
  return (
    <>
       <section id="about" className="bg-emerald-500 text-white py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center uppercase mb-4">About</h2>
    
    <div className="flex items-center justify-center space-x-4 mb-12">
      <div className="w-20 h-1 bg-white rounded-full"></div>
      <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <div className="w-20 h-1 bg-white rounded-full"></div>
    </div>

    <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto text-lg leading-relaxed">
      <div className="md:w-1/2">
        <p>Start Framework is a free, open-source framework created by Route group, built on Bootstrap 5 and designed primarily for personal or small business projects. The template design is ready to use and suitable for all purposes.</p>
      </div>
      <div className="md:w-1/2">
        <p>Whether you're looking for a template to showcase your work or create a personal page, this framework provides everything you need in one package. All elements are responsive and look great on any screen size.</p>
      </div>
    </div>
    
    <div className="text-center mt-12">
      <a href="#" className="inline-block border border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-primary transition duration-300">
        <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path 
            strokeLinecap="round"   /* تصحيح: camelCase */
            strokeLinejoin="round"  /* تصحيح: camelCase */
            strokeWidth="2"         /* تصحيح: camelCase */
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download Template
      </a>
    </div>
  </div>
</section>

    </>
  );
}
