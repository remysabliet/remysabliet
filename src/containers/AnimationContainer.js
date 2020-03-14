import { connect } from 'react-redux'

import { updateFgndDirArrow } from 'actions/global'

/**
 * Return isForegroundDirArrowActive store property (will be available as props of the component inheritating this function)
 * @param {*} state Store
 */
const mapStateToProps = state => {
  return {
    isForegroundDirArrowActive:
      state.animation.isForegroundDirArrowActive
  }
}

/**
 * Update Foreground directional arrow state to make it display/hidden
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
  const updateFgndArrowActive = isActive => {
    dispatch(updateFgndDirArrow(isActive))
  }

  // Other animation related method update to be added

  return {
    setFgndArrowActive: updateFgndArrowActive
    // other setter to be added
  }
}

const AnimationContainer = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)

export default AnimationContainer
