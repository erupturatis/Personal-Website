import React, { useState, useEffect } from 'react';

const Cookie = () => {
  const [cookies, setCookies] = useState(0);
  const [autoClickers, setAutoClickers] = useState([0, 0, 0]);

  const handleClick = () => {
    setCookies(cookies + 1);
  };

  const buyAutoClicker = (index: any, cost: any) => {
    if (cookies >= cost) {
      setCookies(cookies - cost);
      setAutoClickers((prevState) => {
        const updatedAutoClickers = [...prevState];
        updatedAutoClickers[index]++;
        return updatedAutoClickers;
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies(
        (prevState) =>
          prevState +
          autoClickers.reduce((acc, val, idx) => {
            return acc + val * generators[idx];
          }, 0)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickers]);

  const src = ['mouse.png', 'grandma.png', 'factory.png'];
  const names = ['Mouse', 'Grandma', 'Factory'];
  const costs = [10, 100, 1000];
  const generators = [1, 20, 300];

  return (
    <div className='w-full h-full flex flex-col items-center bg-[url("/bgcookie.png")] pt-10'>
      <div className='mb-4'>
        <img src='cookiebig.png' alt='Cookie' className='w-64 h-64 cursor-pointer rounded-full select-none' onClick={handleClick} />
      </div>
      <div className='text-2xl mb-4'>Cookies: {cookies}</div>
      <div className='grid grid-cols-3 gap-4'>
        {autoClickers.map((count, index) => {
          const cost = costs[index] * (count + 1);
          return (
            <div className='' key={index}>
              <img src={src[index]} className='h-20' alt='' />
              <button key={index} className='border border-gray-300 rounded-lg px-4 py-2' onClick={() => buyAutoClicker(index, cost)}>
                {names[index]}
                <br />
                Cost: {cost} <br />
                Count: {count}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cookie;
