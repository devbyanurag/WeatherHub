import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  // Check if window is defined (client-side) or set an initial value for server-side rendering
  const isClient = typeof window === 'object';

  const [screenWidth, setScreenWidth] = useState(
    isClient ? window.innerWidth : /* Set an initial value for server-side rendering */ 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);

  return screenWidth;
};

export default useScreenWidth;
