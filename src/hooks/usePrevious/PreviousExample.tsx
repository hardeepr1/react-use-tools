import React, { useState } from 'react';
import { usePrevious } from './usePrevious';

export function PreviousExample() {
  const [value, setValue] = useState('');
  const prevValue = usePrevious(value);

  return (
    <div>
      <label>
        Type something:&nbsp;
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter text"
        />
      </label>
      <p>
        <strong>Current value:</strong> {value}
      </p>
      <p>
        <strong>Previous value:</strong> {prevValue ?? '(none)'}
      </p>
    </div>
  );
}