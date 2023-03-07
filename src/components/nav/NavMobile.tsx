import React from 'react';
import { useState } from 'react';
import NavButton from './NavButton';

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="fixed w-full top-0 z-[10] ">
        <div onClick={() => setOpen((open) => !open)} className="text-3xl z-[10]  absolute right-8 top-6 cursor-pointer md:hidden ">
          <svg viewBox="0 0 25 25" width="25" height="25">
            {open ? (
              <>
                <path d="M3 3 L21 21" stroke="white" strokeWidth="2" />
                <path d="M21 3 L3 21" stroke="white" strokeWidth="2" />
              </>
            ) : (
              <>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="5" x2="20" y2="5" stroke="white" strokeWidth="1.5" />
                  <line x1="0" y1="13" x2="20" y2="13" stroke="white" strokeWidth="1.5" />
                  <line x1="0" y1="21" x2="20" y2="21" stroke="white" strokeWidth="1.5" />
                </svg>
              </>
            )}
          </svg>
        </div>
        <div
          className={` bg-black  z-[0] md:bg-transparent md:flex md:pb-0 pb-12 absolute h-screen md:h-10  md:static  left-0 w-full md:w-auto md:pl-0 transition-all duration-400 ease-in ${
            open ? '' : 'left-[100%]'
          }`}
        >
          <NavButton text={'Home'} link={'/home'} inverse={false} mobile={true} />
          <NavButton text={'Contact'} link={'/contact'} inverse={false} mobile={true} />
          <NavButton text={'Projects'} link={'/projects'} inverse={false} mobile={true} />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
