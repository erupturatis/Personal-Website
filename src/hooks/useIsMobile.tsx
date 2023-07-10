import { useEffect, useState } from 'react';

// detects if the screen is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [detected, setDetected] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1280px)');
    setDetected(true);
    setIsMobile(mediaQuery.matches);
  }, []);
  return [detected, isMobile] as [boolean, boolean];
};

export default useIsMobile;
