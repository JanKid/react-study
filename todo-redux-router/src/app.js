import React from 'react'
import IForm from './components/form'
import List from './components/list'
import Footer from './components/footer'
export default class App extends React.Component {
  render () {
    return (<div> Hello Welcome to My todo Mvc 
    	<IForm ></IForm>
    	<List />
    	<Footer></Footer>
    	</div>);
  }
}


