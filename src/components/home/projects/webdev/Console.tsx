import { WebDevContext } from './WebContext';
import React, { useState, useCallback, useRef, useContext, useEffect } from 'react';

const Console = () => {
  const [inputValue, setInputValue] = useState('');
  const [consoleHistory, setConsoleHistory] = useState<string[]>([]);
  const { content, setContentCb } = useContext(WebDevContext);
  const [arrowsUp, setArrowsUp] = useState(0);
  const consoleHistoryRef = useRef(consoleHistory);

  const arrowsUpRef = useRef(1);

  const inputRef = useRef(null);
  const handleCommands = {
    clear: () => {
      setConsoleHistory([]);
    },
    help: () => {
      setConsoleHistory(['use the following commands:', 'clear', 'help', 'cookie', 'news', 'exit']);
    },
    exit: () => {
      setContentCb('default');
      setConsoleHistory([...consoleHistory, 'exit']);
    },
  };
  const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();
      if (!inputValue) return;
      const command = inputValue.trim();
      if (command in handleCommands) {
        // @ts-ignore
        handleCommands[command]();
        setInputValue('');
        return;
      }
      setContentCb(command);
      setConsoleHistory([...consoleHistory, command]);
      setInputValue('');
    },
    [inputValue, consoleHistory]
  );

  useEffect(() => {
    consoleHistoryRef.current = consoleHistory;
  }, [consoleHistory]);
  useEffect(() => {
    arrowsUpRef.current = arrowsUp;
  }, [arrowsUp]);

  function handleArrowUp(event: any) {
    if (consoleHistoryRef.current.length === 0) return;
    console.log('pressed', event.keyCode);
    if (event.keyCode === 38) {
      if (arrowsUpRef.current === consoleHistoryRef.current.length) return;
      arrowsUpRef.current = arrowsUpRef.current + 1;
      let current = arrowsUpRef.current;
      setInputValue(consoleHistoryRef.current[consoleHistoryRef.current.length - current]);
    } else if (event.keyCode === 40) {
      if (arrowsUpRef.current === 1) return;
      arrowsUpRef.current = arrowsUpRef.current - 1;
      let current = arrowsUpRef.current;
      setInputValue(consoleHistoryRef.current[consoleHistoryRef.current.length - current]);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleArrowUp);
    return () => {
      document.removeEventListener('keydown', handleArrowUp);
    };
  }, []);

  return (
    <div className={` w-full h-full flex flex-col bg-black text-lime-400 rounded-2xl shadow-lg shadow-lime-400 `}>
      <div className=' overflow-y-auto p-4 grow  scrollbar-none'>
        {consoleHistory.map((cmd, index) => (
          <p key={index} className='console-command'>
            $goodUser/{cmd}
          </p>
        ))}
        <form onSubmit={handleSubmit}>
          <p className='console-input'>
            $goodUser/
            <input
              ref={inputRef}
              type='text'
              value={inputValue}
              className=' border-none outline-none bg-transparent text-lime-500'
              onChange={(e) => {
                setInputValue(e.target.value);
                setArrowsUp(0);
              }}
              autoComplete='off'
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Console;
