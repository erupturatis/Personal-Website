import React, { useState, useEffect } from 'react';
import NavButton from './NavButton';

const Nav = () => {
  let [open, setOpen] = useState(false);
  let [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);

  return (
    <div className=" w-full absolute top-0 left-0 h-20 z-100 border-2 border-white ">
      <div className="md:flex items-center justify-center py-4 md:px-10 px-7 h-20">
        <div onClick={() => setOpen((open) => !open)} className="text-3xl z-100 border-2 border-white absolute right-8 top-6 cursor-pointer md:hidden ">
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
          className={` bg-black md:bg-transparent md:flex md:pb-0 pb-12 absolute h-screen md:h-10 top-20 md:static   z-20 left-0 w-full md:w-auto md:pl-0 transition-all duration-400 ease-in ${
            open ? '' : 'left-[100%]'
          }`}
        >
          <NavButton text={'Home'} link={'/home'} inverse={false} mobile={mobile} />
          <NavButton text={'Contact'} link={'/contact'} inverse={!mobile} mobile={mobile} />
          <NavButton text={'Projects'} link={'/projects'} inverse={false} mobile={mobile} />
        </div>
      </div>
      ceva{' '}
    </div>
  );
};

export default Nav;
