import React,{ PropTypes }  from 'react'
import { connect } from 'react-redux'
import { addItem } from '../reducer/actions'
class TForm extends React.Component {
   newItem () {
   	 let val = this.refs.input.value.trim()
   	 if (val) {
   	 	 this.props.onAddItem(val)
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

TForm.propTypes = {
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
)(TForm)

