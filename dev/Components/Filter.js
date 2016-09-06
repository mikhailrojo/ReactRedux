import React from 'react';
import {connect} from 'react-redux';
import Link from './Link.js';
import {setVisibilityFilter} from '../actions'


const mapDispatchtoProp = (dispatch, ownProps)=>{
  return{
    onClick(e){
      
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const mapStateToProps = (state)=>{
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchtoProp)(Link);
