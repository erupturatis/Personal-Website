import React, { createContext, useState } from 'react';

export const WebDevContext = createContext({
  content: 'default',
  setContentCb: (content: string) => {},
});

type Props = {
  children: React.ReactNode;
};

export const WebDevProvider = ({ children }: Props) => {
  const [content, setContent] = useState('default');

  return <WebDevContext.Provider value={{ content, setContentCb: setContent }}>{children}</WebDevContext.Provider>;
};
