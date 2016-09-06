let nextId=3;
export const addTodo = text =>{
  return {
    type: 'ADD_TODO',
    id: nextId++,
    completed: false,
    text

  }
}

export const setVisibilityFilter = filter =>{
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const stringSearch = word =>{
  return {
    type: 'STRING_SEARCH',
    word: word.toLowerCase()
  }
}

export const toggleTodo = id =>{
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = id =>{
  return {
    type: 'DELETE_TODO',
    id
  }
}
