import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'

import __ from 'helpers/i18n'
import Routes from 'routes'


const LoadingMessage = () => {
  return (
    <div className="rs-splash-screen">
      Wait a moment while we load your app.
      <div className="rs-loading-dot">.</div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    try {
      // window.addEventListener('load', (event) => {
      //   //alert('Loading is over');
      //   this.setState({
      //     isLoading: false,
      //   });
      // });
      document.addEventListener("readystatechange", event => {

        if (event.target.readyState === "interactive") {      //same as:  document.addEventListener("DOMContentLoaded"...   // same as  jQuery.ready
          // alert("All HTML DOM elements are accessible");
        }

        if (event.target.readyState === "complete") {
          // alert("Now external resources are loaded too, like css,src etc... ");
          this.setState({
            isLoading: false
          });
        }

      });


    } catch (err) {
      console.log(err);
      // this.setState({
      //   isLoading: false,
      // });
    }
  }

  render() {
    const { store } = this.props;
    const { isLoading } = this.state;
    return (
      <>
        {
          // isLoading ?
          //   <LoadingMessage /> :
            (<Provider store={store}>
              <Routes {...this.props} />
            </Provider>)
        }
      </>
    )
  }
}

export default withRouter(App)

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  store: PropTypes.objectOf(PropTypes.any).isRequired
}
