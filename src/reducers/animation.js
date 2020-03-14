const defaultState = {
  isForegroundDirArrowActive: false // Directional arrow present on the footer foreground UI to advise where to go next to user
}
// At the beginning, state = [] is empty, it's just an initialization. As soon as the application lives, items will be added to state
export default function global(state = defaultState, action) {
  switch (action.type) {
      case 'UPDATE_IS_FGND_ARW_ACTIVE': 
        return {
          ...state,
          isForegroundDirArrowActive: action.payload
        }
    default:
      return state
  }
}
