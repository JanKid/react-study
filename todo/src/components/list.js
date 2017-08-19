import React from 'react'
import Item from './item'
export default class List extends React.Component {
	constructor(props) {
		super(props)
		this.onHandleclick = this.onHandleclick.bind(this)
		this.handleToggle = this.handleToggle.bind(this)
		this.state = { items: props.items }
	}
  onHandleclick  (item) {
 	  this.props.delItem(item)
  }
  handleToggle (item) {

  }
	render() {
		let items = this.props.items
		var ListItems = items.map((item) => {
					console.log(item);
					return (<Item key={item.id} item={item} onToggle={this.handleToggle} onClick = {this.onHandleclick} />);
				})
		return (<ul>
				{ ListItems }
			</ul>)
	}
}