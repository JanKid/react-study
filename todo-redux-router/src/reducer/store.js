import { createStore } from 'redux'
import todoApp from './reducer' 

var store = createStore(todoApp)

export default  store