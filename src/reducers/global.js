const defaultState = {
  deviceInfo: '',
  locale: ''
}
// At the beginning, state = [] is empty, it's just an initialization. As soon as the application lives, items will be added to state
export default function global(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_DEVICE_INFO':
      return { deviceInfo: action.payload }
    case 'UPDATE_LOCALE':
      return {
        ...state,
        locale: action.payload
      }
    default:
      return state
  }
}
