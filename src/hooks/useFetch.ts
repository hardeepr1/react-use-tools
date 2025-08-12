import { useState, useEffect } from 'react';

export interface FetchState<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

/**
 * A custom hook to fetch data from a given URL.
 *
 * @param url - The URL to fetch data from.
 * @param options - Optional fetch options.
 * @returns An object containing { data, error, loading }.
 *
 */
export function useFetch<T = unknown>(url: string, options?: RequestInit): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!url) {
      return;
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setError(null);

    fetch(url, { ...options, signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err);
        setLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [url, JSON.stringify(options)]);

  return { data, error, loading };
}