import React from 'react';
import { useFetch } from './useFetch';

type RandomUser = {
  results: Array<{
    name: { first: string; last: string };
    picture: { thumbnail: string };
  }>;
};

export function FetchExample() {
  const { data, loading, error } = useFetch<RandomUser>('https://randomuser.me/api/');

  return (
    <div>
      <h3>Random User Fetch Example</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {data && 'results' in data && Array.isArray(data.results) && data.results[0] && (
        <div>
          <p>
            <strong>Name:</strong> {data.results[0].name.first} {data.results[0].name.last}
          </p>
          <img
            src={data.results[0].picture.thumbnail}
            alt="User thumbnail"
            style={{ borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
}