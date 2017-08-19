import React,{ PropTypes } from 'react'
import { connect } from 'react-redux'
import { delItem,toggleItem } from '../reducer/actions'
import Item from './item'
class List extends React.Component {
	 constructor(props) {
	 	super(props)
	// 	this.onHandleclick = this.onHandleclick.bind(this)
	// 	this.handleToggle = this.handleToggle.bind(this)
	// 	this.state = { items: props.items }
	// }
 //  onHandleclick  (item) {
 // 	  this.props.delItem(item)
 //  }
 //  handleToggle (item) {

   }
	render() {
		let { items, onTodoClick, onToggleClick } = this.props
		var ListItems = items.map((item) => {
					return (<Item key={item.id} { ...item } onToggle={ () => onToggleClick(item.id)} onClick = {() => onTodoClick(item.id)} />);
				})
		return (<ul>
				{ ListItems }
			</ul>)
	}
}

List.propTypes = {
	items:PropTypes.arrayOf(PropTypes.shape({
		id:PropTypes.number.isRequired,
		title:PropTypes.string.isRequired,
		completed:PropTypes.bool.isRequired,
	}).isRequired).isRequired,
	onToggleClick: PropTypes.func.isRequired,
	onTodoClick: PropTypes.func.isRequired,
}

function getVisibleItems(items,filter) {
	switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETED':
      return items.filter(t => t.completed)
    case 'SHOW_UNCOMPLETED':
      return items.filter(t => !t.completed)
  }
}

const  mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.items, state.filter),
  }
}

const  mapDispatchToProps = (dispatch) => {
  return {
    onToggleClick: (id) => {
      dispatch(toggleItem(id))
    },
    onTodoClick: (id) => {
			dispatch(delItem(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)