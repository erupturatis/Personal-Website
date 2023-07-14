import React, { useEffect, useState } from 'react';
import ButtonMobile from './ButtonMobile';

type body = null | HTMLBodyElement;
const Mobile = () => {
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState<body>(null);

  useEffect(() => {
    setBody(document.querySelector('body'));
  }, []);

  function disableScroll() {
    if (body) body.style.overflow = 'hidden';
  }

  function enableScroll() {
    if (body) body.style.overflow = '';
  }
  return (
    <div>
      <div className='fixed w-full top-0 z-[10] '>
        <button
          onClick={() => {
            open ? enableScroll() : disableScroll();
            setOpen(!open);
          }}
          className='text-3xl z-[20]  absolute right-8 top-6 cursor-pointer xl:hidden '
        >
          <svg viewBox='0 0 25 25' width='25' height='25'>
            {open ? (
              <>
                <path d='M3 3 L21 21' stroke='white' strokeWidth='2' />
                <path d='M21 3 L3 21' stroke='white' strokeWidth='2' />
              </>
            ) : (
              <>
                <svg
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line
                    x1='0'
                    y1='5'
                    x2='20'
                    y2='5'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <line
                    x1='0'
                    y1='13'
                    x2='20'
                    y2='13'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <line
                    x1='0'
                    y1='21'
                    x2='20'
                    y2='21'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                </svg>
              </>
            )}
          </svg>
        </button>
        <div
          className={` bg-black pt-10  z-[0] xl:bg-transparent xl:flex xl:pb-0 pb-12 absolute h-screen xl:h-10  xl:static  left-0 w-full xl:w-auto xl:pl-0 transition-all duration-400 ease-in ${
            open ? '' : 'left-[100%]'
          }`}
        >
          <ButtonMobile
            text={'Home'}
            link={'home'}
            openNav={() => {
              setOpen(false);
              enableScroll();
            }}
          />

          <ButtonMobile
            text={'Contact'}
            link={'contact'}
            openNav={() => {
              setOpen(false);
              enableScroll();
            }}
          />
          <ButtonMobile
            text={'Projects'}
            link={'projects'}
            openNav={() => {
              setOpen(false);
              enableScroll();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
