import React from 'react'

export default class Item extends React.Component {
	constructor(props) {
		super(props)
		this.onHandleClick = this.onHandleClick.bind(this)
		this.onCompleted = this.onCompleted.bind(this)
		this.state = { completed: props.item.isCompleted ? true :false,clazz:props.item.isCompleted?'completed':'',item: props.item}
	}
	onHandleClick  () {
		this.props.onClick(this.props.item)
	}
	onCompleted () {
  	this.props.onToggle(this.props.item)
  	this.setState({completed:!this.state.completed,clazz:!this.state.completed?'':'completed'})
  }
	render () {
		console.log(this.props)
		let item = this.props.item
		let clazz = this.state.clazz
		return (<li className={clazz}><input type="checkbox" checked={item.isCompleted} onChange={this.onCompleted} /><span>{ item.title } </span> <a href="javascript:;" onClick={this.onHandleClick}>删除</a> </li>);
	}
}