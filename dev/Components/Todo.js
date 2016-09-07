import React, {PropTypes} from 'react';

const Todo = ({onClick, completed, text, deleteIt})=>(
  <li
    onClick={onClick}
    style = {{
      textDecoration: completed ? "line-through" : "none"
    }}>
    {text}
    <span onClick={deleteIt}><button>X</button></span>
  </li>
)

Todo.propTypes = {
  onClick : PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
