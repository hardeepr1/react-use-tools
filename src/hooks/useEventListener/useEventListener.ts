import { useEffect, useRef } from 'react';

type EventMap = HTMLElementEventMap & DocumentEventMap & WindowEventMap;

type EventTargetType = HTMLElement | Document | Window | null;

export function useEventListener<
  K extends keyof EventMap,
  T extends EventTargetType = Window
>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  target?: T,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef<(event: EventMap[K]) => void>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement: EventTargetType = target ?? window;
    if (!targetElement?.addEventListener) return;

    const eventListener = (event: Event) => {
      savedHandler.current(event as EventMap[K]);
    };

    targetElement.addEventListener(eventName, eventListener, options);

    // Cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, target, options]);
}
