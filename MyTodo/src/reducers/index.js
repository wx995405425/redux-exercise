import { combineReducers } from 'redux'
import todos from './todos'
import setFilter from './setFilter'

const todoApp = combineReducers({
  todos,
  setFilter
})

export default todoApp
