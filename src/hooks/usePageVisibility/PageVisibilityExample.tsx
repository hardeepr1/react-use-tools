import React, { useEffect, useRef, useState } from 'react';
import { usePageVisibility } from './usePageVisibility';

export function PageVisibilityExample() {
  const isVisible = usePageVisibility();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    if (!isVisible && soundEnabled) {
      audioRef.current?.play();
    }
  }, [isVisible, soundEnabled]);

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/buttons/sounds/beep-07.mp3"
        preload="auto"
      />
      {!soundEnabled && (
        <button onClick={() => setSoundEnabled(true)}>
          Enable Sound
        </button>
      )}
      <p>
        Page is currently:{' '}
        <strong style={{ color: isVisible ? 'green' : 'red' }}>
          {isVisible ? 'Visible' : 'Hidden'}
        </strong>
      </p>
      <p>
        Switch to another tab or minimize the window to hear a sound and see the status change.
      </p>
    </div>
  );
}