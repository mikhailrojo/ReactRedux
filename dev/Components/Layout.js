import React, {Component, PropTypes} from 'react';
import {createStore} from 'redux';
import reducer from '../Reducers/index.js'
import VisibleTodos from './VisibleTodos.js';
import AddTodo from './AddTodo.js';
import Options from './Options.js';
import Searcher from './Searcher';
import {Provider} from 'react-redux';

const store = createStore(reducer);

export default class Layout extends Component{
    render(){
      return(
        <Provider store={store}>
            <div>
              <AddTodo />
              <VisibleTodos />
              <Options />
              <Searcher />
            </div>
        </Provider>
      )
    }
}
