const reducer = (state='SHOW_ALL', action)=>{
  switch(action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    case 'STRING_SEARCH':
      return action.word;
    default:
      return state;
  }
}

export default reducer;
