import { renderHook, act } from '@testing-library/react';
import { useDebounceValue } from '../src/hooks/useDebounceValue';
import { describe, expect, it, vi } from 'vitest';

vi.useFakeTimers(); // simulate timers

describe('useDebounce', () => {
  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounceValue('a', 300));
    expect(result.current).toBe('a');
  });

  it('should update the value after delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounceValue(value, delay), {
      initialProps: { value: 'a', delay: 300 },
    });

    rerender({ value: 'b', delay: 300 });

    expect(result.current).toBe('a'); // still old

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current).toBe('b');
  });
});
