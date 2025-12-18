import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20 bg-emerald-500 text-white relative">
    <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary-dark uppercase mb-4">Contact Me</h2>
        
        <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-20 h-1 bg-white rounded-full"></div>
            <svg className="w-6 h-6 fill-current text-secondary-dark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <div className="w-20 h-1 bg-white rounded-full"></div>
        </div>

        <div className="max-w-lg mx-auto">
            <form className="space-y-6">
                <div>
                    <input type="text" id="name" placeholder="Name" required 
                           className="w-full p-4 border-b-2 border-gray-300 focus:border-primary focus:ring-0 outline-none transition duration-300" />
                </div>
                <div>
                    <input type="email" id="email" placeholder="Email Address" required 
                           className="w-full p-4 border-b-2 border-gray-300 focus:border-primary focus:ring-0 outline-none transition duration-300" />
                </div>
                <div>
                    <input type="tel" id="phone" placeholder="Phone Number" required 
                           className="w-full p-4 border-b-2 border-gray-300 focus:border-primary focus:ring-0 outline-none transition duration-300" />
                </div>
                <div>
                    <textarea id="message" rows="5" placeholder="Message" required 
                              className="w-full p-4 border-b-2 border-gray-300 focus:border-primary focus:ring-0 outline-none transition duration-300"></textarea>
                </div>
                {/* تم تصحيح class إلى className هنا */}
                <div className="text-left"> 
                    <button type="submit" className="bg-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>
    </>
  );
}