import Todo from './Todo.js';

import React, {PropTypes} from 'react';


const TodoList = ({todos, onTodoClick, deleteIt}) => (
  <ul>
  {todos.map((todo)=>
    <Todo
    key={todo.id}
    {...todo}
    onClick={()=>onTodoClick(todo.id)}
    deleteIt={()=>deleteIt(todo.id)}
    />
  )}
  </ul>
)

TodoList.propTypes ={
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick :PropTypes.func.isRequired
}
export default TodoList;
