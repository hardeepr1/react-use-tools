import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export function LocalStorageExample() {
  const [name, setName] = useLocalStorage('name', '');

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
        Value in localStorage: <strong>{name}</strong>
      </p>
    </div>
  );
}