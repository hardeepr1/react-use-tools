import { renderHook, act } from '@testing-library/react';
import { useSessionStorage } from '../src/hooks/useSessionStorage';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useSessionStorage', () => {
  const KEY = 'KEY';

  beforeEach(() => {
    sessionStorage.clear();
  });

  it('should return initial value if sessionStorage is empty', () => {
    const { result } = renderHook(() => useSessionStorage(KEY, 'initial'));
    const [value] = result.current;
    expect(value).toBe('initial');
  });

  it('should read existing value from sessionStorage if present', () => {
    sessionStorage.setItem(KEY, JSON.stringify('stored'));
    const { result } = renderHook(() => useSessionStorage(KEY, 'fallback'));
    const [value] = result.current;
    expect(value).toBe('stored');
  });

  it('should update sessionStorage when state is changed', () => {
    const { result } = renderHook(() => useSessionStorage(KEY, 'initial'));

    act(() => {
      const [, setValue] = result.current;
      setValue('updated');
    });

    const [value] = result.current;
    expect(value).toBe('updated');
    expect(sessionStorage.getItem(KEY)).toBe(JSON.stringify('updated'));
  });

  it('should handle objects correctly', () => {
    const obj = { name: 'John', age: 25 };
    const { result } = renderHook(() => useSessionStorage(KEY, obj));

    const [storedValue] = result.current;
    expect(storedValue).toEqual(obj);
  });

  it('should handle invalid JSON in sessionStorage gracefully', () => {
    sessionStorage.setItem(KEY, 'invalid-json');

    const { result } = renderHook(() => useSessionStorage(KEY, 'default'));
    const [value] = result.current;

    expect(value).toBe('default'); // fallback
  });
});
