import React from 'react';
import { useSessionStorage } from './useSessionStorage';

export function SessionStorageExample() {
  const [name, setName] = useSessionStorage('name', '');

  return (
    <div>
      <label>
        Name:&nbsp;
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </label>
      <p>
        Value in sessionStorage: <strong>{name}</strong>
      </p>
    </div>
  );
}