
import { useState, useEffect, useRef } from 'react';

export const useLazyLoad = (rootMargin = '100px') => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Una vez visible, ya no necesitamos observar
        }
      },
      { rootMargin } // Carga 100px antes de que sea visible
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isVisible };
};