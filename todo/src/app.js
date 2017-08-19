import React from 'react'
import IForm from './components/form'
import List from './components/list'
export default class App extends React.Component {
	constructor(props) {
		 super(props)
		 this.state = {
		 	list:[{ id:1,title:'hahah'},{id:2,title:'cese'}]
		 }
		 this.addItem = this.addItem.bind(this)
		 this.delItem = this.delItem.bind(this)
	}
	addItem (item) {
		var newlist = this.state.list.concat([item])
	
		this.setState({list:newlist})
	}
	delItem (item) {
		var newlist = this.state.list.filter((fitem) => fitem.id !== item.id)
		this.setState({list:newlist})
	}
  render () {
  	let list = this.state.list
    return (<div> Hello world I am Hello MyAtee React 
    	<IForm addItem={this.addItem}></IForm>
    	<List items={list} delItem= {this.delItem} />
    	</div>);
  }
}


