import { connect } from 'react-redux'

import Header from 'components/layout/Header'

function mapStateToProps(state, props) {
  const { location } = props
  const { ui } = state
  return {
    ui,
    location
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    uiActions: bindActionCreators(uiActionCreators, dispatch)
  }
}

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
