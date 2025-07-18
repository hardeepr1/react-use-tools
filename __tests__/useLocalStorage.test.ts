import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../src/hooks/useLocalStorage';
import { describe, expect, it, beforeEach } from 'vitest';

describe('useLocalStorage', () => {
  const KEY = 'USER_PREFERENCES';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should return initial value when nothing is in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 'default'));
    const [value] = result.current;
    expect(value).toBe('default');
  });

  it('should read existing localStorage value if present', () => {
    localStorage.setItem(KEY, JSON.stringify('stored'));
    const { result } = renderHook(() => useLocalStorage(KEY, 'default'));
    const [value] = result.current;
    expect(value).toBe('stored');
  });

  it('should update localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 'initial'));

    act(() => {
      const [, setValue] = result.current;
      setValue('updated');
    });

    const [updatedValue] = result.current;
    expect(updatedValue).toBe('updated');
    expect(localStorage.getItem(KEY)).toBe(JSON.stringify('updated'));
  });

  it('should support complex objects', () => {
    const user = { name: 'John', age: 25 };
    const { result } = renderHook(() => useLocalStorage(KEY, user));
    const [storedUser] = result.current;
    expect(storedUser).toEqual(user);
  });
});
