import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../src/hooks/useToggle';
import { describe, it, expect } from 'vitest';

describe('useToggle', () => {
  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  it('should initialize with provided initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  it('should toggle the state', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1](); // toggle
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1](); // toggle again
    });
    expect(result.current[0]).toBe(false);
  });

  it('should set the state explicitly', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[2](true);
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[2](false);
    });
    expect(result.current[0]).toBe(false);
  });
});
