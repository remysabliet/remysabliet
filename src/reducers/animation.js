const defaultState = {
  isForegroundDirArrowActive: false, // Directional arrow present on the footer foreground UI to advise where to go next to user
  isSlideControlActivated: true // flag allowing control over the slide position to the user
}
// At the beginning, state = [] is empty, it's just an initialization. As soon as the application lives, items will be added to state
export default function global(
  state = defaultState,
  action
) {
  switch (action.type) {
    case 'UPDATE_IS_FGND_ARW_ACTIVE':
      return {
        ...state,
        isForegroundDirArrowActive: action.payload
      }
    case 'UPDATE_IS_SLIDE_CONTROL_ACTIVATED':
      return {
        ...state,
        isSlideControlActivated: action.payload
      }
    default:
      return state
  }
}
