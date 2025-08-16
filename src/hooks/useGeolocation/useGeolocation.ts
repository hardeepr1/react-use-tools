import { useState, useEffect } from 'react';

export interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
}

export interface GeolocationState {
  coordinates: GeolocationCoordinates | null;
  error: string | null;
  loading: boolean;
}

/**
 *
 * A custom React hook to track the user's current geolocation using the Geolocation API.
 *
 * @returns {GeolocationState} - An object containing:
 *  - coordinates: { latitude, longitude, accuracy, ... } or null if not available.
 *  - error: error message if any occurred.
 *  - loading: boolean indicating whether the geolocation data is being fetched.
 *
 * Usage:
 * const { coordinates, error, loading } = useGeolocation();
 */
export function useGeolocation(): GeolocationState {
  const [state, setState] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        coordinates: null,
        error: 'Geolocation is not supported by your browser.',
        loading: false,
      });
      return;
    }

    const successHandler = (position: GeolocationPosition) => {
      const {
        latitude,
        longitude,
        accuracy,
        altitude,
        altitudeAccuracy,
        heading,
        speed,
      } = position.coords;
      setState({
        coordinates: {
          latitude,
          longitude,
          accuracy,
          altitude,
          altitudeAccuracy,
          heading,
          speed,
        },
        error: null,
        loading: false,
      });
    };

    const errorHandler = (error: GeolocationPositionError) => {
      setState({
        coordinates: null,
        error: error.message,
        loading: false,
      });
    };

    const watcherId = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler
    );

    return () => {
      navigator.geolocation.clearWatch(watcherId);
    };
  }, []);

  return state;
}
