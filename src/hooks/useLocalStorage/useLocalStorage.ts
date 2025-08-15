import { useState, useEffect } from 'react';

/**
 * Custom hook to use browser Local storage to store and get value
 * @param key - string - key for storage object
 * @param initialValue - {T} - initial value
 * @returns [value, updaterFunction] - Return array of two objects.
 * 
 * @example
 *  const [name, setName] = useLocalStorage('name', 'John');
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [value: T, (newValue: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error getting localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
