import React from 'react';
import { useToggle } from './useToggle';

export function ToggleExample() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <p>
        The toggle is <strong>{isOn ? 'ON' : 'OFF'}</strong>
      </p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
