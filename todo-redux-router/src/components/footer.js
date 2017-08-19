import React,{ Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { filterTypes,setFilterItems } from '../reducer/actions'
 class Footer extends Component {
	render () {
		let { onFilterClick } = this.props
		return (<div className ="footer">
								<a href="javascript:;" style={{marginRight:30}} onClick={() => onFilterClick(filterTypes.SHOW_ALL)}>全部</a>
								<a href="javascript:;" style={{marginRight:30}} onClick={() => onFilterClick(filterTypes.SHOW_COMPLETED)}>完成的</a>
								<a href="javascript:;"onClick={() => onFilterClick(filterTypes.SHOW_UNCOMPLETED)}>未完成</a>		
						</div>)
	}

}

Footer.PropTypes = {
	onFilterClick:PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterClick: (filter) => {
      dispatch(setFilterItems(filter))
    }
  }
}

export default connect(
  (state) => state,
  mapDispatchToProps
)(Footer)