import React, { useContext } from 'react';
import { WebDevContext } from './WebContext';
import Cookie from './Cookie';
import News from './News';

const Screen = () => {
  const { content, setContentCb } = useContext(WebDevContext);

  const renderContent = () => {
    switch (content) {
      case 'cookie':
        return <Cookie />;
      case 'news':
        return <News />;
      default:
        return (
          <div>
            <div className=' flex flex-col'>
              <button
                className='m-4 w-12 h-12 rounded-md overflow-hidden'
                onClick={() => setContentCb('news')}
              >
                <img src='news.png' alt='' />
              </button>
              <button
                className='m-4 w-12 h-12 rounded-md overflow-hidden'
                onClick={() => setContentCb('cookie')}
              >
                <img src='cookie.png' alt='' />
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='flex flex-col h-full w-full'>
      <div className='flex-grow'>{renderContent()}</div>
      <div className=' bg-blue-700 text-white  h-8 flex justify-start items-center overflow-hidden'>
        <div className='h-8 w-32 bg-green-600 text-white -ml-4 font-semibold rounded-sm flex items-center justify-start pl-6 gap-4'>
          <img src='winxp.png' className='h-3/4' alt='' />
          <div className='select-none'>Start</div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
