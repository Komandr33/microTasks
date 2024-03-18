import {useEffect, useState} from 'react';

/**
 * Этот кастомный хук меряет ширину экрана, по умолчанию ставь - 1000px
 */

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0)
  useEffect(() => {

    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

  }, [])
  return windowSize;
}