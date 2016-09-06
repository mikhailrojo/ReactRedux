import React from 'react';
import {stringSearch} from '../actions';
import {connect} from 'react-redux';

let Searcher =({dispatch})=>{
  let inputValue;
  return(
    <form onSubmit={(e)=>{
        e.preventDefault();
        dispatch(stringSearch(inputValue.value));
    }}>
      <input ref={e=>inputValue= e}/>
      <button>Найти туду</button>
    </form>
  )
}

Searcher = connect()(Searcher);
export default Searcher;
