import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/';




let AddTodo = ({dispatch})=>{
  let input;
  return(
    <form onSubmit={e=>{
      e.preventDefault();
      if(!input.value.trim())return;
      dispatch(addTodo(input.value.trim()));
      input.value= ""
    }}>
      <input ref={(val)=>input = val} type="text" />
      <button>Добавить туду</button>
    </form>
  )
}

AddTodo = connect()(AddTodo);
export default AddTodo;
