import { connect } from 'react-redux'

import { updateCurrentSlideIndex } from 'actions/global'

/**
 * Return isForegroundDirArrowActive store property (will be available as props of the component inheritating this function)
 * @param {*} state Store
 */
const mapStateToProps = state => {
  return {
    currentSlideIndex:
      state.homepage.currentSlideIndex
  }
}

/**
 * Update Foreground directional arrow state to make it display/hidden
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
  const updateCurrentSlide = slideIndex => {
    dispatch(updateCurrentSlideIndex(slideIndex))
  }

  // Other method related to homepage to be added

  return {
    setCurrentSlideIndex: updateCurrentSlide
    // other setter to be added
  }
}

const HomepageContainer = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)

export default HomepageContainer
