import React from 'react'
import TForm from './components/form'
import List from './components/list'
import Footer from './components/footer'
export default class App extends React.Component {
  render () {
    return (
    	<div style={{ margin:'20px auto',width:500 }}>
    		<h2> Hello Welcome to My todo Mvc </h2>
    	<TForm ></TForm>
    	<List />
    	<Footer></Footer>
    	</div>);
  }
}


