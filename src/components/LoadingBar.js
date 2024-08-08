import React, { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarComponent = ({ isLoading }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isLoading) {
      ref.current?.continuousStart();
    } else {
      ref.current?.complete();
    }
  }, [isLoading]);

  return (
    <LoadingBar
      color="#f11946"
      ref={ref}
      waitingTime={200} // Optional: Delay before showing the loading bar
    />
  );
};

export default LoadingBarComponent;
