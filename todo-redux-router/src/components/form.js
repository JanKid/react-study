import React,{ PropTypes }  from 'react'
import { connect } from 'react-redux'
import { addItem } from '../reducer/actions'
class IForm extends React.Component {
   newItem () {
   	 let vl = this.refs.input.value.trim()
   	 if (vl) {
   	 	 this.props.onAddItem(vl)
   	 	 this.refs.input.value = ""
   	 }
   }
   render() {
   	return (<form onSubmit={(e) => { e.preventDefault() }}>
   			<input  type="text" ref="input" />
   			<button onClick={() => this.newItem() }>新增</button>		
   		</form>)
   }

}

IForm.propTypes = {
   onAddItem: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (text) => {
         dispatch(addItem(text))
    }
  }
}
export default connect(
  (state) => state,
  mapDispatchToProps
)(IForm)

