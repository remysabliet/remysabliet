
const defaultState = {
  currentSlideIndex: 0
}
// At the beginning, state = [] is empty, it's just an initialization. As soon as the application lives, items will be added to state
export default function global(state = defaultState, action) {
  switch (action.type) {
      case 'UPDATE_CURRENT_SLIDE_INDEX': 
        return {
          ...state,
          currentSlideIndex: action.payload
        }
    default:
      return state
  }
}
