import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <nav className="">
      <div className=" z-10">
        <div className="flex justify-end md:justify-center align-middle">
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                Projects
              </a>
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>

          <div className="m-4 flex md:hidden">
            <button
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-white "
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Heroicon name: outline/menu */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={isMobileMenuOpen ? 'hidden h-6 w-6' : 'block h-6 w-6'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open. */}
              {/* Heroicon name: outline/x */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={isMobileMenuOpen ? 'block h-6 w-6' : 'hidden h-6 w-6'}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden absolute inset-0 z-50 bg-blue-500`}>
        <div className="flex flex-col items-center justify-center h-full">
          <a href="#responsive-header" className="text-white font-bold text-2xl mb-6">
            My Site
          </a>
          <a href="#responsive-header" className="block mt-4 text-white text-xl hover:text-blue-500">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 text-white text-xl hover:text-blue-500">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 text-white text-xl hover:text-blue-500">
            Blog
          </a>
          <a href="#" className="inline-block mt-6 px-6 py-3 rounded-full bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
