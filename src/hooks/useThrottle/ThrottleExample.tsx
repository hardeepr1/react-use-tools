import React from 'react';
import { useThrottle } from './useThrottle';

export function ThrottleExample() {
  const [count, setCount] = React.useState(0);
  const throttledCount = useThrottle(count, 1000);

  return (
    <div>
      <h3>Throttle Example</h3>
      <p>Count: {count}</p>
      <p>Throttled Count: {throttledCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
