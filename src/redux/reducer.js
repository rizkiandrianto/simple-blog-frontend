import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';
import edit from './modules/edit';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  notifs,
  counter: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  edit
});
