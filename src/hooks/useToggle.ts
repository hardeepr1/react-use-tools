import { useCallback, useState } from 'react';

type UseToggleReturn = [
  boolean, // current state value
  () => void, // toggle function
  (value: boolean) => void // set function
];

/**
 * Custom hook to manage boolean state support toggle and set functionality
 * @param initialValue - {boolean} - Initial value of state
 * @returns { UseToggleReturn } - Array with state, toggle function and set function
 * @example
 * const [isOpen, toggleIsOpen, setIsOpen] = useToggle(false);
 *
 * // Toggle value
 * toggleIsOpen();
 *
 * // Set value directly
 * setIsOpen(true);
 */
export function useToggle(initialValue = false): UseToggleReturn {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setState((prev) => !prev), []);
  const set = useCallback((value: boolean) => setState(value), []);

  return [state, toggle, set];
}
