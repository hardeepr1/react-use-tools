import { useEffect, useRef } from 'react';

/**
 * Custom hook to detect clicks outside a specified element.
 * @param handler - The function to call when a click outside is detected.
 * @returns A ref to attach to the element to monitor for outside clicks.
 */
export function useClickOutside<T extends HTMLElement>(
  handler: (event: MouseEvent | TouchEvent) => void
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
}