import React, { useState } from 'react';

const Nav = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: '', link: '/' },
    { name: 'ABOUT', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          Designer
        </div>

        <div onClick={() => setOpen((open) => !open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          click
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute h-screen md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? '' : 'left-[490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <button>Get Started</button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
