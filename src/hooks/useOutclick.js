import { useEffect, useRef } from 'react';

export const useOutclick = (callback) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const handleOutclick = (e) => {
      if (!ref.current?.contains(e.target)) {
        if (callback) callback();
      }
    };

    window.addEventListener('mousedown', handleOutclick);
    window.addEventListener('scroll', handleOutclick);
    
    return () => {
      window.removeEventListener('mousedown', handleOutclick);
      window.removeEventListener('scroll', handleOutclick);
    };
  }, []);

  return ref;
};