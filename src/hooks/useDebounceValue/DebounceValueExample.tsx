import React, { useState } from 'react';
import { useDebounceValue } from './useDebounceValue';

export function DebounceValueExample() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounceValue(search, 1000); // 1 second debounce

  return (
    <div>
      <label>
        Search:&nbsp;
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Type to search..."
        />
      </label>
      <p>
        <strong>Immediate value:</strong> {search}
      </p>
      <p>
        <strong>Debounced value:</strong> {debouncedSearch}
      </p>
      <p>
        (Debounced value updates 1 second after you stop typing)
      </p>
    </div>
  );
}