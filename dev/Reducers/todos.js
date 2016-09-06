let defaultState=  [
    {
      id: 0,
      text: "Помыть машину",
      completed: false
    },
    {
      id: 1,
      text: "Постричь газон",
      completed: false
    },
    {
      id: 2,
      text: "Вымыть руки",
      completed: true
    }
  ];


const reducer = (state= defaultState, action)=>{
  switch(action.type){
    case 'TOGGLE_TODO':
      return state.map(i=>todoReducer(i, action));
    case 'ADD_TODO':
      return [...state, todoReducer(null, action)];
    case 'DELETE_TODO':
      const index = state.findIndex(function(elem,i,array){
        return elem.id === action.id
      });
      return[...state.slice(0, index), ...state.slice(index+1)];
    default:
      return state;
  }
}

const todoReducer = (state,action)=>{
  switch(action.type){
    case 'TOGGLE_TODO': {
        if(state.id !== action.id){
          return state;
        } else {
          return Object.assign({}, state, {
            completed: !state.completed
          })
        }
    }
      case 'ADD_TODO': {
          return {
            id: action.id,
            completed: action.completed,
            text: action.text
          }
      }
      case 'DELETE_TODO': {
        if(action.id !== state.id){
          return;
        } else {
          return null;
        }
      }
      default: return state;
  }
}

export default reducer;
