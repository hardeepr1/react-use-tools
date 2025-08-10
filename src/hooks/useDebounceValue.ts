import { useEffect, useState } from 'react';

/**
 * A custom react hook that debounces a value. There will be delay in setting the value.
 * We can based our API call on debounce values
 * @param value - value to be set, defaults to 500ms
 * @param delay - delay in milliseconds
 * @returns debounced value
 * @example
 * const [search, setSearch] = useState('');
 * const [debouncedValue] = useDebounceValue(search);
 */
export function useDebounceValue<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
