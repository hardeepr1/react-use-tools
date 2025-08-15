import { useState, useEffect } from 'react';

/**
 * Custom hook to use browser session storage to store and get value
 * @param key - string - key for storage object
 * @param initialValue - {T} - initial value
 * @returns [value, updaterFunction] - Return array of two objects.
 *
 * @example
 *  const [name, setName] = useSessionStorage('name', 'John');
 */
export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [value: T, (newValue: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading sessionStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting sessionStorage key “${key}”:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
