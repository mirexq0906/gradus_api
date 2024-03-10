import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
  function handleResize() {
    setWindowDimensions(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);

  return windowDimensions;
}