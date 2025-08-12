import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../src/hooks/useFetch';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('useFetch', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch data successfully', async () => {
    //Arrange
    const fakeData = { message: 'hello world' };
    const fakeResponse = {
      ok: true,
      json: async () => fakeData,
    };
    vi.spyOn(global, 'fetch').mockResolvedValue(fakeResponse as any);

    //Act
    const { result } = renderHook(() =>
      useFetch('https://api.example.com/data')
    );

    //Assert
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(fakeData);
    expect(result.current.error).toBeNull();
  });

  it('should handle error when response is not ok', async () => {
    //Arrange
    const fakeResponse = {
      ok: false,
      status: 404,
      json: async () => ({ error: 'Not Found' }),
    };

    vi.spyOn(global, 'fetch').mockResolvedValue(fakeResponse as any);

    //Act
    const { result } = renderHook(() =>
      useFetch('https://api.example.com/data')
    );

    //Assert
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(new Error('Error: 404'));
  });

  it('should handle fetch throwing an error', async () => {
    //Arrange
    const errorMessage = 'Network Error';
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() =>
      useFetch('https://api.example.com/data')
    );

    //Act
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    //Assert
    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(new Error(errorMessage));
  });
});
