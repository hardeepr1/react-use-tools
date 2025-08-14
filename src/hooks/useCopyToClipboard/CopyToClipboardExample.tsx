import React, { useState } from 'react';
import { useCopyToClipboard } from './useCopyToClipboard';

export function CopyToClipboardExample() {
  const [text, setText] = useState('Copy this text!');
  const { isCopied, copy, error } = useCopyToClipboard();

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something to copy"
        style={{ marginRight: 8 }}
      />
      <button onClick={() => copy(text)}>
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      {error && <span style={{ color: 'red', marginLeft: 8 }}>{error}</span>}
    </div>
  );
}
