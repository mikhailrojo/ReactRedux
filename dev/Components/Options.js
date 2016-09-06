import React from 'react';
import Filter from './Filter.js';

const Options = ({store}) =>(
  <div>
    <Filter store={store} filter="SHOW_ALL">Все </Filter>
    <Filter store={store} filter="SHOW_COMPLETED"> Сделанные </Filter>
    <Filter store={store} filter="SHOW_UNCOMPLETED"> Несделанные </Filter>
  </div>
)

export default Options;
