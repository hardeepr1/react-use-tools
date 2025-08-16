import React from 'react';
import { useGeolocation } from './useGeolocation';

export function GeolocationExample() {
  const { coordinates, error, loading } = useGeolocation();

  return (
    <div>
      <h3>Geolocation Example</h3>
      {loading && <p>Getting your location...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {coordinates && (
        <div>
          <p>
            <strong>Latitude:</strong> {coordinates.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {coordinates.longitude}
          </p>
          <p>
            <strong>Accuracy:</strong> {coordinates.accuracy} meters
          </p>
        </div>
      )}
    </div>
  );
}