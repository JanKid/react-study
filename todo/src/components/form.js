import React from 'react'

export default class IForm extends React.Component {
	 constructor(props) {
	 	super(props)
	 	  this.newItem = this.newItem.bind(this)
	 
	 }
   newItem () {
   	 let vl = this.refs.input.value.trim()
   	 if (vl) {
   	 	let now = new Date()
   	 	 this.props.addItem({ title:vl,id:now.valueOf() })
   	 	 this.refs.input.value = ""
   	 }
   }
   handleSubmit(e) {
   	return false
   }
   render() {
   	return (<form onSubmit={(e) => { e.preventDefault() }}>
   			<input  type="text" ref="input" />
   			<button onClick={this.newItem}>新增</button>		
   		</form>)
   }

}