import { useState } from "react";
import Poert1 from "../../assets/imgs/Poert1.png";
import Poert2 from "../../assets/imgs/Port2.png";
import Poert3 from "../../assets/imgs/Port3.png";

export default function Portfolio() {
  const [selectedImg, setSelectedImage] = useState(null);

  // دالة لفتح الصورة
  function PreviewImg(src) {
    setSelectedImage(src);
  }

  // دالة لإغلاق الصورة
  function closePreview() {
    setSelectedImage(null);
  }

  return (
    <>
      <section id="portfolio" className="py-20 bg-emerald-500 text-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center uppercase mb-4">Portfolio</h2>

          {/* شكل النجمة والخطوط */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-20 h-1 bg-white rounded-full"></div>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </div>

          {/* شبكة الصور */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[Poert1, Poert2, Poert3, Poert1, Poert2, Poert3].map((img, index) => (
              <div
                key={index}
                onClick={() => PreviewImg(img)}
                className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full transition duration-500 group-hover:scale-105"
                />

                {/* الطبقة الشفافة (Overlay) */}
                <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-90 flex items-center justify-center transition duration-300">
                   {/* أيقونة الـ Plus */}
                   <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* نافذة العرض (Modal) */}
      {selectedImg && (
        <div
          onClick={closePreview} // يغلق عند الضغط على الخلفية
          className="fixed inset-0 bg-blue-600 bg-opacity-30 flex items-center justify-center z-[9999] p-4"
        >
          <div 
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // يمنع الإغلاق عند الضغط على الصورة نفسها
          >
            <img
              src={selectedImg}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      )}
    </>
  );
}











/*import { useState } from 'react'; // تصحيح: إضافة useState
import Poert1 from "../../assets/imgs/Poert1.png";
import Poert2 from "../../assets/imgs/Port2.png";
import Poert3 from "../../assets/imgs/Port3.png";


export default function Portfolio() {
  const [selectedImg, setSelectedImage] = useState(null);

  function PreviewImg(src) {
    setSelectedImage(src);
  }

  function closePreview() {
    setSelectedImage(null);
  }

  return (
    <>
      <section id="portfolio" className="py-20 bg-emerald-500 text-white relative">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-secondary-dark uppercase mb-4">Portfolio</h2>
            
            <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="w-20 h-1 bg-white rounded-full"></div>
                <svg className="w-6 h-6 fill-current text-secondary-dark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <div className="w-20 h-1 bg-white rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
                    <img onClick={()=>PreviewImg(require({Poert1}))} className="w-full h-auto transform transition duration-500 group-hover:scale-105" 
                         src={Poert1} 
                         alt="Portfolio Image 1" />
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 flex items-center justify-center transition duration-300">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
                    <img onClick={()=>PreviewImg(require({Poert2}))}className="w-full h-auto transform transition duration-500 group-hover:scale-105" 
                         src={Poert2}
                         alt="Portfolio Image 2" />
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 flex items-center justify-center transition duration-300">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
                    <img onClick={()=>PreviewImg(require({Poert3}))}className="w-full h-auto transform transition duration-500 group-hover:scale-105" 
                         src={Poert3} 
                         alt="Portfolio Image 3" />
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 flex items-center justify-center transition duration-300">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
                    <img onClick={()=>PreviewImg(require({Poert1}))}className="w-full h-auto transform transition duration-500 group-hover:scale-105" 
                         src={Poert1}
                         alt="Portfolio Image 4" />
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 flex items-center justify-center transition duration-300">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
                    <img onClick={()=>PreviewImg(require({Poert2}))}className="w-full h-auto transform transition duration-500 group-hover:scale-105" 
                         src={Poert2}
                         alt="Portfolio Image 5" />
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 flex items-center justify-center transition duration-300">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg shadow-xl group cursor-pointer">
                    <img onClick={()=>PreviewImg(require({Poert3}))}className="w-full h-auto transform transition duration-500 group-hover:scale-105" 
                         src={Poert3}
                         alt="Portfolio Image 6" />
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 flex items-center justify-center transition duration-300">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
*/