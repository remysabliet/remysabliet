import React, { useState, useEffect } from "react"

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Wait a moment while we load your app.
      <div className="loading-dot">.</div>
    </div>
  );
}

const withSplashScreen = (WrappedComponent) => {
  return class extends React.Component {

    constructor(props) {
      super(props);

      console.log("inside withSplash")
      this.state = {
        isLoading: true,
      };

      console.log("inside withSplash")
    }

    async componentDidMount() {
      try {
        await auth0Client.loadSession();
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
     return ( <>
      {this.state.isLoading ?
        (<>
          <div className="rs-splash-screen">
            Loading
          <div className="rs-loading-dot">
              .
            </div>
          </div>
        </>
        ) : <WrappedComponent/>}
    </>
     )}
  };
}

export default withSplashScreen;