import React from 'react';
import { useOnlineStatus } from './useOnlineStatus';

export function OnlineStatusExample() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>
        Network status:{" "}
        <strong style={{ color: isOnline ? 'green' : 'red' }}>
          {isOnline ? 'Online' : 'Offline'}
        </strong>
      </p>
    </div>
  );
}