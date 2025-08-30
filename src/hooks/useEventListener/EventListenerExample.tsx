import React, { useState } from 'react';
import { useEventListener } from './useEventListener';

export function EventListenerExample() {
  const [lastKey, setLastKey] = useState<string | null>(null);

  useEventListener('keydown', (event: KeyboardEvent) => {
    setLastKey(event.key);
  });

  return (
    <div>
      <p>
        Press any key on your keyboard.
        <br />
        <strong>Last key pressed:</strong> {lastKey ?? '(none)'}
      </p>
    </div>
  );
}
