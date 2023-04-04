import React from 'react';

const Bottom = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className=' text-3xl text-white text-center font-semibold '>And much more...</div>
      <div className=' text-lg text-white text-center font-light mt-4 opacity-60'>Feel free to contact me</div>
      <div className='h-64 w-64 mt-10'>
        <img src='' alt='' className='w-full bg-white h-full rounded-full' />
      </div>
      <div className='flex  gap-16 mt-16'>
        <button>
          <img src='github.png' className='w-10 h-10 shadow-standard' alt='' />
        </button>
        <button>
          <img src='gmail.png' className='w-10 h-10 shadow-standard' alt='' />
        </button>
        <button>
          <img src='linkedin.png' className='w-10 h-10 shadow-standard' alt='' />
        </button>
      </div>

      <div className='h-64'></div>
    </div>
  );
};

export default Bottom;
