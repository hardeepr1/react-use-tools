import React from 'react';
import { useWindowSize } from './useWindowSize';

export function WindowSizeExample() {
    const { width, height } = useWindowSize();

    return (
        <div>
            <p>
                Window size: <strong>{width} x {height}</strong>
            </p>
            <p>
                (Resizes when you change the window size)
            </p>
        </div>
    );
}
