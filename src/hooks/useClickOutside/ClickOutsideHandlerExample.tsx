import React, { useState } from 'react';
import { useClickOutside } from './useClickOutside';

export function ClickOutsideExample() {
  const [open, setOpen] = useState(true);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));

  return (
    <div>
      {open && (
        <div ref={ref} style={{ border: '1px solid #ccc', padding: 20 }}>
          Click outside this box to close it.
        </div>
      )}
      {!open && <button onClick={() => setOpen(true)}>Open Box</button>}
    </div>
  );
}