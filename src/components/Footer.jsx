import React from 'react';


function Footer() {
  return (
    <footer className="bg-blue-600 text-sm  mt-[2rem] tracking-wider flex flex-col justify-center items-center text-white rounded-t-[1rem] pt-[2rem] h-[16rem]">
    
      <div className="container mx-auto px-4">
     
        <div className="flex  md:flex-row justify-between">
          <div className="mb-4 ml-7 md:mb-0">
            <img src="/logo.svg" alt="Hirings Logo" className="h-8" />
            <p className="mt-2">Get more sales and maximize the conversion rates.</p>
            <p>Discover the most productive channels.</p>
            <div className="mt-4">
              <a href="#" className="text-gray-400 hover:text-white mr-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-2">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="w-[60%] flex justify-around">
          <div className="md:flex-col md:space-y-4">
            <h3 className="text-white font-bold mb-2">About</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div className="md:flex-col md:space-y-4">
            <h3 className="text-white font-bold mb-2">Company</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:text-white">How we work</a></li>
              <li><a href="#" className="hover:text-white">Press Room</a></li>
              <li><a href="#" className="hover:text-white">Jobs</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>
          <div className="md:flex-col md:space-y-4">
            <h3 className="text-white font-bold mb-2">Legal</h3>
            <ul className="list-none">
              <li><a href="#" className="hover:text-white">Terms of use</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Security Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Settings</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
     
      <div className="text-center border-t-2 pt-2 border-white mt-6">
        <p>&copy; 2023 Hirings. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;