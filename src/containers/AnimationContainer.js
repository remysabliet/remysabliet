import { connect } from 'react-redux'

import {
  updateFgndDirArrow,
  updateIsSlideControlActivated
} from 'actions/global'

import { CONST_SLIDE_TRANSITION_DURATION } from 'helpers/constants/animation'

/**
 * Return isForegroundDirArrowActive store property (will be available as props of the component inheritating this function)
 * @param {*} state Store
 */
const mapStateToProps = state => {
  return {
    isForegroundDirArrowActive:
      state.animation.isForegroundDirArrowActive,
    isSlideControlActivated:
      state.animation.isSlideControlActivated
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

  // Deactivate and then reactivate control over slide change (navigation)
  const updateSlideMoveController = () => {
    dispatch(updateIsSlideControlActivated(false))
    setTimeout(
      () =>
        dispatch(
          updateIsSlideControlActivated(true)
        ),
      CONST_SLIDE_TRANSITION_DURATION
    )
  }
  // Other animation related method update to be added

  return {
    setFgndArrowActive: updateFgndArrowActive,
    setSlideControllerDeactivated: updateSlideMoveController
    // other setter to be added
  }
}

const AnimationContainer = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)

export default AnimationContainer
