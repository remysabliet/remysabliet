import React, { useState, useEffect } from "react"

import video from 'assets/video/codingBackgroundMovie.mp4'

function LoadingMessage() {
  return (
    <div className="rs-splash-screen">
      Wait a moment while we load your app.
      <div className="rs-loading-dot">.</div>
    </div>
  );
}

/**
 * This HOC will allow to display a Spinner while client is loading the assets necessary for the page
 */
const withSplashScreen = (WrappedComponent) => (props) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {

    if (isLoading) {
      window.addEventListener('load', (event) => {
        // alert('I\'ve been called');
        setIsLoading(false)
      });
    }
  }, [1])
  return (<>
    {isLoading ?
      <LoadingMessage /> : <WrappedComponent {...props} />}
  </>
  );
}

export default withSplashScreen;