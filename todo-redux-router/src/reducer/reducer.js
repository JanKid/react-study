import { combineReducers } from 'redux';
import { ADD_ITEM, DEL_ITEM, TOGGLE_ITEM, FILTER_ITEMS,filterTypes } from './actions'
const initState = {
  items: [{id:1,title:'hello I like react',completed:false}],
  filter: filterTypes.SHOW_ALL
}

 export default function todoApp(state = initState, action) {
 console.log(action)
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, { items: [...state.items, { id: new Date().valueOf(), title: action.text, completed: false }] })
    case DEL_ITEM:
      return Object.assign({}, state, { items: state.items.filter(item => item.id !== action.id)  })
    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        items: state.items.map(item => {
          if (item.id === action.id) {
            return Object.assign({}, item, { completed: !item.completed })
          }
          return item
        })
      })
    case FILTER_ITEMS:
      return Object.assign({}, state, { filter: action.filter })
    default:
      return state
  }
}
