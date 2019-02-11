// At the beginning, state = [] is empty, it's just an initiaization. As soon as the application lives and we add item to the list, items will be added to state
const deviceInfo = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DEVICE_INFO':
      return action.payload
    default:
      return state
  }
}
export default deviceInfo
