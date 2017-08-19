import React,{ PropTypes } from 'react'

export default class Item extends React.Component {
	render () {
		let {completed,onClick,onToggle,title } = this.props
		return (<li className={ completed?'completed':''}><input type="checkbox"  onChange={onToggle} /><span>{ title }</span> <a href="javascript:;" onClick={onClick}>删除</a> </li>);
	}
}

Item.propTypes = {
	onClick:PropTypes.func.isRequired,
	onToggle:PropTypes.func.isRequired,
	completed:PropTypes.bool.isRequired,
	title:PropTypes.string.isRequired
}
