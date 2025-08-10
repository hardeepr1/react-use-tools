import { useEffect, useRef, useState } from 'react';

/**
 * Throttle a value by a delay
 * @param value The value to throttle
 * @param delay The delay in milliseconds
 * @returns The throttled value
 */
export function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();

    // If enough time has passed since the last execution, update the throttled value
    if (now - lastExecuted.current >= delay) {
      setThrottledValue(value);
      lastExecuted.current = now;
    } else {
      const remainingTime = delay - (now - lastExecuted.current);
      const timeout = setTimeout(() => {
        setThrottledValue(value);
        // Update last executed time after the timeout
        lastExecuted.current = Date.now();
      }, remainingTime);

      return () => clearTimeout(timeout);
    }
  }, [value, delay]);

  return throttledValue;
}
