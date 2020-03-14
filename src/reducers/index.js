import { combineReducers } from 'redux'
import global from 'reducers/global'
import animation from 'reducers/animation'

const rootReducer = combineReducers({ global, animation })
export default rootReducer
