import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import __ from 'helpers/i18n'
import { addEventListener, recomputeViewportSize, removeEventListener } from 'helpers/utils/miscellaneous'
import { animateIfInView } from 'helpers/utils/animation'
import Routes from 'routes'

/**
 * In order to be able to remove the eventListener we must bind 
 * associated function to a component instance.
 * 
 */
class App extends React.Component{
  constructor(props){
    super(props)

    this.animatedElementClassName = "animated-element"

    this.recomputeViewPort = this.recomputeViewPort.bind(this);
    this.animateIfInView = this.animateIfInView.bind(this);

    addEventListener('resize', this.recomputeViewPort)
    addEventListener('resize', this.animateIfInView)
    addEventListener('scroll', this.animateIfInView)
  }

  recomputeViewPort = () => recomputeViewportSize()
  animateIfInView = () => animateIfInView(this.animatedElementClassName)

  componentWillUnmount(){
    removeEventListener('resize', this.recomputeViewPort)
    removeEventListener('resize', this.animateIfInView)
    removeEventListener('scroll', this.animateIfInView)
  }  

  render(){ 
    const { store } = this.props;
    return (
    <Provider store={store}>
      <Routes {...this.props} />
    </Provider>
  )}
}

export default withRouter(App)

App.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  store: PropTypes.objectOf(PropTypes.any).isRequired
}