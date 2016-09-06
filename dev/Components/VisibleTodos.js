import {connect} from 'react-redux';
import TodoList from './TodoList.js';
import {toggleTodo, deleteTodo} from '../actions/index'

const getVisibleTodos = (todos, filter) =>{
  switch(filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(i=>i.completed);
    case 'SHOW_UNCOMPLETED':
      return todos.filter(i=>!i.completed);
    default:
      if(filter === "") return todos;
      else return todos.filter(i=>i.text.toLowerCase().includes(filter));
  }
}

const mapStateToProps = (state)=>{
  return {
    todos : getVisibleTodos(state.todos, state.visibility)
  }
}

const mapDispatchtoProp = (dispatch)=>{
  return {
     onTodoClick(id){
       dispatch(toggleTodo(id));
     },
     deleteIt(id){
       dispatch(deleteTodo(id))
     }
  }
}

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchtoProp
)(TodoList);


export default VisibleTodos;
