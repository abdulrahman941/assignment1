import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-white">
    <div className="bg-gray-900 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
            {/* الموقع */}
            <div>
                <h4 className="text-xl font-bold mb-4 uppercase">Location</h4>
                <p className="text-lg">New Cairo, Egypt</p>
                <p className="text-lg">2215 John Daniel Drive</p>
            </div>

            {/* أيقونات التواصل الاجتماعي */}
            <div>
                <h4 className="text-xl font-bold mb-4 uppercase">Around the Web</h4>
                <div className="flex justify-center space-x-4">
                    {/* تم تغيير link إلى a لأنها روابط خارجية أو تواصل اجتماعي */}
                    <a href="https://instagram.com" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-primary transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.851.07 3.252.148 4.67 1.488 4.846 4.846.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.851c-.176 3.358-1.594 4.698-4.846 4.846-1.267.058-1.647.07-4.851.07s-3.584-.012-4.851-.07c-3.252-.148-4.67-1.488-4.846-4.846-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.851c.176-3.358 1.594-4.698 4.846-4.846 1.267-.058 1.647-.07 4.851-.07zm0-2.163c-3.268 0-3.692.012-4.969.071-4.736.225-7.04 2.503-7.266 7.266-.059 1.277-.071 1.7-.071 4.969s.012 3.692.071 4.969c.225 4.736 2.503 7.04 7.266 7.266 1.277.059 1.7.071 4.969.071s3.692-.012 4.969-.071c4.736-.225 7.04-2.503 7.266-7.266.059-1.277.071-1.7.071-4.969s-.012-3.692-.071-4.969c-.225-4.736-2.503-7.04-7.266-7.266-1.277-.059-1.7-.071-4.969-.071zM12 9a3 3 0 100 6 3 3 0 000-6zm0-2a5 5 0 110 10 5 5 0 010-10z"/></svg>
                    </a>
                    <a href="https://linkedin.com" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-primary transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.366-4-3.218-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://facebook.com" className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-primary transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a>
                </div>
            </div>

            {/* نبذة */}
            <div>
                <h4 className="text-xl font-bold mb-4 uppercase">About Framework</h4>
                <p className="text-lg">This is a free to use, open-source framework styled with Tailwind CSS.</p>
            </div>
        </div>
    </div>

    {/* حقوق النشر */}
    <div className="bg-gray-500 py-6 text-center">
        <p className="text-sm">Copyright &copy; Your Website 2024</p>
    </div>
</footer>
    </>
  );
}
