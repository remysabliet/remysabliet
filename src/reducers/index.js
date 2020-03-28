import { combineReducers } from 'redux'

import animation from 'reducers/animation'
import global from 'reducers/global'
import homepage from 'reducers/homepage'

const rootReducer = combineReducers({animation, global, homepage })
export default rootReducer
