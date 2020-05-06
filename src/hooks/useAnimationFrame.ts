import React from 'react';

export const useAnimationFrame = (run: boolean, callback: (time: DOMHighResTimeStamp) => void) => {
  const requestRef = React.useRef<number>();

  const tick = (time: DOMHighResTimeStamp) => {
    callback(time);
    requestRef.current = window.requestAnimationFrame(tick);
  };

  const start = () => {
    if (!requestRef.current) {
      requestRef.current = window.requestAnimationFrame(tick);
    }
  };

  const stop = () => {
    if (requestRef.current) {
      window.cancelAnimationFrame(requestRef.current);
      requestRef.current = undefined;
    }
  };

  React.useEffect(() => {
    if (run) start();
    else stop();

    return () => stop();
  }, [run]);
};
