import React, { useState, useEffect, useRef } from 'react';

interface Options extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

/**
 * A custom React hook that detects when an element is in the viewport.
 * @param options - Configuration options for the IntersectionObserver.
 * @returns A ref to attach to the element and a boolean indicating if it's in view.
 */
export const useInView = <T extends HTMLElement>(
  options: Options = {}
): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the element is visible
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  // We only want to re-run the effect if the options change, so we memoize them in the dependency array.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.triggerOnce, options.threshold, options.root, options.rootMargin]);

  return [ref, isInView];
};
